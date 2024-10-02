// app/page.js
import TruecallerVerification from '../components/TruecallerVerification';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Truecaller Verification POC</h1>
      <TruecallerVerification />
    </main>
  );
}