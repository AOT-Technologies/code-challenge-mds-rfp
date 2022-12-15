import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { setHttpInterceptor } from "./interceptors/httpInterceptor";
import Header from "./components/header/header";

import ApplicationList from "./components/pages/lists/application-list/application-list";

function App() {
  setHttpInterceptor();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ApplicationList />} />
      </Routes>
    </Router>
  );
}

export default App;
