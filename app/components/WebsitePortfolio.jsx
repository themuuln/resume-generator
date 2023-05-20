"use client"
import { useState } from "react"
import { Step } from "./Components"

const WebsitePortfolio = ({ onNext, onPrev }) => {
  const [website, setWebsite] = useState('')
  const [portfolio, setPortfolio] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ website, portfolio });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Step>Step 2: Website, Portfolio</Step>
      <label htmlFor="name">Website:</label>
      <input
        type="text"
        id="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <label htmlFor="name">Portfolio:</label>
      <input
        type="text"
        id="portfolio"
        value={portfolio}
        onChange={(e) => setPortfolio(e.target.value)}
      />

      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Next</button>
    </form>
  )
}

export default WebsitePortfolio