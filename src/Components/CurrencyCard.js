import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import ReactCountryFlag from "react-country-flag";

export default function CurrencyCard({
  card,
  removeCard,
  inputValue,
  selected,
  selectedCard,
  setSelectedCard,
}) {
  const { id, symbol, currency, name, rate, countryCode } = card;
  const conversion = inputValue * rate;
  return (
    <Card className={`card ${selected && `card-selected`}`}>
      <Box style={{ display: "flex" }}>
        <div className="card-media">
          <ReactCountryFlag
            className="card-img"
            countryCode={countryCode}
            svg
          />
          <div className="card-symbol">
            <Typography variant="h6" style={{ fontWeight: "bolder" }}>
              {currency}
            </Typography>
          </div>
        </div>
        <CardContent className="card-content">
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              width: "200px",
            }}
          >
            {symbol}{" "}
            {conversion
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Typography>
          <Typography variant="h6" style={{ width: "190px", height: "50px" }}>
            {currency} - {name}
          </Typography>
          {selected ? (
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              1 {currency} = 1 {currency}
            </Typography>
          ) : (
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              1 {selectedCard.currency} = {rate} {currency}
            </Typography>
          )}
        </CardContent>
        <div>
          <Button
            variant="contained"
            className="card-x"
            color="error"
            onClick={() => removeCard(id)}
            disabled={selected}
          >
            <CloseIcon />
          </Button>

          <Button
            variant="contained"
            className="card-pick"
            color="primary"
            onClick={() => setSelectedCard(card)}
            disabled={selected}
          >
            <BorderColorIcon />
          </Button>
        </div>
      </Box>
    </Card>
  );
}
