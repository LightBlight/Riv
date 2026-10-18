import fs from 'node:fs';
import dotenv from 'dotenv';
import { Client, GatewayIntentBits, type ClientEvents } from 'discord.js';
import { type ClientEvent, _dirname } from './types.js';

dotenv.config();

const token: string | undefined = process.env.DISCORD_TOKEN;

// use this later
const client: Client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

const eventFiles: string[] = fs.readdirSync(`${_dirname}/events`).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const { default: eventModule } = await import(`${_dirname}/events/${file}`) as { default: ClientEvent<keyof ClientEvents> };
    console.log(`importing ${file} from ${_dirname}/events/${file}`);

    if (eventModule.once) {
        console.log('Event module is once');
        client.once(eventModule.name, (...args) => { eventModule.execute(...args); });
    }
    else {
        console.log('Event module is not once');
        client.on(eventModule.name, (...args) => { eventModule.execute(...args); });
    }
}

if (token) {
    client.login(token);
    console.log(`Event files -> ${eventFiles}`);
}