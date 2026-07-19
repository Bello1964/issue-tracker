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

  return new Intl.DateTimeFormat(
    "en-GB",
    options
  ).format(new Date(date));
}

export function formatShortDate(date) {
  return formatDate(date, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatLongDate(date) {
  return formatDate(date, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(date) {
  if (!date) return "—";

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  ).format(new Date(date));
}

export function formatTime(date) {
  if (!date) return "—";

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  ).format(new Date(date));
}

export function formatPickerDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(new Date(date));
}

export function formatCurrentDate() {
  return formatLongDate(new Date());
}

export function isOverdue(date) {
  if (!date) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(date);
  dueDate.setHours(0, 0, 0, 0);

  return dueDate < today;
}

export function isDueToday(date) {
  if (!date) {
    return false;
  }

  const today = new Date();
  const dueDate = new Date(date);

  return (
    today.getFullYear() === dueDate.getFullYear() &&
    today.getMonth() === dueDate.getMonth() &&
    today.getDate() === dueDate.getDate()
  );
}

export function isDueSoon(date, days = 3) {
  if (!date) {
    return false;
  }

  const today = new Date();
    today.setHours(0, 0, 0, 0);

  const dueDate = new Date(date);
    dueDate.setHours(0, 0, 0, 0);

  const difference =
    dueDate.getTime() - today.getTime();

  const differenceInDays =
    difference / (1000 * 60 * 60 * 24);

  return (
    differenceInDays > 0 &&
    differenceInDays <= days
  );
}