import { useParams, Link, useNavigate } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import "./styles.css";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/Product";


export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  
  const navigate = useNavigate();

  useEffect(() => {
    productService.findById(Number(params.productId))
    .then(response => {
      console.log(response.data);
      setProduct(response.data);
    }).catch(error => {
      console.log(error.response.data);
      navigate("/catalog")
    });

    
    
    
  }, []);
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard product={product} />}

          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <Link to='/'>
              <ButtonInverse text="Início" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
