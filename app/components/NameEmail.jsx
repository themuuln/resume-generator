import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Step } from './Components';
import Button from './Button';
import Required from './form/Required';
import Star from './form/Star';

const NameEmail = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onNext(data);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container px-4 py-8 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step>What’s the best way for employers to contact you?</Step>
        <p className="text-gray-600">We suggest including an email and phone number.</p>
        <p className="text-gray-600"><span className="font-bold">*</span> indicates a required field</p>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="firstName" className="font-bold text-gray-800">First Name <Star /></label>
            <input
              type="text"
              id="firstName"
              placeholder="e.g. Temuulen"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <Required />}
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="lastName" className="font-bold text-gray-800">Last Name <Star /></label>
            <input
              type="text"
              id="lastName"
              placeholder="e.g. Undrakhbayar"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <Required />}
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="phoneNumber" className="font-bold text-gray-800">Phone <Star /></label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="e.g. +97688650115"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && <Required />}
          </motion.div>

          <motion.div className="flex flex-col" variants={inputVariants}>
            <label htmlFor="email" className="font-bold text-gray-800">Email <Star /></label>
            <input
              type="email"
              id="email"
              placeholder="e.g. zerone.offical@gmail.com"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register('email', { required: true })}
            />
            {errors.email && <Required />}
          </motion.div>
        </motion.div>
        <motion.div variants={inputVariants} initial="hidden" animate="visible">
          <button type="submit" className="px-3 py-2 mt-4 transition-colors duration-200 bg-teal-400 rounded hover:bg-teal-500">Next</button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default NameEmail;
