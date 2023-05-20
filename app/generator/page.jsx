"use client"
import { useState } from 'react';
import NameEmail from '../components/NameEmail';
import WebsitePortfolio from '../components/WebsitePortfolio';

export default function Home() {
  const [step, setStep] = useState(1);
  const [cvData, setCVData] = useState({});

  const handleNext = (data) => {
    setCVData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

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

  return (
    <div>
      <h1>CV Generator</h1>
      {renderFormStep()}
      {step > 1 && (
        <div>
          <h2>CV</h2>
          <>First name: {cvData.firstName}</>
          <p>Last name: {cvData.lastName}</p>
          <p>Email: {cvData.email}</p>
          {step > 2 &&
            <>
              <p>Website: {cvData.website}</p>
              <p>Portfolio: {cvData.portfolio}</p>
            </>
          }
        </div>
      )}
    </div>
  );
}
