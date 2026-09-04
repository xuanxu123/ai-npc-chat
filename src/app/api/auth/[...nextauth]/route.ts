import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  return NextResponse.redirect(new URL("/", req.url));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { callbackUrl, error } = body;

  if (error) {
    return NextResponse.redirect(new URL(`/auth-error?error=${error}`, req.url));
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect(new URL(`/sign-in?callbackUrl=${callbackUrl || "/"}`, req.url));
  }

  return NextResponse.redirect(new URL(callbackUrl || "/", req.url));
}
