import { useState } from 'react';
import { motion } from 'framer-motion';
import { OutlineButton } from '../OutlineButton';

const PastExperiences = ({ onNext, onPrev, handleExportPDF }) => {
  const [selectedExperiences, setSelectedExperiences] = useState([]);

  const handleExperienceClick = (experience) => {
    setSelectedExperiences((prevExperiences) => {
      if (prevExperiences.includes(experience)) {
        return prevExperiences.filter((exp) => exp !== experience);
      } else {
        return [...prevExperiences, experience];
      }
    });
  };
  console.log(selectedExperiences)

  return (
    <div className="text-center">
      <h1 className="mb-4 text-3xl font-bold">Have you done any of these?</h1>
      <p className="mb-6 text-gray-600">
        Pick 1 or more. These can count as relevant experience for your resume.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-1">
        <OutlineButton
          onClick={() => handleExperienceClick('Internship')}
          isActive={selectedExperiences.includes('Internship')}
        >
          Internship
        </OutlineButton>
        <OutlineButton
          onClick={() => handleExperienceClick('Volunteering')}
          isActive={selectedExperiences.includes('Volunteering')}
        >
          Volunteering
        </OutlineButton>
        <OutlineButton
          onClick={() => handleExperienceClick("Teacher's Assistant (TA)")}
          isActive={selectedExperiences.includes("Teacher's Assistant (TA)")}
        >
          Teacher&apos;s Assistant (TA)
        </OutlineButton>
        <OutlineButton
          onClick={() => handleExperienceClick('Tutor')}
          isActive={selectedExperiences.includes('Tutor')}
        >
          Tutor
        </OutlineButton>
      </div>
      <button onClick={onNext} className="mt-2 mb-5 text-sm text-gray-500 hover:underline">
        No Experience (Continue)
      </button>
      <div className="flex justify-center space-x-4">
        <motion.button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Previous
        </motion.button>
        <motion.button
          type="submit"
          onClick={onNext}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next
        </motion.button>
      </div>
      {selectedExperiences.length > 0 && (
        <div className="mt-8">
          <p className="mb-2">Selected experiences:</p>
          {selectedExperiences.map((experience) => (
            <p key={experience} className="mb-2">
              {experience}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastExperiences;
