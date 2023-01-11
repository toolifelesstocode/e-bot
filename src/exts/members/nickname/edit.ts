import { EventListener } from 'yuuko';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default new EventListener('guildMemberUpdate', async (guild, member, _oldMember, _ctx) => {
    if (guild.id !== process.env.GUILD_ID) return;

    if (member.nick !== 'e') {
        return await member.edit({ nick: 'e' }, 'not e');
    }
});
