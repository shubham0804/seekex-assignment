import { useEffect } from "react";
import NavBar from "../components/NavBar.jsx/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "../components/Product/Product";

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);

    useEffect(() => {
        if (!location.state) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <NavBar />
            <Product {...location?.state} />
        </div>
    );
};

export default ProductDetail;
