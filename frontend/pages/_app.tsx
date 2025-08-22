import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { Inter, Roboto_Mono } from 'next/font/google';
const Geist = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const Geist_Mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Geist.variable} ${Geist_Mono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
