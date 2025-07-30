import dynamic from 'next/dynamic';

const HandLanding = dynamic(() => import('../components/HandLanding'), { ssr: false });

export default function Home() {
  return <HandLanding />;
}
