import { sql } from "@vercel/postgres";
import { Property } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProperties() {
  noStore();
  try {
    const data = await sql<Property>`SELECT * FROM properties`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
