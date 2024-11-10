export const Month = {
  JANUARY: {
    key: 'january',
    index:  0,
  },
  FEBRUARY: {
    key: 'february',
    index:  1,
  },
  MARCH: {
    key: 'march',
    index:  2,
  },
  APRIL: {
    key: 'april',
    index:  3,
  },
  MAY: {
    key: 'may',
    index:  4,
  },
  JUNE: {
    key: 'june',
    index:  5,
  },
  JULY: {
    key: 'july',
    index:  6,
  },
  AUGUST: {
    key: 'august',
    index:  7,
  },
  SEPTEMBER: {
    key: 'september',
    index:  8,
  },
  OCTOBER: {
    key: 'october',
    index:  9,
  },
  NOVEMBER: {
    key: 'november',
    index:  10,
  },
  DECEMBER: {
    key: 'december',
    index:  11,
  },
} as const

export type Month = typeof Month[keyof typeof Month]
