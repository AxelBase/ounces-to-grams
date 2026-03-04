// src/lib/converter.js
// ────────────────────────────────────────────────
// Single source of truth for all conversion logic
// ────────────────────────────────────────────────

export const OZ_TO_GRAMS = 28.349523125;

export function ouncesToGrams(oz) {
  const value = Number(oz);
  return isNaN(value) ? NaN : value * OZ_TO_GRAMS;
}

export function gramsToOunces(g) {
  const value = Number(g);
  return isNaN(value) ? NaN : value / OZ_TO_GRAMS;
}

export function formatResult(value) {
  if (isNaN(value) || value === '') return '';
  return Number(value).toFixed(2);
}

export function isValidInput(value) {
  if (value === '') return true;
  const num = Number(value);
  return !isNaN(num) && num >= 0;
}