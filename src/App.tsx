import { AddSection, RecentlyAddedSection, SearchSection } from "./sections"
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
const initialRows: GridRowsProp = [
  {
    id: randomId(),
    date: new Date(2022, 10, 25, 22, 15),
    name: "Thomas Yu",
    lorry: 1,
    c12: 123
  }
]

function Main() {
  // "Lift the State" so it can be shared across components
  const [rows, setRows] = useState(initialRows);

  return (
    <>
      <header className="flex justify-center pt-4">
        <h1 className="font-bold text-3xl text-white">CRUD APP</h1>
      </header>

      <main className="flex flex-col gap-4 m-5">
        <AddSection />
        <RecentlyAddedSection rows={rows} setRows={setRows} />
        <SearchSection rows={rows} setRows={setRows} />
      </main>
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider >
  )
}

export default App
