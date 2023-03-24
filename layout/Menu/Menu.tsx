import styles from "./Menu.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Course", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "services", name: "Services", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "books", name: "Books", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "products", name: "Products", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
