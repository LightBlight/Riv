import type { Message } from 'discord.js';

export default function reply(message: Message, args: string[]) {
    if (message.channel.isSendable()) return message.reply(args.join(' '));
}