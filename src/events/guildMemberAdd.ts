import type { ClientEvent } from "../util/types.js";
import { generateWelcomeEmbed, welcomeImage } from "../util/embeds.js";
import type { GuildMember, Channel } from "discord.js";
import dotenv from 'dotenv';

dotenv.config();

const botTestChannels: string | undefined = process.env.BOT_TEST_CHANNELS;

const guildMemberAdd: ClientEvent<'guildMemberAdd'> = {
    once: false,
    name: 'guildMemberAdd',
    execute(member: GuildMember): void {
        if (!botTestChannels) {
            console.log('missing channel! [botTestChannel]');
            return;
        }
        const targetChannel: Channel | undefined = member.client.channels.cache.get(botTestChannels);

        if (targetChannel && targetChannel.isSendable()) {
            targetChannel.send({embeds: [generateWelcomeEmbed(member.displayName)], files: [welcomeImage]});
        }
    }
}