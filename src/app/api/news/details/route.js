import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseInt(searchParams.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.news_list.findUnique({
      where: { id: id },
      include: { categories: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//create news
//CREATE
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.news_list.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
//update

//delete
