import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    try {
      // Leer el archivo messages.json
      const contents = await readFile('messages.json', 'utf8');
      const messages = JSON.parse(contents);

      // Devolver el mensaje correspondiente al ID
      return messages[id];
    } catch (error) {
      console.error('Error reading file:', error);
      throw new Error('Failed to read messages');
    }
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
