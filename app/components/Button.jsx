const Button = ({ children }) => {
  return (
    <button className="px-3 py-2 transition-colors duration-200 bg-teal-400 rounded hover:bg-teal-500">{children}</button>
  )
}

export default Button