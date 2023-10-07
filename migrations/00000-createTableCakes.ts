import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE cakes (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(20) NOT NULL,
      price integer NOT NULL,
      description varchar(200)
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE cakes
  `;
}
