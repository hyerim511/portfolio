import { NextResponse } from 'next/server';

import data from "./project.json"
 
export default function handler(res: any) {
  res.status(200).json(data)
}