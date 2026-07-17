export function formatDate(
  date,
  options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }
) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );
}

export function formatCurrentDate() {
  return formatDate(new Date(), {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}