export const debounce = (cb: () => unknown, delay: number = 1000) => {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(cb, delay);
  };
};
