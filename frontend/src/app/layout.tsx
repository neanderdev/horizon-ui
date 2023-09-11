import './globals.css'

import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const dmSans = DM_Sans({ subsets: ['latin'] })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Horizon UI',
  description: 'Horizon UI',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className='dark-theme'>
      <body className={`${dmSans.className} ${plusJakartaSans.className} ${poppins.className}`}>{children}</body>
    </html >
  )
}
