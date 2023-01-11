import { GuildChannel, TextChannel, VoiceChannel } from 'eris';
import { EventListener } from 'yuuko';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default new EventListener('messageCreate', async (msg, _ctx) => {
    let channel: GuildChannel | undefined;
    if (msg.channel instanceof (TextChannel || VoiceChannel)) {
        channel = msg.channel;
    }

    if (
        msg.content !== channel.name ||
        msg.embeds.length !== 0 ||
        msg.attachments.length !== 0 ||
        msg.stickerItems !== undefined || // does not return a list for whatever reason
        msg.components.length !== 0
    ) {
        return await msg.delete('not e');
    }
});
