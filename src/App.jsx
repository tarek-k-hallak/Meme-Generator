import React, { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {
  return (
    <div>
      <Header />
      <Meme />
      <Form />
    </div>
  )
}
