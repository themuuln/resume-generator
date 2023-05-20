import { motion } from "framer-motion";

export const OutlineButton = ({ children, onClick, isActive }) => {
  return (
    <motion.button
      className={`px-4 py-2 text-gray-700 bg-transparent border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none ${isActive ? 'text-white' : ''
        } ${isActive ? 'bg-gray-700' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};