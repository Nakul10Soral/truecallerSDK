// src/components/TruecallerSDKLoader.js
'use client'

import { useEffect } from 'react';

export default function TruecallerSDKLoader() {
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.truecaller) {
            const script = document.createElement('script');
            script.src = 'https://cdn.truecaller.com/sdk/v1/truesdk.js';
            script.async = true;
            script.onload = () => console.log('Truecaller SDK loaded');
            script.onerror = () => console.error('Failed to load Truecaller SDK');
            document.body.appendChild(script);
        }
    }, []);

    return null;
}