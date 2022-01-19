import { paths } from "./paths";
import HomePage from "../pages/HomePage";
import Users from "../pages/AdminPage/UserManage/Users";
import Profile from "../pages/Profile/Profile";
import Roles from "../pages/AdminPage/UserManage/Roles";

export const routers = [
  {
    path: paths.homePage,
    element: <HomePage />,
  },
  {
    path: paths.profile,
    element: <Profile />,
  },
  {
    path: paths.users,
    element: <Users />,
  },
  {
    path: paths.roles,
    element: <Roles />,
  },
];
