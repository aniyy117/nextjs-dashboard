const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    const email = 'test@test.com';
    const password = await bcrypt.hash('Test@1234', 10);
    const id = '3958dc9e-712f-4377-85e9-fec4b6a6442a';
    const name = 'test';
    // Insert data into the "user" table
    const insertedUsers = await client.sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${id}, ${name}, ${email}, ${password})
      ON CONFLICT (id) DO NOTHING;
    `;

    return {
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
