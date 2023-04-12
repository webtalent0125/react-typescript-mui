import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import { theme } from "./theme/Theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { HomeView } from "./views/Pages/Home/HomeView";
import { Route, Routes } from "react-router-dom";
import { PricingView } from "./views/Pages/Home/PricingView";
import { LoginView } from "./views/Pages/Authenticate/LoginView";
import { SignUpView } from "./views/Pages/Authenticate/SignUpView";
import { BasicLayout } from "./stories/layout/BasicLayout";

const AuthenticatedRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomeView />} />
      <Route path="/pricing" element={<PricingView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/sign-up" element={<SignUpView />} />
    </Routes>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <BasicLayout>
            <AuthenticatedRouter />
          </BasicLayout>
        </LocalizationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
