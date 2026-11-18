import './globals.css'

export const metadata = {
  title: 'Rohan Buildcon | Building Dreams. Constructing Excellence.',
  description: 'Premium residential and commercial construction by Rohan Buildcon. Thoughtful design, precise engineering and a better build experience.',
  keywords: ['Rohan Buildcon', 'luxury construction', 'residential construction', 'commercial construction', 'Pune builder'],
  openGraph: { title: 'Rohan Buildcon', description: 'Building dreams. Constructing excellence.', type: 'website' },
  icons: {
    icon: "/icon.png",
  }
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
