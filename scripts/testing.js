const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();
  try {
    const result = await client.sql`SELECT invoices.amount, customers.name
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE invoices.amount = 666;`;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  await client.end();
}

main();
