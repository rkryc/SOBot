const {RichEmbed} = require('discord.js');
module.exports = (guild, user) => {
  console.log(`Użytkownik ${user.tag} został odbanowany.`);
  guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik **${user.tag}** został odbanowany.`);
  const embed = new RichEmbed()
  .setAuthor('Czacior - ostrzeżenia i bany', 'https://i.imgur.com/zNC67j6.png')
  .setColor([0, 255, 0])
  .setTimestamp()
  .setDescription(`**Działanie:** Unban\n**Wyznaczony użytkownik:** ${user.tag}\n**Odpowiedzialny moderator:** ${guild.client.unbanAuth.tag}\n**Powód:** ${guild.client.unbanReason}`)
  .setFooter("https://i.imgur.com/zNC67j6.png");
  return guild.channels.get(guild.channels.find('name', 'ogłoszenia').id).send({embed});
  user.send('Mamy świetną nowinę! Właśnie cię odbanowano na najlepszym serwerze Czacior! Łap zaproszenie i się ciesz: https://discord.gg/Gew6cRE :smile:')
};
