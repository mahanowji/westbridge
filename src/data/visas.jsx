import { australiaVisas } from './visasAustralia.jsx';
import { canadaVisas } from './visasCanada.jsx';
import { ukVisas } from './visasUk.jsx';
import { germanyVisas } from './visasGermany.jsx';
import { netherlandsVisas } from './visasNetherlands.jsx';
import { finlandVisas } from './visasFinland.jsx';
import { spainVisas } from './visasSpain.jsx';
import { italyVisas } from './visasItaly.jsx';
import { newZealandVisas } from './visasNewZealand.jsx';

export const visaCategories = [
  'skilled',
  'family',
  'student',
  'visitor',
  'business',
  'humanitarian',
  'working_holiday',
  'residency',
];

export const visas = [
  ...australiaVisas,
  ...canadaVisas,
  ...ukVisas,
  ...germanyVisas,
  ...netherlandsVisas,
  ...finlandVisas,
  ...spainVisas,
  ...italyVisas,
  ...newZealandVisas,
];

export const visasByCountry = {
  australia: australiaVisas,
  canada: canadaVisas,
  uk: ukVisas,
  germany: germanyVisas,
  netherlands: netherlandsVisas,
  finland: finlandVisas,
  spain: spainVisas,
  italy: italyVisas,
  'new-zealand': newZealandVisas,
};

export function getVisasByCountry(countryId) {
  if (!countryId || countryId === 'all') return visas;
  return visasByCountry[countryId] ?? [];
}

export function countVisas(countryId, category) {
  return visas.filter(
    (v) =>
      (countryId === 'all' || v.country === countryId) &&
      (category === 'all' || v.category === category),
  ).length;
}
