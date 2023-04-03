import styles from "./Search.module.css";
import cn from "classnames";
import { Button } from "../Button/Button";
import { SearchProps } from "./Search.props";
import { useState } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({ className }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)}>
      <input
        className="input-textarea placeholder search-input"
        placeholder="Поиск..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
 
      />

      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};
