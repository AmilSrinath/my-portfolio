import * as React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";

import App from "./App.tsx";

import "./index.css";

const rootEl = document.getElementById("root");

ReactDOM.createRoot(rootEl!).render(
    <React.StrictMode>
        <Toaster
            theme="dark"
            richColors
            closeButton
            toastOptions={{
                style: { background: "#050816", opacity: 0.95 },
            }}
        />
        <App />
    </React.StrictMode>,
);
