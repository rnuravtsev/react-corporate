export const debounce = (cb: () => unknown, delay: number = 250) => {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(cb, delay);
  };
};
