const throttle = function (fn, interval) {
  let timer
  return function () {
    let _self = this, args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(_self, args)
      }, interval || 500)
    }
  }
}

export default throttle
