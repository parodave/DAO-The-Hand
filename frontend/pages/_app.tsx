import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { GeistSans as Geist } from 'geist/font/sans';
import { GeistMono as Geist_Mono } from 'geist/font/mono';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Geist.variable} ${Geist_Mono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
