import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { issueSchema } from "@/lib/validations/issue.schema";
import {formatPickerDate,} from "@/lib/utils/date";
import useAllUsers from "@/features/users/hooks/useallusers";
import { useEffect } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function IssueForm({
  defaultValues,
  onSubmit,
  formId = "issue-form",
}) {
  const form = useForm({
    resolver: zodResolver(issueSchema),

    defaultValues: {
      title: defaultValues?.title ?? "",
      description: defaultValues?.description ?? "",
      priority: defaultValues?.priority ?? "medium",
      status: defaultValues?.status ?? "open",
      assignee: defaultValues?.assignee?.id ?? "__unassigned__",
      dueDate: defaultValues?.dueDate
        ? formatPickerDate(defaultValues.dueDate)
        : "",
    },
  });

  useEffect(() => {
  if (!defaultValues) return;

  form.reset({
    title: defaultValues.title ?? "",
    description: defaultValues.description ?? "",
    priority: defaultValues.priority ?? "medium",
    status: defaultValues.status ?? "open",
    assignee: defaultValues.assignee?.id ?? "",
    dueDate: defaultValues.dueDate
      ? defaultValues.dueDate.slice(0, 16)
      : "",
  });
}, [defaultValues, form]);

  const {users,
    isLoading: usersLoading,
  } = useAllUsers();

const handleSubmit = (values) => {
  const payload = {
    ...values,

    assignee:
      values.assignee === "__unassigned__"
        ? ""
        : values.assignee,

    dueDate: values.dueDate
      ? formatPickerDate(values.dueDate)
      : undefined,
  };

  if (!payload.description?.trim()) {
    delete payload.description;
  }

  if (!payload.assignee?.trim()) {
    delete payload.assignee;
  }

  onSubmit(payload);
};

  return (
    <Form {...form}>
      <form
        id={formId}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 pb-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title *</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea
                  rows={5}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 lg:grid-cols-2">
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority *</FormLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="low">
                    Low
                  </SelectItem>

                  <SelectItem value="medium">
                    Medium
                  </SelectItem>

                  <SelectItem value="high">
                    High
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status *</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="open">
                    Open
                  </SelectItem>

                  <SelectItem value="in_progress">
                    In Progress
                  </SelectItem>

                  <SelectItem value="resolved">
                    Resolved
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
        <FormField
          control={form.control}
          name="assignee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assignee</FormLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={usersLoading}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        usersLoading
                          ? "Loading users..."
                          : "Select assignee"
                      }
                    />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="__unassigned__">
                    No Assignee
                  </SelectItem>

                {users.map((user) => (
                  <SelectItem
                    key={user.id}
                    value={user.id}
                  >
                    {user.firstName} {user.lastName} ({user.email})
                  </SelectItem>
                ))}
                </SelectContent>

              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date *</FormLabel>

                <FormControl>
                  <Input
                    type="datetime-local"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}