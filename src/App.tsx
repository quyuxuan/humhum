import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Page from "./pages/Page";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
