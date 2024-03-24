import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/Catalog/index.tsx";
import ProductDetails from "./routes/ProductDetails/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Catalog" element={<Catalog />}/>
        <Route path="ProductDetails" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
