import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    try {
      // Leer el archivo messages.json
      const contents = readFile('messages.json', 'utf8');
      const messages = JSON.parse(await contents);

      // Devolver el mensaje correspondiente al ID
      return messages[id];
    } catch (error) {
      console.error('Error reading file:', error);
      throw new Error('Failed to read messages');
    }
  }

  //   async findAll() {}

  //   async create(message: string) {}
}
