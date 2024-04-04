const { db } = require("@vercel/postgres");
const {
  clientsList,
  people,
  properties,
} = require("../app/lib/placeholder-data.js");

async function seedProperties(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS properties (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        type TEXT NOT NULL,
        name VARCHAR(255) NOT NULL,
        href TEXT NOT NULL,
        description TEXT NOT NULL,
        short_description TEXT NOT NULL,
        bedrooms INT NOT NULL,
        bathrooms INT NOT NULL,
        area INT NOT NULL,
        price INT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "properties" table`);

    const insertedProperties = await Promise.all(
      properties.map(async (property) => {
        return client.sql`
        INSERT INTO properties (id, type, name, href, description, short_description, bedrooms, bathrooms, area, price, image_url)
        VALUES (${property.id}, ${property.type}, ${property.name}, ${property.href}, ${property.description}, ${property.short_description},  ${property.bedrooms},  ${property.bathrooms},  ${property.area},  ${property.price},  ${property.image_url})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedProperties.length} properties`);

    return {
      createTable,
      properties: insertedProperties,
    };
  } catch (error) {
    console.error("Error seeding properties:", error);
    throw error;
  }
}

async function seedClientsList(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS clientsList (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    cld TEXT NOT NULL,
    name TEXT NOT NULL,
    href VARCHAR(255) NOT NULL,
    domain TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL
  );
`;

    console.log(`Created "clientsList" table`);

    const insertedClientsList = await Promise.all(
      clientsList.map(
        (consumer) => client.sql`
        INSERT INTO clientsList (id, cld, name, href, domain, category, description)
        VALUES (${consumer.id}, ${consumer.cld}, ${consumer.name}, ${consumer.href}, ${consumer.domain}, ${consumer.category}, ${consumer.description})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedClientsList.length} clientsList`);

    return {
      createTable,
      clientsList: insertedClientsList,
    };
  } catch (error) {
    console.error("Error seeding clientsList:", error);
    throw error;
  }
}

async function seedPeople(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS people (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role TEXT NOT NULL,
        profile TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "people" table`);

    const insertedPeople = await Promise.all(
      people.map(
        (person) => client.sql`
        INSERT INTO people (id, name, role, profile, image_url)
        VALUES (${person.id}, ${person.name}, ${person.role}, ${person.profile}, ${person.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedPeople.length} people`);

    return {
      createTable,
      people: insertedPeople,
    };
  } catch (error) {
    console.error("Error seeding people:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProperties(client);
  await seedPeople(client);
  await seedClientsList(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
