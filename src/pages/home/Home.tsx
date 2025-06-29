import { AddTaskModal } from "@/components/AddTaskModal";
import TaskCard from "@/components/task-card";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Home() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div>
      <div>
        {/* add Tasks */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Tasks</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Manage your tasks efficiently with our simple task management system.
        </p>
        <AddTaskModal />
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
