export function cleanCountrieName(name: string) {
  if (name.includes('(')) {
    return name.split(/\s\(.*?\)/g)[0];
  } else {
    return name.split(',')[0];
  }
}
