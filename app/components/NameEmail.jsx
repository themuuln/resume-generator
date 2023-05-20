"use client"
import { useState } from "react"
import { Step } from "./Components"

const NameEmail = ({ onNext }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ firstName, lastName, email });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Step>Step 1: Name and Email</Step>
      <label htmlFor="name">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="name">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Next</button>
    </form>
  )
}

export default NameEmail