import { AnimatePresence, motion } from 'framer-motion';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa';

const Skills = ({ onNext, onPrev }) => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  });

  // Function to handle form submission
  const onSubmit = (data) => {
    // Handle the form data
    console.log(data.skills);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">What skills would you like to highlight?</h1>

      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
        {/* Render the skills */}
        <AnimatePresence initial={false}>
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center p-2 mb-4 bg-white rounded-md shadow-md w-96"
            >
              <input
                type="text"
                defaultValue={field.value}
                {...register(`skills.${index}.value`)}
                placeholder="Add your skills here."
                className="w-full p-2 outline-none"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    append({ value: '' });
                  }
                }}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-3 py-2 ml-2 border-red-500 border-[1px] text-red-500 hover:text-white transition-colors duration-200 rounded-md hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Plus button */}
        <button
          type="button"
          onClick={() => append({ value: '' })}
          className="px-2 py-1 mt-4 text-base text-blue-500 font-semibold border-[2px] border-blue-500 hover:bg-blue-500 rounded-md hover:text-white duration-200 transition-colors focus:outline-none"
        >
          Add Skill
        </button>

        <div className="flex justify-center mt-6">
          <button
            onClick={onPrev}
            className="px-6 py-2 mr-4 font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Next: Summary
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
