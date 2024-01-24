import { NextResponse } from 'next/server';
 
export default function handler(res:any) {
  res.status(200).json({ message: 'Hello from my serverless function!' });
  }