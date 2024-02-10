export function classes(classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(" ");
}
