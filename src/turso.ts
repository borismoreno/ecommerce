import { createClient } from '@libsql/client/web';

export const turso = createClient({
    url: import.meta.env.PUBLIC_TURSO_DATABASE_URL,
    authToken: import.meta.env.PUBLIC_TURSO_AUTH_TOKEN,
});