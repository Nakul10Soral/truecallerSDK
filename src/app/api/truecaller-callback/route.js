export async function POST(req) {
    try {
        const { requestId, status } = await req.json();

        if (status === 'flow_invoked') {
            console.log('Truecaller flow invoked successfully');
            
            return new Response(
                JSON.stringify({ message: 'Truecaller flow invoked successfully', requestId }),
                { status: 200 }
            );
        } else {
            console.log('Invalid Truecaller flow');
            
            return new Response(
                JSON.stringify({ error: 'Invalid Truecaller flow' }),
                { status: 400 }
            );
        }
    } catch (error) {
        console.log('Failed to handle callback');
        
        return new Response(
            JSON.stringify({ error: 'Failed to handle callback' }),
            { status: 500 }
        );
    }
}


// // src/app/api/truecaller-callback/route.js
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//     const callbackData = await request.json();

//     // Here you would typically:
//     // 1. Verify the signature of the callback data
//     // 2. Process the verification result
//     // 3. Update your user's status in the database

//     console.log('Received Truecaller callback:', callbackData);

//     // For now, we'll just return a success response
//     return NextResponse.json({ success: true, message: 'Callback received and processed' });
// }