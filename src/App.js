import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CurrencyCardGroup,
  CurrencyInput,
  CurrencyModal,
} from "./Components/index";
import AddIcon from "@mui/icons-material/Add";

import { getData } from "./API/CurrencyBuild";

function App() {
  const [loading, setLoading] = useState(true);
  const [todayDate, setTodayDate] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  //calling the construction of currency data
  useEffect(() => {
    const data = getData(30);
    console.log(data);
    setAllCurrencies(data.currencies);
    setTodayDate(data.date);
  }, []);

  useEffect(() => {
    if (allCurrencies.length > 0) {
      setCards([allCurrencies[0]]);
      setSelectedCard(allCurrencies[0]);
      setLoading(false);
    }
  }, [allCurrencies]);

  return (
    <section>
      {/* title section */}
      <div className="title">
        <Typography variant="h4">Currency Exchange</Typography>
        <Typography variant="h6">Today: {todayDate}</Typography>
      </div>

      {/* Cards Group component */}
      {loading ? (
        <Typography
          variant="h2"
          style={{ display: "flex", justifySelf: "center" }}
        >
          Loading...
        </Typography>
      ) : cards.length > 0 ? (
        <CurrencyCardGroup
          {...{
            cards,
            setCards,
            selectedCard,
            setSelectedCard,
            inputValue,
          }}
        />
      ) : (
        <Typography variant="h2">Add cards</Typography>
      )}

      {/* Input component */}
      <CurrencyInput
        {...{
          inputValue,
          setInputValue,
          openMenu,
          setOpenMenu,
          cards,
          selectedCard,
          setSelectedCard,
        }}
      />

      {/* Modal component */}
      <div className="modal-container">
        <Button
          variant="contained"
          color="success"
          className="modal-button"
          onClick={() => setOpenModal(true)}
        >
          <AddIcon fontSize="large" />
          <Typography variant="h6">Add Currency</Typography>
        </Button>
        <CurrencyModal
          {...{ openModal, setOpenModal, allCurrencies, cards, setCards }}
        />
      </div>
    </section>
  );
}

export default App;
