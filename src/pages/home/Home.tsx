import { AddTaskModal } from "@/components/AddTaskModal";
import TaskCard from "@/components/task-card";
import { selectTasks, updateFilter, type IFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Home() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    dispatch(updateFilter(filterValue as IFilter));
  };

  return (
    <div>
      <div>
        {/* add Tasks */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Tasks</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Manage your tasks efficiently with our simple task management system.
        </p>
        <div>
          <form>
            <select
              onChange={handleChange}
              name="filter"
              id=""
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 mb-4"
            >
              <option value="all">All</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </form>
        </div>
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
