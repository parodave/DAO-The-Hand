import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { GeistSans as Geist, GeistMono as Geist_Mono } from 'geist/font';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${Geist.variable} ${Geist_Mono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
