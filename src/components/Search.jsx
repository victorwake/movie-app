import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import { useNavigate} from "react-router";
import  Query  from "../hooks/useQuery";


export function Search() {
    const query = Query();//esto es para que me traiga el texto que escribo en el input
    const search = query.get("search");

    const navigate = useNavigate();

    const handLetSubmit = (event) => {
        event.preventDefault();//esto es para que no se recargue la pagina
    };

    
    return (
        <form  className={styles.searchContainer} onSubmit={handLetSubmit}>
            <div className={styles.searchBox}>

                <input className={styles.searchInput} 
                type="text" 
                placeholder="Title..."
                aria-label="Search Movies" 
                value={search ?? ""} 
                onChange={(e) => {
                    const value = e.target.value;
                    navigate("/?search=" + value)
                }}
                />          
                <FaSearch size={20} className={styles.btn} />
                
            </div>
    </form>
    )
}
