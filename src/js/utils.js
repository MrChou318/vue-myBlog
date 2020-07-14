export default {
  // 向下平滑滚动
  smoothScrollDown (STEP, targetOffsetTop) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (targetOffsetTop - scrollTop >= STEP) {
      scrollTop += STEP
    } else {
      scrollTop = targetOffsetTop
    }
    document.body.scrollTop = scrollTop
    document.documentElement.scrollTop = scrollTop
    if (targetOffsetTop > scrollTop) {
      requestAnimationFrame(() => { this.smoothScrollDown(STEP, targetOffsetTop) })
    }
  },
  // 向上平滑滚动
  smoothScrollUp (STEP, targetOffsetTop) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > targetOffsetTop) {
      if (scrollTop - targetOffsetTop >= STEP) {
        scrollTop -= STEP
      } else {
        scrollTop = targetOffsetTop
      }
      document.body.scrollTop = scrollTop
      document.documentElement.scrollTop = scrollTop
      if (scrollTop > targetOffsetTop) {
        requestAnimationFrame(() => { this.smoothScrollUp(STEP, targetOffsetTop) })
      }
    }
  }
}
