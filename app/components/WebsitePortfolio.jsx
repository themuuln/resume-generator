"use client"
import { useState } from "react"
import { Step } from "./Components"
import Button from "./Button"

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

      <Button type="button" onClick={onPrev}>Previous</Button>
      <Button type="submit">Next</Button>
    </form>
  )
}

export default WebsitePortfolio