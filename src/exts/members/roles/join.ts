import { TextChannel } from 'eris';
import { EventListener } from 'yuuko';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default new EventListener('guildMemberAdd', async (guild, member, _ctx) => {
    if (guild.id !== process.env.GUILD_ID) return;
    else if (member.pending) return;

    try {
        return await member.addRole(process.env.DEFAULT_O_ROLE_ID, 'o');
    } catch (error) {
        const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
        if (logChannel instanceof TextChannel) {
            await logChannel.createMessage(
                `Error adding role to ${member.user.username}#${member.user.discriminator}: `,
                error,
            );
        }
    }
    
});