import { BookingPending } from "../pages/BookingPending";
import { BookingUpcoming } from "../pages/BookingUpcoming";
import { CleaningRequest } from "../pages/CleaningRequest";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Users } from "../pages/Users";
import { ValidateUser } from "../pages/ValidateUser";

export const configRoutes = [
  {
    path: "/",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard>
        <Home />
      </Dashboard>
    ),
    isPrivate: true,
  },

  {
    path: "/dashboard/users",
    element: (
      <Dashboard>
        <Users />
      </Dashboard>
    ),
    isPrivate: true,
  },
  {
    path: "/dashboard/validate-user",
    element: (
      <Dashboard>
        <ValidateUser />
      </Dashboard>
    ),
    isPrivate: true,
  },
  {
    path: "/dashboard/booking-pending",
    element: (
      <Dashboard>
        <BookingPending />
      </Dashboard>
    ),
    isPrivate: true,
  },
  {
    path: "/dashboard/booking-upcoming",
    element: (
      <Dashboard>
        <BookingUpcoming />
      </Dashboard>
    ),
    isPrivate: true,
  },
  {
    path: "/dashboard/cleaning-request",
    element: (
      <Dashboard>
        <CleaningRequest />
      </Dashboard>
    ),
    isPrivate: true,
  },
];
