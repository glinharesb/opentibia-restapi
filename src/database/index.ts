import { createConnection } from 'typeorm';
import path from 'path';

export async function connectToDatabase() {
  try {
    await createConnection({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      port: 3306,
      database: 'opentibia-restapi',
      entities: [path.join(__dirname, '..', 'entities', '*.ts')],
    });
  } catch (error) {
    console.error(__filename, error);
  }
}
