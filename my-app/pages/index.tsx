import { AddSection, SalesAddedSection, PurchaseAddSection, PurchaseAddedSection, SearchSection } from "../sections"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from "react";
import { initialSalesRows, initialPurchaseRows } from "my-app/components/Dataforexample"; //generate some random data
// import { SalesSummeryTable } from "my-app/components/SalesSummeryTable";
import netlifyIdentity from 'netlify-identity-widget';
import { User } from 'netlify-identity-widget';
import { LogIn } from "my-app/components/logIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [showPurchasePage, setShowPurchasePage] = useState(false);
  const [showSummeryPage, setShowSummeryPage] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleTogglePage = () => {
    setShowPurchasePage(!showPurchasePage);
  };

  const handleSummeryPage = () => {
    setShowSummeryPage(!showSummeryPage)
  }

  const handleLogout = () => {
    netlifyIdentity.logout();
  };

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Event listener for user change
    netlifyIdentity.on('login', (user: User) => {
        setUser(user);
    });
    
    netlifyIdentity.on('logout', () => {
        setUser(null);
    });
  }, []);

  return (
    <div>
      {user ? (
        <>
          <header className="flex justify-center pt-4">
            <img className="w-70 h-28 max-sm:w-70 max-sm:h-24" src="/GloryGas_title.png" />
          </header>
          <div className="flex justify-center">
            <button onClick={handleTogglePage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full text-sm">
                {showPurchasePage ? "Go to Sales Page" : "Go to Purchase Page"}
            </button>
            <button onClick={handleSummeryPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full text-sm">
                {showSummeryPage ? "Go to Input Section" : "Go to Summery"}
            </button>
            <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full text-sm">Logout</button>
          </div>

          <main className="flex flex-col gap-4 m-5 mt-0">
            {!showSummeryPage && (
              <>
                {!showPurchasePage && (
                  <>
                    <div className="mt-4 text-2xl font-bold leading-none tracking-tight text-gray-900 max-sm:text-2xl dark:text-white">Sales Section</div>
                    <div className="mt-2">
                      <AddSection salesSetRows={salesSetRows} />
                    </div>
                    <div className="mt-4">
                      <SalesAddedSection salesRows={salesRows} salesSetRows={salesSetRows} />
                    </div>
                  </>
                )}

                {showPurchasePage && (
                  <>
                    <div className="mt-4 text-2xl font-bold leading-none tracking-tight text-gray-900 max-sm:text-2xl dark:text-white">Purchase Section</div>
                    <div className="mt-2">
                      <PurchaseAddSection purchaseSetRows={purchaseSetRows} />
                    </div>
                    <div className="mt-4">
                      <PurchaseAddedSection purchaseRows={purchaseRows} purchaseSetRows={purchaseSetRows} />
                    </div>
                  </>
                )}
              </>
            )}

            {showSummeryPage && (
              <>
                <div className="mt-4 text-2xl font-bold leading-none tracking-tight text-gray-900 max-sm:text-2xl dark:text-white">Summery</div>
                <div className="mt-2">
                  {/* <SalesSummeryTable salesRows={salesRows} salesSetRows={salesSetRows} isEditable={true} /> */}
                </div>
              </>
            )}
          </main>
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

function App() {
  // ThemeProvider required so all MUI components share the same theme
  // CssBaseline is also required
  // https://mui.com/material-ui/customization/dark-mode/#dark-mode-by-default
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
