"use client"
import React, { useState, useRef } from 'react';
import NameEmail from '../components/NameEmail';
import WebsitePortfolio from '../components/WebsitePortfolio';
import PDFResume from '../components/PDFResume';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import HeaderSection from '../components/header/HeaderSection';
import Button from '../components/Button';

export default function Home() {
  const [step, setStep] = useState(1);
  const [cvData, setCVData] = useState({});
  const [showPDF, setShowPDF] = useState(false);
  const [pdfViewerHeight, setPdfViewerHeight] = useState(500); // Initial height value
  const pdfRef = useRef();

  const handleNext = (data) => {
    setCVData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <NameEmail onNext={handleNext} />;
      case 2:
        return <WebsitePortfolio onPrev={handlePrev} onNext={handleNext} />;
      default:
        return null;
    }
  };

  const { firstName, lastName, email, website, portfolio } = cvData;

  const handleExportPDF = () => {
    setShowPDF(true);
  };

  return (
    <>
      <HeaderSection />
      <div>
        <h1>CV Generator</h1>
        {renderFormStep()}
        {step > 1 && (
          <div>
            <h2>CV</h2>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>
              Email: <span className='text-red-500 bg-slate-600'>{email}</span>
            </p>
            {step > 2 && website && <p>Website: {website}</p>}
            {step > 2 && portfolio && <p>Portfolio: {portfolio}</p>}
            <button
              className='px-3 py-2 transition-colors duration-200 bg-teal-400 rounded hover:bg-teal-500'
              onClick={handleExportPDF}
            >
              Export as PDF
            </button>
          </div>
        )}
        {showPDF && (
          <Button>
            <PDFDownloadLink
              document={
                <PDFResume
                  ref={pdfRef}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  website={website}
                  portfolio={portfolio}
                />
              }
              fileName='resume.pdf'
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download PDF'
              }
            </PDFDownloadLink>
          </Button>
        )}
      </div>
    </>
  );
}
