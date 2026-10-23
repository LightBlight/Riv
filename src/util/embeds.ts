import { EmbedBuilder, AttachmentBuilder } from "discord.js";

const welcomeImage: AttachmentBuilder = new AttachmentBuilder('../assets/rivuletSmoke.jpg');
const helpFields: string[] = [
    '`riv help`\tMuestra este embed',
    '`riv say <texto>`\tRepite aquello que pongas en <texto>',
    '`riv reply <texto>`\tLo mismo de arriba pero en respuesta'
];

export function generateWelcomeEmbed(name: string | null): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle(`${name ?? 'Unnamed wawa'}, hoal`)
        .setColor('Random')
        .setImage('attachment://rivuletSmoke.jpg')
        .setFooter({ text: 'rivWelcome' });
}

export function generateHelpEmbed(): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Ayuda')
        .setColor('Aqua')
        .addFields({ name: 'Comandios', value: helpFields.join('\n') })
        .setFooter({text: 'rivHelp'});
}

export { welcomeImage }