import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.redirect(new URL("/", req.url));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { callbackUrl } = body;
  return NextResponse.redirect(new URL(callbackUrl || "/", req.url));
}
