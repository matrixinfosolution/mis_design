import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  unstable_HistoryRouter as Router,
} from "react-router-dom";
import store from "../src/API/Store/store";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import Testing from './Components/Test/Testing';
import Navigation from './Components/Navigation/Navigation';
import NavbarText from './Components/NavbarText';

const root = document.getElementById("root");
const queryClient = new QueryClient();

render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<App/>}/>
           <Route path="/test" element={<Testing/>}/> 
           <Route path="/nav" element={<Navigation/>}/> 
           <Route path="/navbr" element={<NavbarText/>}/>


        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();