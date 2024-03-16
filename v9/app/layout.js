import "./globals.css"

import { Inter } from "@next/font/google"

import Header from "./../components/Header"

const inter = Inter()

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <title>@omergulcicek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="h-full flex flex-col bg-zinc-50 dark:bg-black overflow-x-hidden">
        <Header />

        <main className="relative -mt-24 h-full w-full max-w-7xl m-auto py-32 px-4 sm:p-8 lg:px-24 lg:py-44 bg-white dark:bg-zinc-900 shadow-md">
          {children}
        </main>
      </body>
    </html>
  )
}
