import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  route("/create", "routes/create.tsx"),
  index("routes/home.tsx"),
] satisfies RouteConfig;
