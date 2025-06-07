# 📋 Product Requirements Document (PRD) for KedhepIt - Task Management Application

![alt text](wireframe.png)

![alt text](db-schema.png)

---

## 1. Overview

This app is designed to help knowledge workers on laptops effectively **manage numerous tasks** while **maintaining daily focus**. It consolidates all categorized tasks into **one clear interface**, enabling users to **easily view, select, and manage their daily priorities** at a glance.

By providing an intuitive sidebar with **task checkboxes**, **statistics**, and **personal reflections**, the app offers a seamless, efficient **workload overview and daily planning experience** tailored for users who want to **streamline task management** and **boost productivity** on a **single screen**.


---

## 2. Features

### 2.1 Core Features (Aligned with Wireframe)

#### 2.1.1 Sidebar

- **Navigation Section**:
  - Sidebar vertical menu with navigation items:
    - Tasks (selected by default)
    - Notes (planned for future iteration)
    - Profile (future expandability)
  - Current design highlights the Tasks section.

- **Daily Task Section ("Today")**:
  - Horizontal navigation arrows to switch days.
  - Tasks grouped by categories (e.g., Work, Learning) are displayed in compact boxes with checkbox and close ("x") icons.
  - Users can tick checkboxes to mark tasks as complete.
  - The "x" allows removing the task from the daily list.
  
- **Statistics Section**:
  - Collapsible area with toggling arrow.
  - Displays statistics for task count, including:
    - Todo (pending tasks count)
    - Completed (number of tasks finished, likely displayed in green)
  - The section can be collapsed or expanded.

- **Reflection Section**:
  - Collapsible area with toggle arrow.
  - Contains a sizable text input box for daily reflections.
  - A "Save" button to store the reflection.
  - Reflection area collapsible independently from statistics.

---

### 2.1.2 Main Content Area: Task List Page

- Tasks are displayed in a grid layout of cards, visibly grouped by categories such as "Work" in the wireframe.
- Each task card contains:
  - A checkbox to mark completion.
  - Task title (e.g., Feature 1, Feature 2, etc.).
- Multi-row and multi-column layout for tasks.
- Filters by tags are visible at the top (tags like "work" and "sara" shown).
- A "New Task" button positioned clearly near the top-right corner to trigger task creation.

---

### 2.1.3 New Task Creation

- Modal popup triggered by “New Task” button.
- Form fields:
  - Task Title (mandatory)
  - Optional tags (like work, sara)
  - Description and due dates to be considered for future iterations.
- Form submission and cancel buttons aligned for UX clarity.

---

## 3. UI Structure & Interactions

### 3.1 Sidebar

- **Task List Navigation** with icons/labels for each major section.
- **Today's Tasks Section**:
  - Day navigation arrows to move back and forth between days.
  - Compact grouped task display with checkbox and remove options.
- **Statistic Section**:
  - Collapsible panel showing tasks' status summary.
- **Reflection Section**:
  - Collapsible panel including text area and save button.
  - Users can write daily reflections and save directly from the sidebar.

### 3.2 Main Content

- **Task Cards**:
  - Grouped by category with a grid layout.
  - Each card includes a checkbox and task title.
- **Filtering**:
  - Multi-tag filter chips above the cards.
- **Task Creation**:
  - Positioned at top right with a distinctive button.
- **Responsive Layout**:
  - Adapt task grid and sidebar for various screen sizes.

---

## 4. Technical Enhancements from Wireframe

| Aspect                         | Wireframe Insight                                    | Proposed Enhancements                                   |
|-------------------------------|-----------------------------------------------------|---------------------------------------------------------|
| Task Grouping                 | Tasks grouped by categories (Work, Learning, etc.)  | Use category field for grouping task cards on the page  |
| Daily Task Management         | Sidebar with daily tasks & editing                   | Implement adding/removing tasks from daily via sidebar  |
| Day Navigation               | Arrow toggling to switch “Today” view                | Maintain date state with navigation buttons             |
| Collapsible Sections         | Statistics and reflection collapsible in sidebar    | Use collapsible UI components with animation            |
| Checkbox & Remove Controls   | Checkboxes to mark complete, 'x' button to remove   | Add UI controls for quick task state and removal        |
| Tag Filtering                | Tags displayed as filter chips above task cards      | Multi-select filter functionality for task list         |

---

## 5. Development Priorities Based on Wireframe

| Feature                      | Priority | Notes                                             |
|------------------------------|----------|---------------------------------------------------|
| Sidebar with Daily Task List  | High     | Day navigation, checkboxes, removal, task grouping |
| Collapsible Stats & Reflection| Medium   | Collapsible sections with accurate data and save |
| Task Cards Grid & Filters     | High     | Category grouping, multi-tag filter chips         |
| New Task Modal               | High     | Create tasks with filtering tags                   |
| Navigation Sidebar           | Medium   | Basic navigation for Tasks, Notes, Profile        |

---

## 6. Risks & Considerations

- **Complexity in Managing Daily Lists:**  
  Sync between main task items and daily selections in sidebar requires careful state handling.

- **UI Responsiveness:**  
  Sidebar with many interactive elements plus card grid needs good responsive design.

- **Collapsible Sections Usability:**  
  Avoid confusion by clear visual clues and smooth animations.

---

## 7. Summary

The wireframe presents a robust layout combining a clean, categorized task board with a powerful sidebar focused on daily task focus, daily reflections, and statistics. The addition of collapsible areas for stats and reflections helps keep the sidebar concise while offering rich functionality. Task grouping and tag filtering enhance task organization while the "New Task" modal provides easy task creation.

If you agree with these refinements, we can proceed to design and implement the sidebar components first (daily tasks, statistics, reflections) or the main task list page—just let me know your preference! 😊🚀
