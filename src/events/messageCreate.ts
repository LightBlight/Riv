import type { ClientEvent } from "../types.js";
const prefix: string = 'riv ';

const messageCreate: ClientEvent<'messageCreate'> = {
    once: false,
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) return;

        if (message.content.startsWith(prefix)) {
            console.log('message starts with riv prefix!');
        }
    }
}

export default messageCreate;