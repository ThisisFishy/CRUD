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
    background: {
      default: '#1f2937', 
      paper: '#374151',
    },
    primary: {
      main: '#2196f3', 
    },
    secondary: {
      main: '#f50057', 
    },
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
        <img className="w-70 h-28 max-sm:w-70 max-sm:h-24" src="/GloryGas_title.png"/>
      </header>

      <main className="flex flex-col gap-4 m-5 mt-0">
        <div className="mt-7">  
          <AddSection salesSetRows={salesSetRows}/>
        </div>
        <div className="mt-7">
          <SalesAddedSection salesRows={salesRows} salesSetRows={salesSetRows}/>
        </div>
        <div className="mt-7">
          <PurchaseAddSection purchaseSetRows={purchaseSetRows}/>
        </div>
        <div className="mt-7">
          <PurchaseAddedSection purchaseRows={purchaseRows} purchaseSetRows={purchaseSetRows}/>
        </div>
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
