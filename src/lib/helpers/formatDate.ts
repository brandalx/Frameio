export function formatDate(inputDateStr: string): string {
  const now = new Date();
  const inputDate = new Date(inputDateStr);

  const diff = now.getTime() - inputDate.getTime();

  const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    return `today at ${inputDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
  } else if (daysDiff > 0 && daysDiff < 8) {
    return `${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
  } else {
    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${inputDate.getDate()}${
      inputDate.getDate() === 1
        ? "st"
        : inputDate.getDate() === 2
        ? "nd"
        : inputDate.getDate() === 3
        ? "rd"
        : "th"
    } of ${
      monthNames[inputDate.getMonth()]
    } ${inputDate.getFullYear()} at ${inputDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${inputDate.getMinutes().toString().padStart(2, "0")}`;
  }
}
