import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { Bars, Search, Favorites, Cart, Profile } from "../../icons/Icons";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Bars onClick={() => navigate("/")} />
            <div className={styles.subcontainer_right}>
                <Search />
                <Favorites />
                <Cart />
                <Profile />
            </div>
        </div>
    );
};

export default NavBar;
