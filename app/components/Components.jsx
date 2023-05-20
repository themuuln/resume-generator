export const Step = ({ children }) => {
  return (
    <h2 className="text-xl font-semibold">{children}</h2>
  )
}

const FilledBar = () => {
  return (
    <div className="w-20 h-4 bg-blue-400"></div>
  )
}

export const LanguageLevel = () => {
  return (
    <div className="flex">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}