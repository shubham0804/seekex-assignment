import styles from "./singleProduct.module.css";
import { Share, Cart, Favorites } from "../../icons/Icons";

const SingleProduct = ({ images, brand, name, amount: { original, discounted } }) => {
    const imagesToDisplay = images.map((image) => image.src).filter((image) => !!image);
    const sizes = ["S", "M", "L", "XL", "XXL"];

    return (
        <div id={styles.single_product_container}>
            <div id={styles.image_container} style={{ position: "relative" }}>
                <img id={styles.image} src={imagesToDisplay[0]} alt={name} />
                <ImageHoverIcons />
            </div>
            <div id={styles.product_details_container}>
                <p id={styles.brand_text}>{brand}</p>
                <p id={styles.product_name}>{name}</p>
                <div id={styles.price_container}>
                    <b>₹{discounted}</b>
                    <b id={styles.original_price}>₹{original}</b>
                </div>
            </div>
            <div id={styles.size_container}>
                {sizes.map((size, id) => (
                    <ProductSize key={id} size={size} />
                ))}
            </div>
        </div>
    );
};

const ImageHoverIcons = () => (
    <div id={styles.icons_container}>
        <IconContainer Icon={Cart} />
        <IconContainer Icon={Favorites} />
        <IconContainer Icon={Share} />
    </div>
);

const IconContainer = ({ Icon }) => (
    <div id={styles.icon_container}>
        <Icon width="22" color="#770015" />
    </div>
);

const ProductSize = ({ size }) => (
    <div id={styles.single_size_container}>
        <p id={styles.size_text}>{size}</p>
    </div>
);

export default SingleProduct;
