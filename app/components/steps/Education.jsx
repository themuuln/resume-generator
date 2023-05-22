import { OutlineButton } from "../OutlineButton";

const Education = ({ onNext, onPrev }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-4xl font-bold">What best describes your level of education?</h1>
      <p className="mb-8 text-lg text-gray-600">Select the best option and we&apos;ll help you structure your education section.</p>
      <div className="flex flex-col items-center space-y-4">
        <OutlineButton>Secondary School</OutlineButton>
        <OutlineButton>Vocational Certificate or Diploma</OutlineButton>
        <OutlineButton>Apprenticeship</OutlineButton>
        <OutlineButton>Associates</OutlineButton>
        <OutlineButton>Bachelors of Honours</OutlineButton>
        <OutlineButton>Masters, Post-Graduate Diploma</OutlineButton>
        <OutlineButton>Doctorate or Ph.D</OutlineButton>
      </div>
      <button onClick={onNext} className="mt-4 text-sm text-gray-500 hover:underline">Prefer not to answer</button>
    </div>
  );
};

export default Education;
