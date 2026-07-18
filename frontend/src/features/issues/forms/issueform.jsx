import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function IssueForm({
  defaultValues,
  onSubmit,
  formId = "issue-form",
}) {
  const [formData, setFormData] = useState({
    title: defaultValues?.title ?? "",
    description:
      defaultValues?.description ?? "",
    priority:
      defaultValues?.priority ?? "medium",
    status:
      defaultValues?.status ?? "open",
    assignee:
      defaultValues?.assignee?.id ?? "",
    dueDate: defaultValues?.dueDate
      ? new Date(defaultValues.dueDate)
          .toISOString()
          .slice(0, 16)
      : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  const payload = {
    ...formData,
    dueDate: formData.dueDate
  ? new Date(formData.dueDate).toISOString()
  : undefined,
  };

  if (!payload.description.trim()) {
    delete payload.description;
  }

  if (!payload.assignee.trim()) {
    delete payload.assignee;
  }

  onSubmit(payload);
};

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="space-y-5 pb-2"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Title *
        </label>

        <Input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <Textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Priority *
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-md border bg-background px-3 py-2"
          >
            <option value="low">Low</option>

            <option value="medium">
              Medium
            </option>

            <option value="high">
              High
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Status *
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-md border bg-background px-3 py-2"
          >
            <option value="open">
              Open
            </option>

            <option value="in_progress">
              In Progress
            </option>

            <option value="resolved">
              Resolved
            </option>
          </select>
        </div>

      </div>

      <div className="grid gap-5 lg:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Assignee
          </label>

          <Input
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Due Date *
          </label>

          <Input
            type="datetime-local"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

      </div>
    </form>
  );
}