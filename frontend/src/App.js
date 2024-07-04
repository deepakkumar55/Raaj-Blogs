import React from 'react'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Analytics id="UA-123456-1" />
    </div>
  )
}

export default App
