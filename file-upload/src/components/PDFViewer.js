import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ fileUrl }) => (
  <div>
    <Document file={fileUrl}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default PDFViewer;
