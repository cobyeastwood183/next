import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import * as Sentry from '@sentry/nextjs';

export default async function handler(request) {
  try {
    const span = Sentry.startSpan({
      name: 'generateText',
      op: 'generateText',
    });
    span.setStatus('ok');
    Sentry.setStatus(span, 'ok');
    const { text } = await generateText({
      model: openai('gpt-4o'),
      system: 'You are a friendly assistant!',
      prompt: 'Why is the sky blue?',
    });

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}