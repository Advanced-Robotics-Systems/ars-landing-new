import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function GET(
  req: NextRequest,
  context: { params: { filename: string } }
) {
  try {
    const { params } = context;

    const filename = params.filename;

    const filePath = join(process.cwd(), "public/files", filename);

    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename=${filename}`,
      },
    });
  } catch (error) {
    return new NextResponse("Error fetching the file.", { status: 400 });
  }
}
