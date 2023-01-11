import { Client as _Client } from 'yuuko';
import 'dotenv/config';

const INTENTS = (1 << 0) | (1 << 1) | (1 << 9) | (1 << 15);

export class Client extends _Client {
    constructor() {
        super({
            token: process.env.TOKEN,
            intents: INTENTS,
            prefix: '',
        });

        this.on('ready', () => {
            this.editStatus({
                name: 'e',
                type: 5,
            });
            console.info(
                `[I] connected as ${this.user.username}#${this.user.discriminator} at ${new Date().toLocaleString()}`,
            );
        });
    }
}
