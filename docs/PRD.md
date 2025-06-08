# 📋 Product Requirements Document (PRD) for KedhepIt - Task Management Application

![wireframe](wireframe.png)

---

## 1. Overview

This app is designed to help knowledge workers on laptops effectively **manage numerous tasks** while **maintaining daily focus**. It consolidates all categorized tasks into **one clear interface**, enabling users to **easily view, select, and manage their daily priorities** at a glance.

By providing an intuitive sidebar with **task checkboxes**, **statistics**, and **personal reflections**, the app offers a seamless, efficient **workload overview and daily planning experience** tailored for users who want to **streamline task management** and **boost productivity** on a **single screen**.


---

## 2. Functional Requirements

### A. Regular Task List
1. See all task lists
2. Filter task lists by tags
   - Tags are displayed as chips above the task list cards
   - Clicking a tag filters visible task lists/cards by that tag
3. Search task lists by title
   - Search input field to filter task lists by title
   - Matches partial titles for flexible searching
4. Create a new task list
   - Set the task list title
   - Create task items
   - Set tags
5. Edit a task list
   - Edit the task list title
   - Add a task item
   - Edit a task item title
   - Delete a task item
   - Edit tags
   - Toggle a task item completion
6. Delete a task list

### B. Daily Task List
1. See a daily task list
2. Add existing task items to the daily task list
3. Edit a task item title
4. Delete a task item
5. Toggle a task item completion
6. See the daily task statistic (Todo & Completed)

### C. Reflection Note
1. See a daily reflection note
2. Write a daily reflection note
3. See all daily reflection notes
4. Edit a reflection note
5. Delete a reflection note

---

## 3. Features

### 3.1 Core Features (Aligned with Wireframe & Functional Requirements)

#### 3.1.1 Sidebar

- **Navigation Section**:
  - Sidebar with vertical menu for navigation:
    - Dashboard
    - Tasks (default selected)
    - Reflections
    - Notes (future)
    - User profile (bottom)
  - Each item uses an icon and label, with clear selection highlight.

- **Daily Task Section ("Today")**:
  - Shows daily task list for the selected day (default: today).
  - Horizontal arrows to navigate days (previous/next).
  - Each task in the daily list:
    - Checkbox to toggle completion (updates `completed` in `DAILY_TASK` table)
    - Task title (from `TASK`)
    - Remove ("x") button to remove from daily list (deletes from `DAILY_TASK`)
  - Tasks are grouped by their category (from their parent `TASK_LIST`), matching the wireframe.

- **Statistics Section**:
  - Collapsible panel with toggle arrow.
  - Shows:
    - Todo: count of incomplete daily tasks
    - Completed: count of completed daily tasks (in green)
  - Data is live, based on `DAILY_TASK` completion status.

- **Reflection Section**:
  - Collapsible panel with toggle arrow.
  - Text area for writing/editing today's reflection note (from `REFLECTION` table).
  - "Save" button to store/update the note.
  - Only one reflection per day per user; editing updates the same record.

---

#### 3.1.2 Main Content Area: Task List Page

- Displays all task lists (`TASK_LIST`), each as a card ("Rumah", "Finance", etc.).
- Each card shows:
  - Task list title
  - List of tasks (`TASK`) in that list:
    - Checkbox to toggle completion (updates `completed` in `TASK`)
    - Task title (not editable here)
  - Tag chips at the bottom (from `TAG` via `TASK_LIST_TAG`)
  - "..." menu for list actions (edit, delete, etc.)
