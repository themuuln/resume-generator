import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Step } from "./Components";
import Button from "./Button";

const WebsitePortfolio = ({ onNext, onPrev }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onNext(data);
  };

  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="container px-4 py-8 mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <Step>Step 2: Website, Portfolio</Step>
      <div className="mb-6">
        <label htmlFor="website" className="block mb-2 font-bold text-gray-700">
          Website:
        </label>
        <input
          type="text"
          id="website"
          {...register("website")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your website URL"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="portfolio" className="block mb-2 font-bold text-gray-700">
          Portfolio:
        </label>
        <input
          type="text"
          id="portfolio"
          {...register("portfolio")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your portfolio URL"
        />
      </div>

      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button type="button" onClick={onPrev} className="px-4 py-2 text-white bg-gray-500 rounded-md">
          Previous
        </button>
        <Button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-md">
          Next
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default WebsitePortfolio;
