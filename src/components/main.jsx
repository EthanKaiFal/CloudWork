import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this imports your main App component
import { Authenticator } from "@aws-amplify/ui-react";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authenticator>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
    </Authenticator>
  </React.StrictMode>
);