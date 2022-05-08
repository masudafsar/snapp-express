export const digitToPersian = (value: string): string => {
  return value.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
}
