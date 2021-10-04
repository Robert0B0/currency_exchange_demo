import React from "react";
import CurrencyCard from "./CurrencyCard";

export default function CurrencyCardGroup({
  cards,
  setCards,
  selectedCard,
  setSelectedCard,
  inputValue,
}) {
  const removeCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  return (
    <section className="group">
      {cards.map((card, index) => {
        const selected = selectedCard.id === card.id ? true : false;
        return (
          <CurrencyCard
            key={index}
            {...{ card, removeCard, inputValue, selected, setSelectedCard }}
          />
        );
      })}
    </section>
  );
}
