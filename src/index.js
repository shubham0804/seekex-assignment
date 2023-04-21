import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "listing",
        element: <ProductListing />,
    },
    {
        path: "product",
        element: <ProductDetail />,
    },
    {
        path: "*",
        element: <ProductListing />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
