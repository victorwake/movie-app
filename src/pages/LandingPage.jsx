import { MoviesGrid } from "../components/MoviesGrid";
import {Search} from "../components/Search";
import   Query from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const query = Query();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
    <MoviesGrid key={debounceSearch} search={debounceSearch} />{/*//resetea el estado*/}
    </div>
  );
}