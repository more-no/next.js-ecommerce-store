import { Sql } from 'postgres';

const cakes = [
  {
    id: 1,
    name: 'Adelaide',
    price: 50,
    description:
      'Almond and Citrus streuzel, White Chocolate namelaka, Fresh Raspberries, Raspberry mousse and Raspberry icing.',
  },
  {
    id: 2,
    name: 'Arabic',
    price: 45,
    description:
      'Vanilla PandiSpagna soaked in Coffee, Mascarpone mousse, Dark Chocolate mousse, Dark Chocolate pearls, Chocolate custard.',
  },
  {
    id: 3,
    name: 'Esmeralda',
    price: 55,
    description:
      'PandiSpagna and Cocoa streuzel, Pistachio praline, Chantilly cream, White Chocolate and Vanilla mousse.',
  },
  {
    id: 4,
    name: 'Iside',
    price: 50,
    description:
      'Lime and Vanilla cake, Strawberry cream, Strawberry and Lime gelee, Yoghurt mousse.',
  },
  {
    id: 5,
    name: 'Notturna',
    price: 70,
    description:
      'Dark Chocolate mousse, Milk Chocolate, White Chocolate, Cocoa PandiSpagna cake, Milk Chocolate crunch.',
  },
  {
    id: 6,
    name: 'Perla',
    price: 60,
    description:
      'Cocoa struezel, Milk Gianduia mousse, Mango gelee, Dulcey and Vanilla mousse.',
  },
  {
    id: 7,
    name: 'Tuttifrutti',
    price: 60,
    description:
      'Almond dacquoise, Creamy Passion-Fruit, Coconut, Pineapple, Pineapple compote, Coconut mousse.',
  },
];

export async function up(sql: Sql) {
  for (const cake of cakes) {
    await sql`
      INSERT INTO cakes
        (name, price, description)
      VALUES
        (${cake.name}, ${cake.price}, ${cake.description})
  `;
  }
}

export async function down(sql: Sql) {
  for (const cake of cakes) {
    await sql`
      DELETE FROM cakes WHERE id = ${cake.id};
   `;
  }
}
