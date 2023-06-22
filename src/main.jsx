import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "@context/GameContextProvider.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/breakpoints.scss";
import "./styles/colors.scss";
import "./styles/reset.scss";
import "./styles/spacing.scss";
import "./styles/typography.scss";
import "./styles/fonts.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GameProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GameProvider>
    </React.StrictMode>
);
