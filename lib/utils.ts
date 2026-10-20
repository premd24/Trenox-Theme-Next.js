/** Public URL of a template image in /public/images. */
export const img = (file: string) => `/images/${file}`;

/** Joins class names, skipping empty values. */
export const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");
