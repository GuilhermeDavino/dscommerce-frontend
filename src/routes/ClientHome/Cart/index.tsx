import "./styles.css";
import { useContext, useEffect, useState } from "react";
import * as cartService from "../../../services/cart-service";
import * as orderService from "../../../services/order-service"
import { OrderDTO, OrderItemDTO } from "../../../models/Order";
import { Link, useNavigate } from "react-router-dom";
import { ContextCartCount } from "../../../utils/context-cart";

const cart = {
  items: [
    {
      productId: 4,
      quantity: 1,
      name: "PC Gamer",
      price: 1200,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg",
    },
    {
      productId: 5,
      quantity: 2,
      name: "Rails for Dummies",
      price: 100.99,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
    },
  ],
};

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

  const { setContextCartCount } = useContext(ContextCartCount);

  const navigate = useNavigate();

  function handClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  }

  function handlePlaceOrderClick() {
    orderService.placeOrderRequest(cart)
    .then(response => {
      cartService.clearCart();
      setContextCartCount(0);
      navigate(`/confirmation/${response.data.id}`);
    });
  }

  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        {cart.items.length === 0 ? (
          <div>
            <h2>Seu carrinho está vazio</h2>
          </div>
        ) : (
          <div className="dsc-card dsc-mb20">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="dsc-cart-item-container dsc-line-bottom"
              >
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div
                        onClick={() => handDecreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        -
                      </div>
                      <p>{item.quantity}</p>
                      <div
                        onClick={() => handIncreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  R$ {item.subTotal.toFixed(2)}
                </div>
              </div>
            ))}

            <div className="dsc-cart-total-container">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
        <div className="dsc-btn-page-container">
          <div onClick={handlePlaceOrderClick} className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
          <Link to="/">
            <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
          </Link>
          <div onClick={handClearClick} className="dsc-btn dsc-btn-white">
            Limpar carrinho
          </div>
        </div>
      </section>
    </main>
  );
}
