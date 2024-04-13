import { sql } from "@vercel/postgres";
import { Property, Person, List } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProperties() {
  noStore();
  try {
    const data = await sql<Property>`SELECT * FROM properties`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch properties data.");
  }
}

export async function fetchPeople() {
  noStore();
  try {
    const data = await sql<Person>`SELECT * FROM people`;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch people data.");
  }
}

export async function fetchClientsList() {
  noStore();
  try {
    const data = await sql<List>`SELECT * FROM clientsList`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch clientsList data.");
  }
}

export async function fetchFilteredProperties(
  query: string,
  type: string,
  price: string,
  size: string
) {
  noStore();
  const [min_price, max_price] = price.split("-").map(Number);
  const [min_size, max_size] = size.split("-").map(Number);

  try {
    const data = query
      ? await sql`
      SELECT
        properties.id,
        properties.type,
        properties.name,
        properties.href,
        properties.description,
        properties.short_description,
        properties.bedrooms,
        properties.bathrooms,
        properties.area,
        properties.price,
        properties.image_url
      FROM properties
      WHERE
          properties.name ILIKE ${`%${query}%`} OR
          properties.href ILIKE ${`%${query}%`} OR
          properties.description ILIKE ${`%${query}%`} OR
          properties.short_description ILIKE ${`%${query}%`} OR
          properties.bedrooms::text ILIKE ${`%${query}%`} OR
          properties.bathrooms::text ILIKE ${`%${query}%`} OR
          properties.area::text ILIKE ${`%${query}%`} OR
          properties.price::text ILIKE ${`%${query}%`}
    `
      : await sql`SELECT * FROM properties`;

    let properties = data.rows;

    if (type) properties = data.rows.filter((item) => item.type === type);
    if (price) {
      properties = data.rows.filter(
        (item) => item.price >= min_price && item.price <= max_price
      );
    }
    if (size) {
      properties = data.rows.filter(
        (item) => item.area >= min_size && item.area <= max_size
      );
    }

    return properties;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch properties.");
  }
}

export async function getProperty(id: string) {
  try {
    const property = await sql`SELECT * FROM properties WHERE id=${id}`;
    return property.rows[0];
  } catch (error) {
    console.error("Failed to fetch property:", error);
  }
}
