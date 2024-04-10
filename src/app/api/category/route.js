import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

//Get methed
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.categories.findMany({
      select: { id: true, name: true },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//CREATE
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.categories.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

// Update method

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let serviceID = searchParams.get("id");

    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.categories.update({
      where: { id: parseInt(serviceID) },
      data: reqBody,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}

//delete

export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let ID = searchParams.get("id");

    let prisma = new PrismaClient();

    let result = await prisma.categories.delete({
      where: { id: parseInt(ID) },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
