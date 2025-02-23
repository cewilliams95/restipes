import type { Route } from "./+types/home";
import CreateRecipePage from "~/create-recipe-page/CreateRecipePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "restipes" },
    {
      name: "description",
      content: "Attempt to make a functioning recipes app",
    },
  ];
}

export default function Create() {
  return <CreateRecipePage />;
}
