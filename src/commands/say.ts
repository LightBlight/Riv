import type { Message } from 'discord.js';

export default function say(message: Message, args: string[]) {
    if (message.channel.isSendable()) return message.channel.send(args.join(' '));
}