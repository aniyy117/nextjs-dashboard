const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
    const email = "test@te"
      // Insert data into the "user" table
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
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