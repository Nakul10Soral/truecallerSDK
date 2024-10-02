import './globals.css'

export const metadata = {
  title: 'Truecaller Verification POC',
  description: 'A proof of concept for Truecaller verification using Next.js 14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://sdk.truecaller.com/web/v1/truesdk.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}