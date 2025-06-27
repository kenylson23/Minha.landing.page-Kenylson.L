import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

console.log('main.tsx is executing');
console.log('Root element:', document.getElementById("root"));

createRoot(document.getElementById("root")!).render(<App />);
