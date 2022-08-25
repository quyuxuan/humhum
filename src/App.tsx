import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import store from "./store";
import "./App.less";

export const App = () => {
  return (
    <Routes>
      <Provider store={store}>
        <Route path="/" element={<Home />}>
          <Route path="page" element={<Home />} />
        </Route>
      </Provider>
    </Routes>
  );
};
export default App;
