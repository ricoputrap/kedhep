import { EnumOAuthProvider, Tag, Task, TaskList, TaskListTag, User } from "./schema";

export const USERS: User[] = [
  {
    id: 1,
    name: "Rico Putra",
    email: "rico.putra@example.com",
    oauth_provider: EnumOAuthProvider.GOOGLE,
    oauth_id: "1234567890",
    title: "Software Engineer",
    avatar_url: "https://example.com/avatar.jpg",
    created_at: Date.now(), // unix timestamp in milliseconds
    updated_at: Date.now(), // unix timestamp in milliseconds
  },
]

export const TASK_LISTS: TaskList[] = [
  {
    id: 1,
    title: "Rumah",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 2,
    title: "Finance",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 3,
    title: "Kedhep",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 4,
    title: "Proyek A",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 5,
    title: "Proyek B",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 6,
    title: "Proyek C",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 7,
    title: "Course DevOps",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 8,
    title: "Course Backend",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
]

export const TAGS: Tag[] = [
  {
    id: 1,
    name: "life",
    user_id: 1
  },
  {
    id: 2,
    name: "work",
    user_id: 1
  },
  {
    id: 3,
    name: "project",
    user_id: 1
  },
  {
    id: 4,
    name: "learning",
    user_id: 1
  },
]

export const TASK_LIST_TAGS: TaskListTag[] = [
  // Rumah: life
  {
    task_list_id: 1,
    tag_id: 1
  },
  // Finance: life, work
  {
    task_list_id: 2,
    tag_id: 1
  },
  {
    task_list_id: 2,
    tag_id: 2
  },
  // Kedhep: project
  {
    task_list_id: 3,
    tag_id: 3
  },
  // Proyek A: project
  {
    task_list_id: 4,
    tag_id: 3
  },
  // Proyek B: work, project
  {
    task_list_id: 5,
    tag_id: 2
  },
  {
    task_list_id: 5,
    tag_id: 3
  },
  // Proyek C: work, project
  {
    task_list_id: 6,
    tag_id: 2
  },
  {
    task_list_id: 6,
    tag_id: 3
  },
  // Course DevOps: work, learning
  {
    task_list_id: 7,
    tag_id: 2
  },
  {
    task_list_id: 7,
    tag_id: 4
  },
  // Course Backend: work, learning
  {
    task_list_id: 8,
    tag_id: 2
  },
  {
    task_list_id: 8,
    tag_id: 4
  },
]

export const TASK_ITEMS: Task[] = [
  // Rumah
  {
    id: 1,
    title: "Bersih-bersih rumah (menyapu, mengepel, dll)",
    completed: false,
    task_list_id: 1,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 2,
    title: "Cuci pakaian",
    completed: false,
    task_list_id: 1,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Finance
  {
    id: 3,
    title: "Catat pengeluaran",
    completed: false,
    task_list_id: 2,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    id: 4,
    title: "Bayar tagihan listrik",
    completed: false,
    task_list_id: 2,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Kedhep
  {
    id: 5,
    title: "Rapat mingguan",
    completed: false,
    task_list_id: 3,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Proyek A
  {
    id: 6,
    title: "Desain UI",
    completed: false,
    task_list_id: 4,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Proyek B
  {
    id: 7,
    title: "Setup repository",
    completed: false,
    task_list_id: 5,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Proyek C
  {
    id: 8,
    title: "Analisis kebutuhan",
    completed: false,
    task_list_id: 6,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Course DevOps
  {
    id: 9,
    title: "Belajar Docker",
    completed: false,
    task_list_id: 7,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  // Course Backend
  {
    id: 10,
    title: "Belajar REST API",
    completed: false,
    task_list_id: 8,
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
]
