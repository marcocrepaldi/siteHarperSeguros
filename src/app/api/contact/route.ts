import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Replace with your actual n8n webhook URL
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || 'https://primary-production.up.railway.app/webhook/harper-leads';

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'Landing Page Harper Seguros',
        timestamp: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Lead sent successfully to n8n' });
    } else {
      throw new Error('Failed to send lead to n8n');
    }
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
