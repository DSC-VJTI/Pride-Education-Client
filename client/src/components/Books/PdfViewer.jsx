import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { useLocation } from "react-router";

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const url = useLocation().state.url;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container style={{ paddingTop: "5px" }}>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1} />
        ))}
      </Document>
    </Container>
  );
}
