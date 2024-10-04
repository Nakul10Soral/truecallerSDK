// app/api/truecaller/callback/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Extract request data from the incoming callback
        const data = await request.json();
        const { requestId, accessToken, endpoint } = data;

        // If the user rejects the verification, handle the error
        if (!accessToken) {
            console.log(`User rejected verification for requestId: ${requestId}`);
            return NextResponse.json({ message: 'User rejected verification', requestId }, { status: 400 });
        }

        // Fetch user profile using the access token
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Cache-Control': 'no-cache',
            },
        });

        // Handle unauthorized or server errors
        if (!response.ok) {
            console.error('Error fetching Truecaller profile:', response.statusText);
            return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: response.status });
        }

        // Get the user profile from the response
        const userProfile = await response.json();

        // You can now use this user profile in your application
        // For example, you might save it to your database or session
        console.log('User profile fetched:', userProfile);

        // Respond back with the user profile
        return NextResponse.json({ message: 'User profile fetched successfully', userProfile }, { status: 200 });

    } catch (error) {
        console.error('Error handling Truecaller callback:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
