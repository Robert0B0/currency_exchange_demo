import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReactCountryFlag from "react-country-flag";

export default function CurrencyInput({
  inputValue,
  setInputValue,
  cards,
  openMenu,
  setOpenMenu,
  setSelectedCard,
  selectedCard,
}) {
  const selectCard = (id) => {
    const foundCard = cards.find((card) => card.id === id);
    setSelectedCard(foundCard);
  };

  const handleChange = (value) => {
    if (value > 0 && value < 99999999) {
      setInputValue(value);
    }
  };

  return (
    <Box className="input">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="currency-select">Currency</InputLabel>
        <Select
          className="select-input"
          labelId="currency-select"
          id="currency-select"
          name="Input"
          value={selectedCard.id ? selectedCard.id : 0}
          onChange={(e) => selectCard(e.target.value)}
          autoWidth
          label="Selected"
        >
          {cards.map((card) => {
            return (
              <MenuItem value={card.id}>
                <Typography variant="h5">
                  <ReactCountryFlag
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                    countryCode={card.countryCode}
                    svg
                  />
                  {card.name}
                </Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <TextField
        className="value-input"
        id="currency-input"
        type="number"
        label="input"
        required
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
}
