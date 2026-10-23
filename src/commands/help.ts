import { generateHelpEmbed } from "../util/embeds.js";
import type { Message } from "discord.js";

export default function help(message: Message, args: string[]): void {
    if (message.author.bot) return;

    if (args.length !== 0) {
        if (message.channel.isSendable()) {
            message.reply('comando invalido. `riv help` no requiere argumentos');
            return;
        }
    }

    if (message.channel.isSendable()) {
        message.channel.send({ embeds: [generateHelpEmbed()] });
        return;
    }
}