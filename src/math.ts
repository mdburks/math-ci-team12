export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function average(numbers: number[]): number | null {
  if (numbers.length === 0) return null;
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}

export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function quadratic(
  a: number,
  b: number,
  c: number,
): [number, number] | [number] | null {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null;
  if (discriminant === 0) return [-b / (2 * a)];
  const sqrtD = Math.sqrt(discriminant);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}
