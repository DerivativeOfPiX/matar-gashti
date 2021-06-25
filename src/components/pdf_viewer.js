import { Document, Page } from 'react-pdf';
import React, { useState } from 'react'



export default function PDFviewer(props) {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    return (<div>
        <div className="text-center">
            <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </p>
            <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
            >
                Previous
        </button>
            <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
            >
                Next
        </button>
        </div>
        <Document
            file={props.pdffile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="m-auto"
        >
            <Page className="m-auto" pageNumber={pageNumber} />
        </Document>
    </div>)
}