export const clearObject = (object) => {
  return Object.keys(object).reduce((acc, curr) => ({...acc, [curr]: null}), {});
}