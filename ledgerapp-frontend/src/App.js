import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LedgerPage } from "./src/ledger/LedgerPage";
import LedgerList from "./src/ledger/LedgerList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LedgerList />} />
        <Route path="/ledger" element={<LedgerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
