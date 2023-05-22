"use client"
import React, { useState, useRef } from 'react';
import NameEmail from '../components/NameEmail';
import WebsitePortfolio from '../components/WebsitePortfolio';
import PDFResume from '../components/PDFResume';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Button from '../components/Button';
import PastExperiences from '../components/steps/PastExperiences';
import Education from '../components/steps/Education';
import Skills from '../components/Skills';

export default function Home() {
  const [step, setStep] = useState(1);
  const [cvData, setCVData] = useState({});
  const [showPDF, setShowPDF] = useState(false);
  const [pdfViewerHeight, setPdfViewerHeight] = useState(500); // Initial height value
  const pdfRef = useRef();

  const handleNext = (data) => {
    setCVData((prevData) => ({ ...prevData, ...data, selectedExperiences }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <NameEmail onNext={handleNext} />;
      case 2:
        return <WebsitePortfolio onPrev={handlePrev} onNext={handleNext} />;
      case 3:
        return <PastExperiences onPrev={handlePrev} onNext={handleNext} />
      case 4:
        return <Education onPrev={handlePrev} onNext={handleNext} />
      case 5:
        return <Skills onPrev={handlePrev} onNext={handleNext} />
      default:
        return null;
    }
  };

  const { firstName, lastName, phoneNumber, email, website, portfolio, selectedExperiences } = cvData;

  const handleExportPDF = () => {
    setShowPDF(true);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container">
          <div>
            <h1 className='text-3xl font-semibold'>CV Generator</h1>
            <h3>Step {step}:</h3>
            {renderFormStep()}
            {step > 1 && (
              <div className="mt-8">
                <p className="mb-2">First name: {firstName}</p>
                <p className="mb-2">Last name: {lastName}</p>
                <p className="mb-2">Phone number: {phoneNumber}</p>
                <p className="mb-2">Email: {email}</p>
                {website && <p className="mb-2">Website: {website}</p>}
                {portfolio && <p className="mb-2">Portfolio: {portfolio}</p>}
                <button
                  className="px-4 py-2 mt-4 text-white transition-colors duration-200 bg-teal-400 rounded hover:bg-teal-500"
                  onClick={handleExportPDF}
                >
                  Export as PDF
                </button>
              </div>
            )}
            {showPDF && (
              <div className="mt-8">
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
                    fileName={`${firstName}_${lastName}.pdf`}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading document...' : 'Download PDF'
                    }
                  </PDFDownloadLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
