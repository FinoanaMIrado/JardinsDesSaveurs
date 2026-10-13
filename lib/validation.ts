export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

export function isValidPhone(value: string) {
  const digits = value.replace(/[\s.\-()]/g, '')
  return /^\+?\d{9,15}$/.test(digits)
}
