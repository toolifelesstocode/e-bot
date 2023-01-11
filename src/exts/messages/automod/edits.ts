import { GuildChannel, TextChannel, VoiceChannel } from 'eris';
import { EventListener } from 'yuuko';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default new EventListener('messageUpdate', async (msg, oldMsg, _ctx) => {
    let channel: GuildChannel | undefined;
    if (msg.channel instanceof (TextChannel || VoiceChannel)) {
        channel = msg.channel;
    }

    if (msg.content !== channel.name) {
        return await msg.delete('not e');
    }
});
