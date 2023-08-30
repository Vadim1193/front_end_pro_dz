import Modal from "../../../UI-Components/Modal/Modal";
import React from "react";
import classes from "./BasketCard.module.css";
import Card from "../../../UI-Components/Card";
import BasketItem from "../BasketItem";
import { Button } from "../../../UI-Components/Buttom/Button";

const BasketCard = (props) => {
  const ModalHeader = (
    <header className={classes.modal_header}>
      <h3>Shopping Cart</h3>
      {props.basketItems.length !== 0 && (
        <div className={classes.button_clear}>
          <Button onClick={props.removeAll}>Clear all</Button>
        </div>
      )}
    </header>
  );

  return (
    <Modal
      visibility={props.visibility ? "visible" : "hidden"}
      onClose={props.onClose}
    >
      <Card className={classes.BasketCardContent}>
        {ModalHeader}
        <div>
          {props.basketItems.map((basketItem) => (
            <BasketItem
              deleteProduct={() => props.deleteProduct(basketItem)}
              key={basketItem.id}
              addToBasket={() => props.addToBasket(basketItem)}
              title={basketItem.title}
              description={basketItem.description}
              price={basketItem.price}
              picture={basketItem.picture}
              amount={basketItem.amount}
              decrement={() => props.decrement(basketItem)}
            />
          ))}
          {props.basketItems.length === 0 && <div>Empty Basket ...</div>}
        </div>
        {props.basketItems.length !== 0 && (
          <div> Total: {props.totalPriceBasketItems} </div>
        )}
      </Card>
    </Modal>
  );
};

export default BasketCard;