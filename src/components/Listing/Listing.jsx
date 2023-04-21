import styles from "./listing.module.css";
import dummyListing from "../../script/parsedMyntraListing.json";
import SingleProduct from "./SingleProduct";

const Listing = () => {
    return (
        <div className={styles.container}>
            <Heading heading="Trending T-Shirts" />
            <div className={styles.listing_container}>
                {dummyListing.map((product, i) => (
                    <SingleProduct key={i} {...product} />
                ))}
            </div>
        </div>
    );
};

const Heading = ({ heading }) => (
    <div className={styles.heading_container}>
        <div className={styles.divider} />
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.divider} />
    </div>
);

export default Listing;
