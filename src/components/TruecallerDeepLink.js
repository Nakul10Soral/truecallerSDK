'use client'; // Important for App Router

import { useEffect, useState } from 'react';

const TruecallerDeepLink = () => {
    const [verificationStatus, setVerificationStatus] = useState(null);

    const triggerTruecallerVerification = () => {
        const requestNonce = Math.random().toString(36).substr(2, 9); // Generate a unique nonce

        // Construct the Truecaller deep link
        const truecallerLink = `truecallersdk://truesdk/web_verify?type=btmsheet&requestNonce=${requestNonce}&partnerKey=${process.env.NEXT_PUBLIC_PARTNER_KEY}&partnerName=${process.env.NEXT_PUBLIC_PARTNER_NAME}&lang=en&privacyUrl=${process.env.NEXT_PUBLIC_PRIVACY_URL}&termsUrl=${process.env.NEXT_PUBLIC_TERMS_URL}&loginPrefix=Verify&loginSuffix=with%20Truecaller&ctaPrefix=Continue&ctaColor=#4CAF50&ctaTextColor=#FFFFFF&btnShape=rectangular&skipOption=Skip&ttl=300000`;

        // Redirect to the Truecaller link
        window.location.href = truecallerLink;

        // Timeout to check if Truecaller is installed or not
        setTimeout(() => {
            if (document.hasFocus()) {
                // Truecaller app not present, redirect to alternate verification
                setVerificationStatus('Truecaller app not found, redirecting to alternate verification.');
                window.location.href = '/alternate-verification';
            } else {
                // Truecaller app found and verification started
                setVerificationStatus('Truecaller verification started.');
            }
        }, 600);
    };

    useEffect(() => {
        // Trigger the Truecaller verification when the component mounts
        triggerTruecallerVerification();
    }, []);

    return (
        <div>
            <h2>Phone Number Verification</h2>
            <p>{verificationStatus || 'Redirecting to Truecaller for verification...'}</p>
        </div>
    );
};

export default TruecallerDeepLink;
