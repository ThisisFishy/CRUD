import { AddSection, SalesAddedSection, PurchaseAddSection, PurchaseAddedSection} from "./sections"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import { initialSalesRows, initialPurchaseRows } from "./components/Dataforexample"; //generate some random data


// Set dark theme by default
// Reference: https://mui.com/material-ui/customization/dark-mode/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        <PurchaseAddSection purchaseSetRows={purchaseSetRows} />
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
