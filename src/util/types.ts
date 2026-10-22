// types.ts
import path from 'node:path';
import type { ClientEvents } from "discord.js";

export interface ClientEvent<K extends keyof ClientEvents> {
    once: boolean,
    name: K,
    execute(...args: ClientEvents[K]): void | Promise<void>
}

const _dirname: string = path.join(process.cwd(), 'dist');
export { _dirname }