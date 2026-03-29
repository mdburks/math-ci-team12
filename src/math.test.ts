import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, factorial, power, average, clamp, quadratic } from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('returns base raised to exponent: 2^3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 for any number raised to 0: 5^0 = 1', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('returns the mean of [2, 4, 6]: (2+4+6)/3 = 4', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('returns value unchanged when within range: clamp(5,1,10) = 5', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it('returns min when value is below min: clamp(-3,0,100) = 0', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });
  it('returns max when value is above max: clamp(150,0,100) = 100', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('quadratic', () => {
  it('returns two roots for x^2 - 5x + 6 = 0 → roots 3 and 2', () => {
    expect(quadratic(1, -5, 6)).toEqual([3, 2]);
  });
  it('returns one root when discriminant is 0: x^2 - 2x + 1 = 0 → root 1', () => {
    expect(quadratic(1, -2, 1)).toEqual([1]);
  });
  it('returns null when discriminant is negative: x^2 + 1 = 0', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
});

