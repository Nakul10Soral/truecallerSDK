// components/TruecallerVerification.js
'use client'

import { useState, useEffect } from 'react';

export default function TruecallerVerification() {
    const [verificationStatus, setVerificationStatus] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.truecaller) {
            window.truecaller.init({
                appKey: 'YOUR_TRUECALLER_APP_KEY', // Replace with your actual app key
                requestNonce: 'UNIQUE_REQUEST_NONCE',
                callback: handleVerificationResult,
                consent: 'User accepts the terms of service and privacy policy.',
                consentTitleOption: 'TRUECALLER_TITLE',
                buttonOptions: {
                    buttonColor: '#2196F3',
                    buttonTextColor: '#FFFFFF',
                },
            });
        }
    }, []);

    const handleVerificationResult = async (result) => {
        if (result.error) {
            setVerificationStatus('Verification failed: ' + result.error.message);
        } else {
            try {
                const response = await fetch('/api/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        requestId: result.requestId,
                        accessToken: result.accessToken,
                    }),
                });
                const data = await response.json();
                setVerificationStatus(data.message);
            } catch (error) {
                setVerificationStatus('Error during verification');
            }
        }
    };

    return (
        <div>
            <h2>Truecaller Verification</h2>
            <div id="truecaller-button"></div>
            <p>{verificationStatus}</p>
        </div>
    );
}