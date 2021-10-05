import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import ReactCountryFlag from "react-country-flag";

export default function CurrencyItem({
  currency,
  addItem,
  removeItem,
  selected,
}) {
  const { id, symbol, name, countryCode } = currency;

  //Item Add/Remove function

  const itemAction = () => {
    if (!selected) {
      addItem(id);
    } else {
      removeItem(id);
    }
  };

  return (
    <Button onClick={itemAction}>
      <Card className={`item ${selected && "item-selected"}`}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Card Flag */}
          <ReactCountryFlag
            className="item-img"
            countryCode={countryCode}
            svg
          />

          {/* Card Name and CheckBox */}
          <div className="item-name-container">
            <Typography variant="h4" fontWeight="bold" className="item-symbol">
              {symbol}
            </Typography>
            <Typography variant="h6" className="item-name">
              {name}
            </Typography>
          </div>
          {!selected ? (
            <CheckBoxOutlineBlankIcon fontSize="large" className="item-check" />
          ) : (
            <CheckBoxIcon fontSize="large" className="item-check" />
          )}
        </Box>
      </Card>
    </Button>
  );
}
