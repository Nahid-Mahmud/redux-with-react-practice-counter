import AddUserModal from "@/components/AddUserModal";
import { Button } from "@/components/ui/button";
import { deleteUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function User() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  function handleDeleteUser(index: string) {
    dispatch(deleteUser(index));
  }
  return (
    <div>
      <AddUserModal />

      <div>
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <ul className="list-decimal list-inside pl-5">
          {users.map((user) => (
            <li key={user?.id} className="mb-2 items-center ">
              {user.name}{" "}
              <Button
                onClick={() => handleDeleteUser(user?.id)}
                variant={"destructive"}
                className="hover:bg-red-950 cursor-pointer ml-5"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
