export function isWindow(): boolean {
  if (typeof window !== "undefined") {
    return true;
  } else {
    return false;
  }
}
