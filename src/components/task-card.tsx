import { cn } from "@/lib/utils";
import { deleteTask, toggleComplete, type ITask } from "@/redux/features/task/taskSlice";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

const TaskCard = ({ task }: { task: ITask }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    // dispatch(toggleComplete(task.id));
    dispatch(toggleComplete(task.id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 border border-gray-200 dark:border-gray-700 w-full max-w-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="w-4 h-4 accent-green-600"
          />
          <h2
            className={cn("text-xl font-semibold text-gray-800 dark:text-gray-100", {
              "line-through text-gray-400 dark:text-gray-500": task.completed,
            })}
          >
            {task.title}
          </h2>
        </div>
        <span
          className={cn(`text-sm font-medium px-2 py-1 rounded-full border`, {
            "text-red-600 border-red-500 dark:text-red-400 dark:border-red-400": task.priority === "high",
            "text-yellow-600 border-yellow-500 dark:text-yellow-400 dark:border-yellow-400": task.priority === "medium",
            "text-green-600 border-green-500 dark:text-green-400 dark:border-green-400": task.priority === "low",
          })}
        >
          {task.priority.toUpperCase()}
        </span>
      </div>

      <p
        className={cn("text-gray-600 dark:text-gray-300 mb-4", {
          "line-through text-gray-400 dark:text-gray-500": task.completed,
        })}
      >
        {task.description}
      </p>

      <div
        className={cn("text-sm text-gray-500 dark:text-gray-400 mb-2", {
          "line-through text-gray-400 dark:text-gray-500": task.completed,
        })}
      >
        <strong>Status:</strong>{" "}
        <span
          className={
            task.status === "completed" ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"
          }
        >
          {task.status}
        </span>
      </div>

      <div
        className={cn("text-sm text-gray-500 dark:text-gray-400 mb-2", {
          "line-through text-gray-400 dark:text-gray-500": task.completed,
        })}
      >
        <strong>Due Date:</strong> {task.dueDate}
      </div>

      <div
        className={cn("text-sm text-gray-500 dark:text-gray-400 mb-4", {
          "line-through text-gray-400 dark:text-gray-500": task.completed,
        })}
      >
        <strong>Completed:</strong>{" "}
        <span className={task.completed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
          {task.completed ? "Yes" : "No"}
        </span>
      </div>

      <div className="flex justify-end gap-3">
        <button
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-blue-600 border border-blue-500 rounded-md hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900"
          onClick={() => console.log("Edit", task.id)}
        >
          <Pencil className="w-4 h-4" />
          Edit
        </button>

        <button
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 border border-red-500 rounded-md hover:bg-red-100 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-900"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
