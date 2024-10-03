// src/app/page.js
import TruecallerDeepLink from '@/components/TruecallerDeepLink';
import TruecallerVerification from '@/components/TruecallerVerification';

export default function Home() {
  return (
    <main>
      <h1>Truecaller Verification POC</h1>
      <TruecallerVerification />
      <h2>new verification</h2>
      <TruecallerDeepLink/>
    </main>
  );
}