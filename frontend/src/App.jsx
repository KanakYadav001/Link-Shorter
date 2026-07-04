import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./Components/Common/MainLayout";
import BankLayout from "./Components/Common/BankLayout";
import DashboardLayout from "./Pages/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import CreateLink from "./Pages/CreateLink";
import MyLink from "./Pages/MyLink";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
import DasboardPageLayout from "./Pages/DasboardPageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<BankLayout />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              index
              element={
                <DasboardPageLayout title="Dashboard">
                  <Dashboard />
                </DasboardPageLayout>
              }
            />
            <Route
              path="/dashboard/create-link"
              element={
                <DasboardPageLayout title="Create Link">
                  <CreateLink />
                </DasboardPageLayout>
              }
            />
            <Route
              path="/dashboard/my-links"
              element={
                <DasboardPageLayout title="My Links">
                  <MyLink />
                </DasboardPageLayout>
              }
            />
            <Route
              path="/dashboard/analytics"
              element={
                <DasboardPageLayout title="Analytics">
                  <Analytics />
                </DasboardPageLayout>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <DasboardPageLayout title="Settings">
                  <Settings />
                </DasboardPageLayout>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
