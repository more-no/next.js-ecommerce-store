'use server';
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import { headers } from 'next/headers';
import postgres, { Sql } from 'postgres';
import { setEnvironmentVariables } from '../utilities/config.mjs';

setEnvironmentVariables();

declare module globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return ((
    ...sqlParameters: Parameters<typeof globalThis.postgresSqlClient>
  ) => {
    headers();
    return globalThis.postgresSqlClient(...sqlParameters);
  }) as typeof globalThis.postgresSqlClient;
}

export const sql = connectOneTimeToDatabase();
