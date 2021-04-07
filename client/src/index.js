import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

ReactDOM.render(<App />, document.getElementById("root"));
