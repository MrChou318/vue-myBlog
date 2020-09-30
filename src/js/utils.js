export default {
  // 向下平滑滚动
  smoothScrollDown (STEP, targetOffsetTop) {
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // 已经滚动到底部
    if (scrollHeight - clientHeight - 1 <= scrollTop) {
      return
    }
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
  },
  // 获取元素绝对位置
  getElementTop (element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }
    return actualTop
  }
}
