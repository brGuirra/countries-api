export function format(value: [{ name: string }]) {
  return value
    .reduce((formatedValues: string[], value) => {
      return (formatedValues = [...formatedValues, value.name]);
    }, [])
    .toString()
    .replace(/,/g, ', ');
}
