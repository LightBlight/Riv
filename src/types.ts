import type { ClientEvents } from "discord.js";

export interface ClientEvent<K extends keyof ClientEvents> {
    once: boolean,
    name: K,
    execute(...args: ClientEvents[K]): void
}