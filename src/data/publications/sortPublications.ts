export const sortPublications = (a, b) => {
  const aYear = a.data.year;
  const bYear = b.data.year;
  const aYearIsString = typeof aYear === "string";
  const bYearIsString = typeof bYear === "string";

  // First priority: String years come before numeric years
  if (aYearIsString && !bYearIsString) {
    return -1; // a (string) comes first
  }
  if (!aYearIsString && bYearIsString) {
    return 1; // b (string) comes first
  }

  // Both numbers - sort numerically (descending)
  if (
    typeof aYear === "number" &&
    typeof bYear === "number" &&
    bYear !== aYear
  ) {
    return bYear - aYear;
  }

  // Second priority: If years are equal, sort alphabetically by title
  return a.data.title < b.data.title ? -1 : a.data.title > b.data.title ? 1 : 0;
};
