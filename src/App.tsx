import { AddSection, SalesAddedSection, PurchaseAddedSection} from "./sections"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { randomId } from "@mui/x-data-grid-generator";
import { GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";

// Set dark theme by default
// Reference: https://mui.com/material-ui/customization/dark-mode/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Initial raw data
const initialSalesRows: GridRowsProp = [
  {
    id: randomId(),
    date: new Date(2022, 10, 25, 22, 15),
    name: "Thomas Yu",
    lorry: "abc123",
    c12: 1,
    c12Tong:4,
    c14: 2,
    c14Tong: 7,
    a14c: 0,
    a14cTong: 0,
    c50: 1,
    c50Tong:21,
    gasPayment: 1487,
    hutang: 2045,
    tongPayment: 520,
    bayarHutang: 77,
    pinjamTong: 13,
    pulangTong: 69,
  },

  {
    id: randomId(),
    date: new Date(2022, 10, 26, 22, 15),
    name: "Vivi",
    lorry: "abc123",
    c12: 2,
    c12Tong:3,
    c14: 4,
    c14Tong: 5,
    a14c: 6,
    a14cTong: 7,
    c50: 10,
    c50Tong: 0,
    gasPayment: 87,
    hutang: 45,
    tongPayment: 20,
    bayarHutang: 7,
    pinjamTong: 3,
    pulangTong: 9,
  },

  {
    id: randomId(),
    date: new Date(2022, 10, 27, 22, 15),
    name: "GJ",
    lorry: "abc123",
    c12: 1,
    c12Tong:4,
    c14: 2,
    c14Tong: 7,
    a14c: 10,
    a14cTong: 10,
    c50: 1,
    c50Tong:21,
    gasPayment: 147,
    hutang: 205,
    tongPayment: 50,
    bayarHutang: 7,
    pinjamTong: 1,
    pulangTong: 6,
  },

  {
    id: randomId(),
    date: new Date(2022, 10, 25, 22, 15),
    name: "putin",
    lorry: "abc123",
    c12: 1,
    c12Tong:4,
    c14: 2,
    c14Tong: 7,
    a14c: 0,
    a14cTong: 0,
    c50: 1,
    c50Tong:21,
    gasPayment: 1487,
    hutang: 2045,
    tongPayment: 520,
    bayarHutang: 77,
    pinjamTong: 13,
    pulangTong: 69,
  },

  {
    id: randomId(),
    date: new Date(2022, 10, 28, 22, 15),
    name: "Thomas Yu",
    lorry: "abc123",
    c12: 11,
    c12Tong:41,
    c14: 21,
    c14Tong: 71,
    a14c: 20,
    a14cTong: 201,
    c50: 31,
    c50Tong:211,
    gasPayment: 148,
    hutang: 25,
    tongPayment: 52,
    bayarHutang: 7,
    pinjamTong: 1,
    pulangTong: 6,
  },

  {
    id: randomId(),
    date: new Date(2022, 10, 25, 22, 15),
    name: "Thomas Yu",
    lorry: "JSR3418",
    c12: 1,
    c12Tong:4,
    c14: 2,
    c14Tong: 7,
    a14c: 0,
    a14cTong: 0,
    c50: 1,
    c50Tong:21,
    gasPayment: 1487,
    hutang: 2045,
    tongPayment: 520,
    bayarHutang: 77,
    pinjamTong: 13,
    pulangTong: 69,
  },
]

const initialPurchaseRows: GridRowsProp = [
  {
    id: randomId(),
    date: new Date(2022, 10, 25, 22, 15),
    name: "Thomas Yu",
    lorry: "JSR3418",
    c12: 1,
    c12Tong:4,
    c14: 2,
    c14Tong: 7,
    a14c: 0,
    a14cTong: 0,
    c50: 1,
    c50Tong:21,
    receiptNumber: 0,
    notes: "hi",
  },
]

function Main() {
  // "Lift the State" so it can be shared across components
  // In the future, initial rows can be from some online database
  const [salesRows, salesSetRows] = useState(initialSalesRows);
  const [purchaseRows, purchaseSetRows] = useState(initialPurchaseRows);

  return (
    <>
      <header className="flex justify-center pt-4">
        <h1 className="font-bold text-3xl text-white">Glory Gas</h1>
      </header>

      <main className="flex flex-col gap-4 m-5">
        <AddSection salesSetRows={salesSetRows} />
        <SalesAddedSection salesRows={salesRows} salesSetRows={salesSetRows} />
        <PurchaseAddedSection purchaseRows={purchaseRows} purchaseSetRows={purchaseSetRows}/>
      </main>
    </>
  )
}

function App() {

  // ThemeProvider required so all MUI components share the same theme
  // CssBaseline is also required
  // https://mui.com/material-ui/customization/dark-mode/#dark-mode-by-default

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider >
  )
}

export default App
