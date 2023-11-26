import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { generateStaticParams } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request: Request) {
    const session = await getServerSession(generateStaticParams());
    return NextResponse.json({ authenticated: !!session });
};