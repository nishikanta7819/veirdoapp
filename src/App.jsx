import React from "react";
import Navbar from "./components/Navbar";
import VeirdoHero from "./components/VeirdoHero";
import VeirdoFooter from "./components/VeirdoFooter";
import BestSellers from "./components/BestSellers";
import CentreStage from "./components/CentreStage";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Aboutus from "./components/Aboutus";
import Merch from "./components/Merch";
import NewArrivals from "./components/NewArrivals";
import CategoryPage from "./components/CategoryPage";
import AdminDashboard from "./pages/AdminDashboard";
import OverSizedTshirt from "./components/OverSizedTshirt";
import TopCategories from "./components/TopCategories";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <VeirdoHero />
              <BestSellers />
              <CentreStage />
              <NewArrivals />
              <TopCategories />
              <Aboutus />
              <Merch />
            </>
          }
        />

        {/* ✅ Dynamic Products Page */}
        <Route path="/products/:category" element={<CategoryPage />} />

        {/* ✅ Other Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/oversized-tshirts" element={<OverSizedTshirt />} />

        {/* ✅ 404 Page */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

      <VeirdoFooter />
    </div>
  );
};

export default App;
