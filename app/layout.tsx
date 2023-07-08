import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orders Corserva',
  description: 'MVP of Orders Crud',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col items-center justify-between p-24`}>
        <header className="flex flex-row">
          <ul className="basis-1/4 border-solid border-2 border-gray-500 px-5 mx-2">
            <Link href="/orders/list">Orders</Link>
          </ul>
          <ul className="basis-1/4 border-solid border-2 border-gray-500 px-5 mx-2">
            <Link href="/">Products</Link>
          </ul>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
