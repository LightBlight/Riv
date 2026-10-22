//clientReady.js
import type { ClientEvent } from "../util/types.js";

const clientReady: ClientEvent<'clientReady'> = {
    once: true,
    name: 'clientReady',
    execute(client): void {
        console.log(`Client ready, logged as ${client.user?.id}`)
    }
}

export default clientReady;