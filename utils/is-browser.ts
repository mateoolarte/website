export function isBrowser(): boolean {
  if (typeof window !== 'undefined') {
    return true;
  } else {
    return false;
  }
}
