'use client'; // Important for App Router

import { useEffect, useState } from 'react';

const TruecallerDeepLink = () => {
    const [verificationStatus, setVerificationStatus] = useState(null);

    const triggerTruecallerVerification = () => {
        const requestNonce = "truecallerRequestNonce";

        const truecallerLink = `truecallersdk://truesdk/web_verify?type=btmsheet&requestNonce=${requestNonce}&partnerKey=${process.env.NEXT_PUBLIC_PARTNER_KEY}&partnerName=${process.env.NEXT_PUBLIC_PARTNER_NAME}&lang=en&privacyUrl=${process.env.NEXT_PUBLIC_PRIVACY_URL}&termsUrl=${process.env.NEXT_PUBLIC_TERMS_URL}&loginPrefix=continuewith&loginSuffix=verifymobile&ctaPrefix=proceedwith&ctaColor=#7a00eb&ctaTextColor=#ff8a22&btnShape=rect&skipOption=manualdetails&ttl=300000`;

        window.open(truecallerLink, '_self');

        // setTimeout(() => {
            // if (document.hasFocus()) {
            //     setVerificationStatus('Truecaller app not found, redirecting to alternate verification.');
            //     window.location.href = '/alternate-verification';
            // } else {
            //     setVerificationStatus('Truecaller verification started.');
            // }
        // }, 3000);
        const handleVisibilityChange = () => {
            const colorDiv = document.getElementById('truecallerdiv');
          if (document.visibilityState === 'visible') {
                console.log("hai truecaller")
              colorDiv.style.backgroundColor = "green"
          } else {
                console.log("nahi hai truecaller")
              colorDiv.style.backgroundColor = "red"
                }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
    };

    // useEffect(() => {
    //     // Trigger the Truecaller verification when the component mounts
    //     triggerTruecallerVerification();
    // }, []);

    return (
        <div>
            <h2>Phone Number Verification</h2>
            <button onClick={triggerTruecallerVerification} >start verification</button>
            <p>{verificationStatus || 'Redirecting to Truecaller for verification...'}</p>
            <div id="truecallerdiv">
                truecaller is present or not
            </div>
        </div>
    );
};

export default TruecallerDeepLink;
