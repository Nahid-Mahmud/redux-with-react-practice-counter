import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto pt-4">
        <Outlet />
      </div>
    </div>
  );
}
