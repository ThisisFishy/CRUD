import { AddSection, RecentlyAddedSection, SearchSection } from "./sections"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Set dark theme by default
// Reference: https://mui.com/material-ui/customization/dark-mode/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Main() {
  return (
    <>
      <header className="flex justify-center pt-4">
        <h1 className="font-bold text-3xl text-white">CRUD APP</h1>
      </header>

      <main className="flex flex-col gap-4 m-5">
        <AddSection />
        <RecentlyAddedSection />
        <SearchSection />
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
