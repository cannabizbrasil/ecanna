import '@/styles/globals.css'
import { HubspotProvider } from 'next-hubspot';
import type { AppProps } from 'next/app'
import { GoogleTagManager } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className}`}>
      <HubspotProvider>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-M43DX64N" />
      </HubspotProvider>
    </main>


  )
}
