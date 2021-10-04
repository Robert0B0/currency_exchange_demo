import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CurrencyCardGroup,
  CurrencyInput,
  CurrencyModal,
} from "./Components/index";
import AddIcon from "@mui/icons-material/Add";

import { currencies } from "./API/data";
import moment from "moment";

import { getData } from "./API/responseBuid";

const todayDate = moment(Date.now()).format("DD / MM / YYYY");

function App() {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    const data = getData(10);
    setAllCurrencies(data);
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
      <div className="title">
        <Typography variant="h2">Currency Exchange</Typography>
        <Typography variant="h4">Today: {todayDate}</Typography>
      </div>
      {loading ? (
        <Typography variant="h2">Loading...</Typography>
      ) : cards.length > 0 ? (
        <CurrencyCardGroup
          {...{ cards, setCards, selectedCard, setSelectedCard, inputValue }}
        />
      ) : (
        <Typography variant="h2">Add cards</Typography>
      )}
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
