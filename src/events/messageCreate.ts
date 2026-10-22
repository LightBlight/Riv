import type { ClientEvent } from "../util/types.js";
import handle from "../commands/commandHandler.js";
const prefix: string = 'riv ';

const messageCreate: ClientEvent<'messageCreate'> = {
    once: false,
    name: 'messageCreate',
    async execute(message): Promise<void> {
        if (message.author.bot) return;

        if (message.content.startsWith(prefix)) await handle(message);
    }
}

export default messageCreate;