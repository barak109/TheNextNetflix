export const debounce = (func: any, delay: number) => {
  let inDebounce: NodeJS.Timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
