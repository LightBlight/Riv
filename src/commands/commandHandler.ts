import type { Message } from "discord.js";
import { _dirname } from "../types.js";
// message param contains the entire message. We should split it.
export default async function handle(message: Message): Promise<void> {
    const messageContent: string = message.content;

    const messageArray: string[] = messageContent.split(' ');
    messageArray.splice(0, 1);
    
    // Usually, users will send something like "riv say wawa"
    // So we will consider the following. We will remove the 'riv' part
    // messageArray[0] -> command type
    // messageArray[1+] -> args
    const commandType: string | undefined = messageArray.shift();
    if (!commandType) return;

    const { default: executeCommand } = await import(`${_dirname}/commands/${commandType}.js`);
    await executeCommand(message, messageArray);
}