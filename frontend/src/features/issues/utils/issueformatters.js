export function formatStatus(status) {
  const labels = {
    open: "Open",
    "in-progress": "In Progress",
    resolved: "Resolved",
  };

  return labels[status] ?? status;
}

export function formatPriority(priority) {
  const labels = {
    low: "Low",
    medium: "Medium",
    high: "High",
  };

  return labels[priority] ?? priority;
}

export function formatDate(date) {
  if (!date) {
    return "-";
  }

  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}