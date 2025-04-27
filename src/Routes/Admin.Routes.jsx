import { MdContacts, MdNotificationImportant, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TfiLayoutSlider } from "react-icons/tfi";
import DashboardStatistics from "../Pages/Dashboard/Admin/Statistics/DashboardStatistics";




export const adminRoutes = [
  {
    path: "home",
    label: "Dashboard",
    element: <DashboardStatistics />,
    icon: <MdOutlineDashboardCustomize size={20}></MdOutlineDashboardCustomize>,
    permissionName: "view dashboard",
  },
  
];
