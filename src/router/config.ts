// 路由配置文件
import Layout from "../components/layout/userlayout";
import Home from "pages/home";
import Self from "pages/self";
import Cool from "pages/cool";
import Tools from "pages/tools";
import Error from "pages/error";

const routes = [
  {
    path: "/tools",
    component: Tools,
  },
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: "/self",
        component: Self,
      },
      {
        path: "/cool",
        component: Cool,
      },
      {
        path: '/',
        exact: true,
        component: Home,
      },
    ]
  },
  {
    path: "*",
    component: Error,
  }
];

export default routes;