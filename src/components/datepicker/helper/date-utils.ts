import {
  formatGregorianDate,
  getCurrentGregorianDate,
  getDaysInGregorianMonth,
  isValidGregorianDate,
  parseGregorianDate,
  type GregorianDate
} from '../../../utils/gregorian-date';
import {
  formatJalaliDate,
  getCurrentJalaliDate,
  getDaysInJalaliMonth,
  isValidJalaliDate,
  parseJalaliDate,
  type JalaliDate
} from '../../../utils/jalali-date';
import {
  formatDateWithCustomFormat,
  parseDateWithCustomFormat,
  type DisplayFormat
} from './format-utils';

export type CalendarType = 'jalali' | 'miladi';

export const getCurrentDate = (calendarType: CalendarType): JalaliDate | GregorianDate => {
  return calendarType === 'jalali' ? getCurrentJalaliDate() : getCurrentGregorianDate();
};

export const parseDate = (
  value: string,
  calendarType: CalendarType
): JalaliDate | GregorianDate | null => {
  return calendarType === 'jalali' ? parseJalaliDate(value) : parseGregorianDate(value);
};

export const formatDate = (
  date: JalaliDate | GregorianDate,
  calendarType: CalendarType
): string => {
  if (calendarType === 'jalali') {
    return isValidJalaliDate(date as JalaliDate) ? formatJalaliDate(date as JalaliDate) : '';
  } else {
    return isValidGregorianDate(date as GregorianDate)
      ? formatGregorianDate(date as GregorianDate)
      : '';
  }
};

export const formatDateWithFormat = (
  date: JalaliDate | GregorianDate,
  calendarType: CalendarType,
  format: DisplayFormat
): string => {
  if (calendarType === 'jalali') {
    return isValidJalaliDate(date as JalaliDate)
      ? formatDateWithCustomFormat(date, calendarType, format)
      : '';
  } else {
    return isValidGregorianDate(date as GregorianDate)
      ? formatDateWithCustomFormat(date, calendarType, format)
      : '';
  }
};

export const parseDateWithFormat = (
  value: string,
  calendarType: CalendarType,
  format: DisplayFormat
): JalaliDate | GregorianDate | null => {
  // First try to parse with the specified format
  const parsedWithFormat = parseDateWithCustomFormat(value, calendarType, format);
  if (parsedWithFormat) return parsedWithFormat;

  // Fallback to default parsing if format parsing fails
  return parseDate(value, calendarType);
};

export const isValidDate = (
  date: JalaliDate | GregorianDate,
  calendarType: CalendarType
): boolean => {
  return calendarType === 'jalali'
    ? isValidJalaliDate(date as JalaliDate)
    : isValidGregorianDate(date as GregorianDate);
};

export const getDaysInMonth = (
  date: JalaliDate | GregorianDate,
  calendarType: CalendarType
): number => {
  if (calendarType === 'jalali') {
    return getDaysInJalaliMonth((date as JalaliDate).year, (date as JalaliDate).month);
  } else {
    return getDaysInGregorianMonth((date as GregorianDate).year, (date as GregorianDate).month);
  }
};

export const getValidInitialDate = (
  value: string | undefined,
  calendarType: CalendarType,
  format: DisplayFormat = 'default'
): JalaliDate | GregorianDate => {
  if (value) {
    const parsed = parseDateWithFormat(value, calendarType, format);
    if (parsed) return parsed;
  }
  return getCurrentDate(calendarType);
};
