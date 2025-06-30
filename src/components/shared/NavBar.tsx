import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function NavBar() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      {/* Task Master */}
      <nav className="dark:bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="dark:text-white text-lg font-bold">
              <Link to={"/"} className="hover:underline">
                Task Master
              </Link>
            </div>
            <ul>
              <li>
                <Link to={"/users"} className="hover:underline">
                  Users
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            {/* Add navigation links here */}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
