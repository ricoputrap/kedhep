"use server"

import { TASK_ITEMS, TASK_LISTS } from "@/data/dummy";
import { delay } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { UpdateTaskCompletionSchema, updateTaskCompletionSchema } from "./schema";

export interface ITaskItem {
  id: number,
  title: string,
  completed: boolean,
}

export interface ITaskList {
  id: number,
  title: string,
  user_id: number,
  tasks: ITaskItem[];
}

export async function getTasks(userId: number): Promise<ITaskList[]> {
  // Simulate loading for 500 ms
  await delay(500);

  const taskLists: ITaskList[] = TASK_LISTS.reduce((allTaskLists: ITaskList[], list) => {
    if (list.user_id === userId) {
      const tasks = TASK_ITEMS.filter(task => task.task_list_id === list.id)
        .map(task => ({
          id: task.id,
          title: task.title,
          completed: task.completed
        }));
      
      allTaskLists.push({
        id: list.id,
        title: list.title,
        user_id: list.user_id,
        tasks
      });
    }
    return allTaskLists;
  }, []);

  console.log("Fetched task lists:", taskLists);

  return taskLists;
}

/**
 * Updates the completion status of a task item.
 * 
 * @param body - The request body containing task ID and completion status
 * @param body.id - The unique identifier of the task to update
 * @param body.completed - The new completion status for the task
 * 
 * @returns A promise that resolves to void on success, or an object with an error message on failure
 * 
 * @throws Will return an error object if the task ID is not found or if validation fails
 * 
 * @example
 * ```typescript
 * const result = await updateTaskCompletion({ id: "123", completed: true });
 * if (result?.error) {
 *   console.error(result.error);
 * }
 * ```
 */
export async function updateTaskCompletion(body: UpdateTaskCompletionSchema): Promise<{ error: string } | void> {
  try {
    const { id, completed } = updateTaskCompletionSchema.parse(body);

    const taskIndex = TASK_ITEMS.findIndex(item => item.id === id);
    if (taskIndex === -1) {
      // TODO log error to a monitoring service
      const error = `Task item is not found`;
      console.error("Error updating task completion:", error);
      return { error };
    }

    // update the task completion status
    TASK_ITEMS[taskIndex].completed = completed;

    // trigger data revalidation in the Tasks page
    revalidatePath('/tasks');
  }
  catch (error) {
    // TODO log error to a monitoring service
    console.error("Error updating task completion:", error);
    return { error: "Failed to update task completion" };
  }
}