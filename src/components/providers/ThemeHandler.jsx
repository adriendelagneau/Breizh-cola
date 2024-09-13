'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

const ThemeHandler = ({children}) => {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default ThemeHandler
