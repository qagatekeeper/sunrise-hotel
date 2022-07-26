import { AdminHomePage, HomePage, LoginPage, ReservationPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="admin" element={<LoginPage />} />
            <Route path="admin/home" element={<AdminHomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
