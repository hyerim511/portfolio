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
  const file = await fs.readFile(
    process.cwd() + "/app/api/projects/project.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return NextResponse.json(data, { status: 200 });
}
