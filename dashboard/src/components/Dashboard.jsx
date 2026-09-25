import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchLists";
import Login from "./Login"
import Signup from './Signup'
import { GeneralContextProvider } from "./GeneralContext";
 // 👈 Dhyaan dein: yahan curly braces ke sath GeneralContextProvider import karna hai

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* 👈 Yahan GenContextProvider use karna heralai, GeneralContext nahi */}
      <GeneralContextProvider>
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<App />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;