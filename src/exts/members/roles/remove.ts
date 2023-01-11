import { TextChannel } from 'eris';
import { EventListener } from 'yuuko';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default new EventListener('guildMemberUpdate', async (guild, member, _oldMember, _ctx) => {
    if (guild.id !== process.env.GUILD_ID) return;

    if (!member.roles.includes(process.env.DEFAULT_E_ROLE_ID)) {
        try {
            return await member.addRole(process.env.DEFAULT_E_ROLE_ID, 'e');
        } catch (error) {
            const logChannel = guild.channels.get(process.env.LOG_CHANNEL_ID);
            if (logChannel instanceof TextChannel) {
                await logChannel.createMessage(
                    `Error adding role to ${member.user.username}#${member.user.discriminator}: `,
                    error,
                );
            }
        }
    }
});
