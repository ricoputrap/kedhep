export enum EnumOAuthProvider {
  GOOGLE = "google"
}

export interface User {
  id: number;          // PK
  name: string;
  email: string;
  oauth_provider: EnumOAuthProvider;
  oauth_id: string;     // Unique ID from the OAuth provider
  avatar_url?: string;  // Optional URL to the user's profile picture
  created_at: number;   // unix timestamp in milliseconds
  updated_at: number;   // unix timestamp in milliseconds
}

export interface Tag {
  id: number;           // PK
  name: string;         // Tag name (unique per user)
  user_id: number;      // FK to User.id
}

export interface TaskList {
  id: number;           // PK
  title: string;        // Title of the task list
  user_id: number;      // FK to User.id
  created_at: number;   // unix timestamp in milliseconds
  updated_at: number;   // unix timestamp in milliseconds
}

export interface TaskListTag {
  task_list_id: number; // FK to TaskList.id
  tag_id: number;       // FK to Tag.id
}

export interface Task {
  id: number;           // PK
  title: string;        // Task item title
  completed: boolean;   // Completion status
  task_list_id: number; // FK to TaskList.id
  user_id: number;      // FK to User.id
  created_at: number;   // unix timestamp in milliseconds
  updated_at: number;   // unix timestamp in milliseconds
}

export interface DailyTask {
  id: number;          // PK
  user_id: number;     // FK to User.id
  task_id: number;     // FK to Task.id
  date: number;        // Date this task was created for (unix timestamp in milliseconds)
  completed: boolean;  // Completion status on that day
}

export interface Reflection {
  id: number;               // PK
  user_id: number;          // FK to User.id
  date: number;             // Date of the reflection (unix timestamp in milliseconds)
  content?: string | null;  // Reflection content (text), optional
  created_at: number;       // unix timestamp in milliseconds
  updated_at: number;       // unix timestamp in milliseconds
}