import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrdersExport from "./components/OrdersExport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders-export" element={<OrdersExport />} />
        <Route path="*" element={<Navigate to="/orders-export" />} />
      </Routes>
    </BrowserRouter>
  );
}
