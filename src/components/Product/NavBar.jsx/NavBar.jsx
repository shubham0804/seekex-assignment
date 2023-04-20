import styles from "./style.module.css";
import { Bars, Search, Favorites, Cart, Profile, Share } from "../../../icons/Icons";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Bars />
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
