import { useRef, useCallback, useEffect, type RefObject } from 'react'

type SwipeOptions = {
  threshold?: number
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

export function useSwipe({ threshold = 40, onSwipeLeft, onSwipeRight }: SwipeOptions) {
  const startX = useRef(0)
  const startY = useRef(0)
  const tracking = useRef(false)
  const lockedAxis = useRef<'x' | 'y' | null>(null)

  const reset = useCallback(() => {
    tracking.current = false
    lockedAxis.current = null
  }, [])

  const finishSwipe = useCallback(
    (clientX: number, clientY: number) => {
      if (!tracking.current) return

      const dx = startX.current - clientX
      const dy = startY.current - clientY
      const axis = lockedAxis.current

      reset()

      if (axis === 'y') return
      if (Math.abs(dx) < threshold) return
      if (axis !== 'x' && Math.abs(dx) < Math.abs(dy) * 0.9) return

      if (dx > 0) onSwipeLeft()
      else onSwipeRight()
    },
    [onSwipeLeft, onSwipeRight, reset, threshold]
  )

  const startSwipe = useCallback((clientX: number, clientY: number) => {
    tracking.current = true
    lockedAxis.current = null
    startX.current = clientX
    startY.current = clientY
  }, [])

  const moveSwipe = useCallback((clientX: number, clientY: number) => {
    if (!tracking.current) return

    const dx = Math.abs(clientX - startX.current)
    const dy = Math.abs(clientY - startY.current)

    if (!lockedAxis.current && (dx > 8 || dy > 8)) {
      if (dx >= dy * 0.75) lockedAxis.current = 'x'
      else if (dy >= dx * 0.75) lockedAxis.current = 'y'
    }
  }, [])

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      startSwipe(e.clientX, e.clientY)
    },
    [startSwipe]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      moveSwipe(e.clientX, e.clientY)
    },
    [moveSwipe]
  )

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => finishSwipe(e.clientX, e.clientY),
    [finishSwipe]
  )

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startSwipe(e.touches[0].clientX, e.touches[0].clientY)
    },
    [startSwipe]
  )

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      moveSwipe(e.touches[0].clientX, e.touches[0].clientY)
    },
    [moveSwipe]
  )

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => finishSwipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
    [finishSwipe]
  )

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: reset,
    onPointerLeave: reset,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: reset,
  }
}

/** Capture-phase touch listeners so swipe works over scrollable children */
export function useSwipeElement<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { threshold = 35, onSwipeLeft, onSwipeRight }: SwipeOptions
) {
  const handlers = useRef({ onSwipeLeft, onSwipeRight, threshold })
  handlers.current = { onSwipeLeft, onSwipeRight, threshold }

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let startX = 0
    let startY = 0
    let tracking = false
    let axis: 'x' | 'y' | null = null

    const reset = () => {
      tracking = false
      axis = null
    }

    const onStart = (clientX: number, clientY: number) => {
      tracking = true
      axis = null
      startX = clientX
      startY = clientY
    }

    const onMove = (clientX: number, clientY: number) => {
      if (!tracking) return
      const dx = Math.abs(clientX - startX)
      const dy = Math.abs(clientY - startY)
      if (!axis && (dx > 8 || dy > 8)) {
        if (dx >= dy * 0.75) axis = 'x'
        else if (dy >= dx * 0.75) axis = 'y'
      }
      return axis
    }

    const onEnd = (clientX: number, clientY: number) => {
      if (!tracking) return
      const { threshold: t, onSwipeLeft: left, onSwipeRight: right } = handlers.current
      const dx = startX - clientX
      const dy = startY - clientY
      const locked = axis
      reset()
      if (locked === 'y') return
      if (Math.abs(dx) < t) return
      if (locked !== 'x' && Math.abs(dx) < Math.abs(dy) * 0.9) return
      if (dx > 0) left()
      else right()
    }

    const touchStart = (e: TouchEvent) => {
      onStart(e.touches[0].clientX, e.touches[0].clientY)
    }

    const touchMove = (e: TouchEvent) => {
      const locked = onMove(e.touches[0].clientX, e.touches[0].clientY)
      if (locked === 'x') e.preventDefault()
    }

    const touchEnd = (e: TouchEvent) => {
      onEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }

    const pointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      onStart(e.clientX, e.clientY)
    }

    const pointerMove = (e: PointerEvent) => {
      onMove(e.clientX, e.clientY)
    }

    const pointerUp = (e: PointerEvent) => {
      onEnd(e.clientX, e.clientY)
    }

    el.addEventListener('touchstart', touchStart, { passive: true, capture: true })
    el.addEventListener('touchmove', touchMove, { passive: false, capture: true })
    el.addEventListener('touchend', touchEnd, { passive: true, capture: true })
    el.addEventListener('touchcancel', reset, { passive: true, capture: true })
    el.addEventListener('pointerdown', pointerDown, { capture: true })
    el.addEventListener('pointermove', pointerMove, { capture: true })
    el.addEventListener('pointerup', pointerUp, { capture: true })
    el.addEventListener('pointercancel', reset, { capture: true })

    return () => {
      el.removeEventListener('touchstart', touchStart, true)
      el.removeEventListener('touchmove', touchMove, true)
      el.removeEventListener('touchend', touchEnd, true)
      el.removeEventListener('touchcancel', reset, true)
      el.removeEventListener('pointerdown', pointerDown, true)
      el.removeEventListener('pointermove', pointerMove, true)
      el.removeEventListener('pointerup', pointerUp, true)
      el.removeEventListener('pointercancel', reset, true)
    }
  }, [ref])
}
