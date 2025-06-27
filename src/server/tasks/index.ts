"use server"

import { TASK_ITEMS, TASK_LISTS } from "@/data/dummy";
import { delay } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { GetTasksSchema, UpdateTaskCompletionSchema, getTasksSchema, updateTaskCompletionSchema } from "./schema";
import { getCurrentUser } from "../users";

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

interface IGetTasksResponse {
  data: ITaskList[];
  error?: string;
}

/**
 * Fetches task lists for the current user, optionally filtered by a search query.
 * 
 * @param body - The request body containing an optional search query
 * @param body.searchQuery - A string to filter task lists and items by title
 * 
 * @returns A promise that resolves to an object containing the task lists or an error message
 * 
 * @throws Will return an error object if the user is not found or if validation fails
 * 
 * @example
 * ```typescript
 * const result = await getTasks({ searchQuery: "urgent" });
 * if (result.error) {
 *   console.error(result.error);
 * } else {
 *   console.log(result.data);
 * }
 * ```
 */
export async function getTasks(body: GetTasksSchema): Promise<IGetTasksResponse> {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return {
        data: [],
        error: "User not found"
      };
    }

    // validate the request body
    const { searchQuery } = getTasksSchema.parse(body);

    // Simulate loading for 500 ms
    await delay(500);

    const taskLists: ITaskList[] = TASK_LISTS.reduce((allTaskLists: ITaskList[], list) => {
      if (list.user_id === user.id) {
        const tasks = TASK_ITEMS.filter(task => task.task_list_id === list.id)
          .map(task => ({
            id: task.id,
            title: task.title,
            completed: task.completed
          }));
        
        // Filter by task list title or task item titles
        const matchesListTitle = !searchQuery || list.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTaskTitle = !searchQuery || tasks.some(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
        
        if (matchesListTitle || matchesTaskTitle) {
          allTaskLists.push({
            id: list.id,
            title: list.title,
            user_id: list.user_id,
            tasks
          });
        }
      }
      return allTaskLists;
    }, []);

    console.log("Fetched task lists:", taskLists);

    return {
      data: taskLists
    };
  }
  catch (error) {
    // TODO log error to a monitoring service
    console.error("Error fetching tasks:", error);
    return {
      data: [],
      error: "Failed to fetch tasks"
    };
  }
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