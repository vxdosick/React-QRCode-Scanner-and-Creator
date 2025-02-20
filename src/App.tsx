import { Layout } from "./components/Layout";
import { QRCodeGenerator } from "./components/QRCodeGenerator";
import { QRCodeScanner } from "./components/QRCodeScanner";
import { History } from "./components/History";
import { HistoryHero } from "./components/HistoryHero";

import { HistoryGenerated } from "./components/HistoryGenerated";
import { HistoryScanned } from "./components/HistoryScanned";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/react-ts-tailwind-qrcode" element={<QRCodeGenerator />}></Route>
          <Route path="react-ts-tailwind-qrcode/scan-qrcode" element={<QRCodeScanner />}></Route>
          <Route path="/react-ts-tailwind-qrcode/history" element={<History />}>
            <Route path="generated" element={<HistoryGenerated />}></Route>
            <Route path="scanned" element={<HistoryScanned />}></Route>
            <Route path="" element={<HistoryHero />}></Route>
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
