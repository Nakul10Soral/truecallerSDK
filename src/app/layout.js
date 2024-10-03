// src/app/layout.js
import './globals.css'
import TruecallerSDKLoader from '@/components/TruecallerSDKLoader'

export const metadata = {
  title: 'Truecaller Verification POC',
  description: 'A proof of concept for Truecaller verification using Next.js 14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TruecallerSDKLoader />
        {children}
      </body>
    </html>
  )
}