import { EmbedBuilder, AttachmentBuilder } from "discord.js";

const welcomeImage: AttachmentBuilder = new AttachmentBuilder('../assets/rivuletSmoke.jpg');

export function generateWelcomeEmbed(name: string | null): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle(`${name ?? 'Unnamed wawa'}, hoal`)
        .setColor('Random')
        .setImage('attachment://rivuletSmoke.jpg')
        .setFooter({ text: 'rivWelcome' });
}

export { welcomeImage }