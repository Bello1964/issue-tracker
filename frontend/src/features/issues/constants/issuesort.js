const ISSUE_SORT_OPTIONS = [
  {
    value: "newest",
    label: "Newest",
    sortBy: "createdAt",
    order: "desc",
  },
  {
    value: "oldest",
    label: "Oldest",
    sortBy: "createdAt",
    order: "asc",
  },
  {
    value: "updated",
    label: "Recently Updated",
    sortBy: "updatedAt",
    order: "desc",
  },
  {
    value: "priority",
    label: "Priority",
    sortBy: "priority",
    order: "desc",
  },
  {
    value: "due-date",
    label: "Due Date",
    sortBy: "dueDate",
    order: "asc",
  },
  {
    value: "status",
    label: "Status",
    sortBy: "status",
    order: "asc",
  },
];

export default function getSortOption(value) {
  return ISSUE_SORT_OPTIONS.find(
    (option) => option.value === value
  );
}