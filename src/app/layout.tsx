import React from 'react'
import AuthenticationProvider from '@/context/authenticationContext'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('teste de server')
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </body>
    </html>
  )
}
