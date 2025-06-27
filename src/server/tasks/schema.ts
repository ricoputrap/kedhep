import * as z from "zod/v4";

export const getTasksSchema = z.object({
  searchQuery: z.string().optional()
});

export const updateTaskCompletionSchema = z.object({
  id: z.number().min(1),
  completed: z.boolean()
});

export type GetTasksSchema = z.infer<typeof getTasksSchema>;
export type UpdateTaskCompletionSchema = z.infer<typeof updateTaskCompletionSchema>;