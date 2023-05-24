import { randomId } from "@mui/x-data-grid-generator";
import { GridRowsProp } from "@mui/x-data-grid";
// import { useState } from "react";
import { randomInt } from "@mui/x-data-grid-generator";
import { randomDate } from "@mui/x-data-grid-generator";


const startDate = new Date(2023, 0, 1);
const endDate = new Date(2023, 0, 31);
const Name123 = ["sac", "monkey", "ku", "long", "harry", "tric", "cyrus", "thomas", "ken"];


const createRandomRowForSales = () => {
  const randomIndex = Math.floor(Math.random() * Name123.length);
  const randomName = Name123[randomIndex];

  return {
    id: randomId(),
    date: randomDate(startDate, endDate),
    name: randomName,
    lorry: "JSR3418",
    c12: randomInt(1,10),
    c12Tong: randomInt(1,10),
    c14: randomInt(1,10),
    c14Tong: randomInt(1,10),
    a14c: randomInt(1,10),
    a14cTong: randomInt(1,10),
    c50: randomInt(1,10),
    c50Tong: randomInt(1,10),
    gasPayment: randomInt(1,10),
    hutang: randomInt(1,10),
    tongPayment: randomInt(1,10),
    bayarHutang: randomInt(1,10),
    pinjamTong: randomInt(1,10),
    pulangTong: randomInt(1,10),
  };
}

export const initialSalesRows: GridRowsProp = Array(10000).fill(0).map(createRandomRowForSales);

const createRandomRowForPurchase = () => {
  const randomIndex = Math.floor(Math.random() * Name123.length);
  const randomName = Name123[randomIndex];

  return {
    id: randomId(),
    date: randomDate(startDate, endDate),
    name: randomName,
    lorry: "JSR3418",
    c12: randomInt(1,10),
    c12Tong: randomInt(1,10),
    c14: randomInt(1,10),
    c14Tong: randomInt(1,10),
    a14c: randomInt(1,10),
    a14cTong: randomInt(1,10),
    c50: randomInt(1,10),
    c50Tong: randomInt(1,10),
    receiptNumber: randomInt(1,10),
    account: randomInt(1,10),
    notes: randomInt(1,10),
  };
}

export const initialPurchaseRows: GridRowsProp = Array(100).fill(0).map(createRandomRowForPurchase);


