const year = 1000 * 60 * 60 * 24 * 365;

export const yearsFromDate = (date: Date) => {
  const difMs = Date.now() - date.getTime();
  const dateFromEpoch = new Date(difMs);
  const years = Math.abs(dateFromEpoch.getUTCFullYear() - 1970);

  if (years <= 6) return years;

  const lowerMultipleOf5 = Math.floor(years / 5) * 5;
  const lowerMultipleOf2 = Math.floor(years / 2) * 2;

  return Math.max(lowerMultipleOf5, lowerMultipleOf2);
};
