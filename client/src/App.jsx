import Login from "./pages/Login";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => state.auth);

  const Location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar /> */}
      </div>
      {/* <MobileSidebar />  */}

      <div className="flex-1 overflow-y-auto">
        {/* <Navbar/> */}

        <div className="p-4 2xl:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: Location }} replace />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/completed/:status" element={<Tasks />}></Route>
          <Route path="/in-progress/:status" element={<Tasks />}></Route>
          <Route path="/todo/:status" element={<Tasks />}></Route>
          <Route path="/task/:id" element={<TaskDetail />}></Route>
          <Route path="/team" element={<Users />}></Route>
          <Route path="/trashed" element={<Trash />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Toaster richColors position="bottom-right" />
    </main>
  );
}

export default App;
