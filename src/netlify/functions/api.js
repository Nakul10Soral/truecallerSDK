// netlify/functions/api.js
export async function handler(event, context) {
    if (event.path === '/.netlify/functions/api/truecaller-callback') {
        const callbackData = JSON.parse(event.body);
        console.log('Received Truecaller callback:', callbackData);
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Callback received' })
        };
    }

    return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not Found' })
    };
}
