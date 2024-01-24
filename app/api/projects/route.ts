// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import { promises as fs } from "fs";

// type ResponseData = {
//   message: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

export async function GET(request: any) {
  const data = await fs.readFile(
    process.cwd() + "/app/projects/project.json",
    "utf8"
  );
  return NextResponse.json(data, { status: 200 });
}