- Cards are arranged in a responsive grid:
  - Uses `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for adaptive layout
  - Multi-row, multi-column, auto-wrap
- Tag filter chips above the grid:
  - Clicking a tag filters visible task lists/cards by that tag
- "New Task" button at top right:
  - Opens modal to create a new task list and/or task

---

#### 3.1.3 New Task Creation

- "New Task" button triggers a modal popup.
- Modal form fields:
  - Task List Title (required if creating a new list)
  - Task Title (required)
  - Tags (multi-select, optional; from `TAG`)
- On submit:
  - Creates new `TASK_LIST` if needed
  - Creates new `TASK` under the selected/created list
  - Associates tags via `TASK_LIST_TAG`
- Cancel button closes modal without saving

---

## 4. UI Structure & Interactions

### 4.1 Sidebar

- **Navigation**: Icon+label for each section, persistent on all pages.
- **Daily Task List**:
  - Shows only tasks added to today (from `DAILY_TASK`)
  - Tasks grouped by category (parent `TASK_LIST`)
  - Checkbox toggles completion (updates `DAILY_TASK.completed`)
  - Remove button deletes from daily list
  - Day navigation arrows update the date and reload the list
- **Statistics**: Collapsible, live counts for Todo/Completed
- **Reflection**: Collapsible, text area, save button, one note per day

### 4.2 Main Content

- **Task List Cards**:
  - Each card = one `TASK_LIST` (category)
  - Shows all tasks in that list, with completion checkboxes
  - Tag chips for filtering and context
  - "..." menu for list actions (edit, delete, etc.)
- **Filtering**:
  - Tag chips above grid filter visible cards
- **Task Creation**:
  - "New Task" button opens modal for new list/task
- **Responsive Layout**:
  - Grid auto-fits cards, minimum 300px width, fills available space

---

## 5. Database Schema
![db schema](db-schema.png)
### 5.1 Tables
| Table Name       | Description                                           |
|------------------|-------------------------------------------------------|
| `USER`           | Stores user information (id, name, email, etc.)       |
| `TASK_LIST`      | Stores task lists (id, title, user_id)                |
| `TASK`           | Stores individual tasks (id, title, completed, list_id) |
| `TAG`            | Stores tags (id, name)                                |
| `TASK_LIST_TAG`  | Junction table for many-to-many relationship between `TASK_LIST` and `TAG` |
| `DAILY_TASK`     | Stores daily tasks (id, task_id, date, completed)     |
| `REFLECTION`     | Stores daily reflections (id, user_id, date, content) |

### 5.2 Relationships
- `USER` has many `TASK_LIST`
- `TASK_LIST` has many `TASK`
- `TASK_LIST` has many `TAG` through `TASK_LIST_TAG`
- `TASK` can be part of many `DAILY_TASK`
- `USER` has many `REFLECTION`

### 5.3 Data Flow
- **Task Creation**: New tasks are created in `TASK_LIST` and `TASK`, with optional tags in `TAG` and `TASK_LIST_TAG`.
- **Daily Tasks**: When a task is added to the daily list, it creates an entry in `DAILY_TASK` with the date and completion status.
- **Reflections**: Daily reflections are stored in `REFLECTION`, linked to the user and date.
- **Statistics**: Calculated from `DAILY_TASK` for Todo/Completed counts.
- **Tag Filtering**: Uses `TASK_LIST_TAG` to filter task lists by selected tags.
- **Task Completion**: Updates `completed` status in both `TASK` and `DAILY_TASK` tables.
- **Task Removal**: Deleting a task from the daily list removes the entry from `DAILY_TASK`, but does not delete the task itself from `TASK`.
- **Task List Deletion**: Deleting a `TASK_LIST` removes all associated `TASK` and `TASK_LIST_TAG` entries.
- **Reflection Management**: Each user can have one reflection per day, stored in `REFLECTION` with a unique date.
- **User Management**: All tasks, lists, and reflections are linked to a specific user via `user_id`.
- **Tag Management**: Tags can be created and associated with task lists, allowing for flexible categorization.
- **Statistics Calculation**: The app calculates statistics based on the `DAILY_TASK` entries for the current day, showing counts of completed and pending tasks.

---

## 6. Technical Enhancements from Wireframe

| Aspect                         | Wireframe Insight                                    | Implementation Details                                   |
|-------------------------------|-----------------------------------------------------|---------------------------------------------------------|
| Task Grouping                 | Tasks grouped by categories (Work, Learning, etc.)  | Use `TASK_LIST` for grouping, show as cards             |
| Daily Task Management         | Sidebar with daily tasks & editing                   | Use `DAILY_TASK` for per-day selection, completion, removal |
| Day Navigation                | Arrow toggling to switch “Today” view                | Date state, reloads `DAILY_TASK` for selected day       |
| Collapsible Sections          | Statistics and reflection collapsible in sidebar     | Collapsible UI, animated, stateful                      |
| Checkbox & Remove Controls    | Checkboxes to mark complete, 'x' button to remove    | Checkboxes update `completed`, 'x' removes from daily   |
| Tag Filtering                 | Tags displayed as filter chips above task cards      | Multi-select, filters cards by tag                      |

---

## 7. Development Priorities Based on Wireframe

| Feature                      | Priority | Notes                                             |
|------------------------------|----------|---------------------------------------------------|
| Sidebar with Daily Task List  | High     | Day navigation, checkboxes, removal, task grouping |
| Collapsible Stats & Reflection| Medium   | Collapsible sections with accurate data and save   |
| Task Cards Grid & Filters     | High     | Category grouping, multi-tag filter chips          |
| New Task Modal               | High     | Create tasks with filtering tags                  |
| Navigation Sidebar           | Medium   | Basic navigation for Tasks, Notes, Profile         |

---

## 8. Risks & Considerations

- **Complexity in Managing Daily Lists:**
  - Must sync between `TASK`, `TASK_LIST`, and `DAILY_TASK` for accurate daily view.
- **UI Responsiveness:**
  - Sidebar and grid must adapt to various screen sizes and overflow scenarios.
- **Collapsible Sections Usability:**
  - Use clear visual cues and smooth animation for collapsible panels.
- **Data Consistency:**
  - Ensure updates to tasks/lists/tags reflect across all relevant UI and DB tables.

---

## 9. Summary

The wireframe and schema together define a robust, category-based task management system with a focus on daily productivity, statistics, and reflection. The sidebar and main content are tightly integrated, and all features are mapped to clear DB structures. The UI is designed for clarity, speed, and flexibility, supporting both power users and casual task managers.

If you agree with these refinements, we can proceed to design and implement the sidebar components first (daily tasks, statistics, reflections) or the main task list page—just let me know your preference! 😊🚀
