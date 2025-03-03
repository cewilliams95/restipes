import type { Route } from "./+types/home";
import RecipeListPage from "../recipe-list-page/RecipeListPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "restipes" },
    {
      name: "description",
      content: "Attempt to make a functioning recipes app",
    },
  ];
}

export default function Home() {
  return <RecipeListPage />;
}
