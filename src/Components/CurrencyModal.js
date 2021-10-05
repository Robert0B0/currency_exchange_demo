import React, { useState, useEffect } from "react";
import CurrencyItem from "./CurrencyItem";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CurrencyModal({
  openModal,
  setOpenModal,
  allCurrencies,
  setCards,
  cards,
}) {
  const [currencies, setCurrencies] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  //filtering present cards form list

  useEffect(() => {
    const nonSelected = allCurrencies.filter(
      (currency) => !cards.includes(currency)
    );
    setCurrencies(nonSelected);
  }, [cards]);

  //select items function

  const selectCurrencies = () => {
    setCards([...cards, ...selectedItems]);
    setSelectedItems([]);
    setOpenModal(false);
  };

  // add/remove function
  const addItem = (id) => {
    const item = allCurrencies.find((currency) => currency.id === id);
    if (item !== null) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeItem = (id) => {
    const newItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(newItems);
  };

  return (
    <div>
      {/* Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Fade in={openModal}>
            <Box className="modal">
              <Box className="modal-items">
                {currencies.map((currency) => {
                  const selected = selectedItems.some(
                    (item) => item.id === currency.id
                  )
                    ? true
                    : false;
                  return (
                    <CurrencyItem
                      {...{ currency, addItem, removeItem, selected }}
                    />
                  );
                })}
              </Box>
              {/* Modal Buttons*/}
              <div className="button-bg">
                {selectedItems.length > 0 ? (
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      className="modal-add-button"
                      onClick={selectCurrencies}
                    >
                      <Typography variant="h4">Add Selected</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="modal-back"
                      onClick={() => setOpenModal(false)}
                    >
                      <ArrowBackIcon style={{ fontSize: "50px" }} />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="modal-add-button"
                      disabled
                    >
                      <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                      <Typography variant="h5">Select currencies</Typography>
                      <ArrowDropUpIcon style={{ fontSize: "50px" }} />
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="modal-back"
                      onClick={() => setOpenModal(false)}
                    >
                      <ArrowBackIcon style={{ fontSize: "50px" }} />
                    </Button>
                  </div>
                )}
              </div>
            </Box>
          </Fade>
        </>
      </Modal>
    </div>
  );
}
