export default function generateId(string: string) {
  return string.toLowerCase().replaceAll(' ', '-');
}