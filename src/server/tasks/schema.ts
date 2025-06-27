import * as z from "zod/v4";

export const updateTaskCompletionSchema = z.object({
  id: z.number().min(1),
  completed: z.boolean()
});

export type UpdateTaskCompletionSchema = z.infer<typeof updateTaskCompletionSchema>;