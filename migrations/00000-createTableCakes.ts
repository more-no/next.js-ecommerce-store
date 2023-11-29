import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      cakes (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        NAME VARCHAR(20) NOT NULL,
        price INTEGER NOT NULL,
        description VARCHAR(200)
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE cakes `;
}
