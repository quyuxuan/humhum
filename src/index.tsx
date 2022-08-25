
import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const container:any = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BrowserRouter><App /></BrowserRouter>);

