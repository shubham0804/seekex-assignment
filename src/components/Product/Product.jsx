import { useState } from "react";
import styles from "./product.module.css";
import { Cart, Favorites } from "../../icons/Icons";

const Product = ({ images, brand, name, amount }) => {
    const imagesToDisplay = images.map((image) => image.src).filter((image) => !!image);
    const sizes = [36, 38, 40, 42, 44];

    const [selectedSize, setSelectedSize] = useState(null);

    const onSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div id={styles.product_container}>
            <div id={styles.image_container} style={{ width: "58%" }}>
                {imagesToDisplay.map((image, id) => (
                    <img key={id} src={image} id={styles.image} />
                ))}
            </div>
            <div id={styles.product_details_container}>
                <h2>{brand}</h2>
                <p id={styles.product_name}>{name}</p>
                <div id={styles.amount_container}>
                    <p className={styles.amount} id={styles.amount_original}>
                        ₹{amount.original}
                    </p>
                    <p className={styles.amount}>MRP</p>
                    <p className={styles.amount} id={styles.amount_discounted}>
                        ₹{amount.discounted}
                    </p>
                </div>
                <p id={styles.inclusive_text}>inclusive of all taxes</p>
                <div id={styles.size_container}>
                    <h3>SELECT SIZE</h3>
                    <div id={styles.sizes_container}>
                        {sizes.map((size, id) => (
                            <SingleSize
                                key={id}
                                size={size}
                                onSizeClick={onSizeClick}
                                selectedSize={selectedSize}
                            />
                        ))}
                    </div>
                </div>
                <div id={styles.bag_wishlist_container}>
                    <button className={styles.btn} id={styles.add_to_bag_btn}>
                        <Cart color="white" />
                        ADD TO CART
                    </button>
                    <button className={styles.btn} id={styles.wishlist_btn}>
                        <Favorites />
                        WISHLIST
                    </button>
                </div>
                <div id={styles.divider} />
            </div>
        </div>
    );
};

const SingleSize = ({ size, selectedSize, onSizeClick }) => {
    return (
        <div
            style={{ borderColor: selectedSize == size && "#770015" }}
            onClick={() => onSizeClick(size)}
            id={styles.single_size_container}
        >
            <h4 id={styles.size_text}>{size}</h4>
        </div>
    );
};

export default Product;
