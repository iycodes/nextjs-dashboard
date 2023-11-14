import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const petName = searchParams.get("petName");
  const ownerName = searchParams.get("ownerName");

  try {
    if (!petName || !ownerName)
      throw new Error("both pet name and owner names are requried");
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const pets = await sql` SELECT * FROM PETS`;
  return NextResponse.json({ pets }, { status: 200 });
}
