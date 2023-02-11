export function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(args);
    }, wait);
  };
}

export function throttle(fn, limit) {
  let lastTime = null;
  return function (...args) {
    if (!lastTime) {
      fn.apply(args);
      lastTime = Date.now();
    } else if (Date.now() - lastTime >= limit) {
      fn.apply(args);
      lastTime = Date.now();
    }
  };
}
