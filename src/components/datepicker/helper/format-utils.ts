import type { JalaliDate } from '../../../utils/jalali-date';
import type { GregorianDate } from '../../../utils/gregorian-date';

export type DisplayFormat = 'default' | 'dash' | 'dot' | 'space';

export const formatDateWithCustomFormat = (
  date: JalaliDate | GregorianDate,
  calendarType: 'jalali' | 'miladi',
  format: DisplayFormat = 'default'
): string => {
  const year = date.year.toString();
  const month = date.month.toString().padStart(2, '0');
  const day = date.day.toString().padStart(2, '0');

  switch (format) {
    case 'dash':
      return `${year}-${month}-${day}`;
    case 'dot':
      return `${year}.${month}.${day}`;
    case 'space':
      return `${year} ${month} ${day}`;
    case 'default':
    default:
      return `${year}/${month}/${day}`;
  }
};

export const parseDateWithCustomFormat = (
  dateString: string,
  calendarType: 'jalali' | 'miladi',
  format: DisplayFormat = 'default'
): JalaliDate | GregorianDate | null => {
  let regex: RegExp;

  switch (format) {
    case 'dash':
      regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
      break;
    case 'dot':
      regex = /^(\d{4})\.(\d{1,2})\.(\d{1,2})$/;
      break;
    case 'space':
      regex = /^(\d{4})\s+(\d{1,2})\s+(\d{1,2})$/;
      break;
    case 'default':
    default:
      regex = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/;
      break;
  }

  const match = dateString.match(regex);
  if (!match) return null;

  const year = parseInt(match[1]);
  const month = parseInt(match[2]);
  const day = parseInt(match[3]);

  if (month < 1 || month > 12) return null;
  if (day < 1 || day > 31) return null;

  return { year, month, day };
};
