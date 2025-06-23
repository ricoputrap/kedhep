"use server"

import { revalidatePath } from "next/cache";
import { TASK_ITEMS, TASK_LISTS } from "@/data/dummy";

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
  console.log("Fetching tasks for user:", userId);

  // Simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

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

export async function updateTaskCompletion(taskItemId: number, isCompleted: boolean): Promise<void> {
  console.log(`Updating task ${taskItemId} to ${isCompleted ? 'completed' : 'incomplete'}`);

  // Simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  const taskIndex = TASK_ITEMS.findIndex(item => item.id === taskItemId);
  if (taskIndex !== -1) {
    TASK_ITEMS[taskIndex].completed = isCompleted;
    console.log(`Task updated:`, TASK_ITEMS[taskIndex]);
  } else {
    console.error(`Task with id ${taskItemId} not found`);
  }

  revalidatePath('/tasks');
}