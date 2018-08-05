const Discord = require('discord.js');
const fs = require('fs');
const hero = new Discord.Client({messageCacheMaxSize: 1});
const prefix = "!";
const p = "-";
var errors = 0;

hero.on('ready', () => {
  console.log(``);
  console.log(`Username .: ${hero.user.username}`);
  console.log(`Discrim .: ${hero.user.discriminator}`);
  console.log(`Errors .: ${errors.toFixed(0)}`);
  console.log(``);
  console.log(`Members .: ${hero.guilds.get('475072613157437445').memberCount}`)
  console.log(`Strikers .: ${hero.users.filter(s => s.username.includes('Strikers') && s.id !== hero.user.id).size}`);
  console.log(``);
  console.log(`Developer .:`);
  console.log(`! StrikerHeRo.`);
});
hero.on('guildMemberAdd', member => {
  if(member.guild.id !== '475072613157437445') return;
  var thatRole = member.guild.roles.find('name' , '● ʳ غير مفعل');
  member.addRole(thatRole);
  member.send(`${member}, **مرحبا بك في سيرفر __سترايكرز__**\n\n**نتمنى منك ان تقرأ القوانين لتجنب أي عقوبات**\n\n**لتفعيل نفسك <#475334730770939917>**\n\n**ان واجهتك أي مشاكل يمكنك التكلم مع ادارة السيرفر**`);
});

hero.on('message', message => {
  if(message.content.startsWith(prefix + "برمجة")) {
    var thatRole = message.guild.roles.find('name', '● ʳ مبرمج');
    if(message.member.roles.has(thatRole)) return;
    if(message.content.split(' ')[0] !== prefix + "برمجة") return;
    if(message.guild.id !== '475072613157437445' || message.channel.id !== '475334730770939917') return;

    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setDescription('`مبرمج`, **تم تفعيلك.**');
    message.guild.channels.get('475771827013156884').send(`\`-\` **الرتبة : __مبرمج__\n\`-\`العضو : ${message.author}**`);
    message.channel.send(embed).then(m => {
      setTimeout(() => {
        message.member.removeRole(message.guild.roles.find('name' , '● ʳ غير مفعل')).catch(e => errors++);
        message.member.addRole(thatRole).catch(e => errors++);
        m.delete();
      },5000);
    });

  }
});
hero.on('message', message => {
  var thatRole = message.guild.roles.find('name', '● ʳ قيمر');
  if(message.content.startsWith(prefix + "قيمر")) {
    if(message.member.roles.has(thatRole)) return;
    if(message.content.split(' ')[0] !== prefix + "قيمر") return;
    if(message.guild.id !== '475072613157437445' || message.channel.id !== '475334730770939917') return;

    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setDescription('`قيمر` , **تم تفعيلك .**');
    message.guild.channels.get('475771827013156884').send(`\`-\` **الرتبة : __قيمر__\n\`-\`العضو : ${message.author}**`);
    message.channel.send(embed).then(m => {
      setTimeout(() => {
        message.member.removeRole(message.guild.roles.find('name' , '● ʳ غير مفعل')).catch(e => errors++);;
        message.member.addRole(thatRole).catch(e => errors++);;
        m.delete();
      },5000);
    });

  }
});
hero.on('message', message => {
  var thatRole = message.guild.roles.find('name', '● ʳ عضو');
  if(message.content.startsWith(prefix + "عضو")) {
    if(message.member.roles.has(thatRole)) return;
    if(message.content.split(' ')[0] !== prefix + "عضو") return;
    if(message.guild.id !== '475072613157437445' || message.channel.id !== '475334730770939917') return;

    message.delete();
    var embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setDescription('`عضو` , **تم تفعيلك .**');
    message.guild.channels.get('475771827013156884').send(`\`-\` **الرتبة : __عضو__\n\`-\`العضو : ${message.author}**`);
    message.channel.send(embed).then(m => {
      setTimeout(() => {
        message.member.removeRole(message.guild.roles.find('name' , '● ʳ غير مفعل')).catch(e => errors++);;
        message.member.addRole(thatRole).catch(e => errors++);;
        m.delete();
      },5000);
    });

  }
});
hero.on('message', function(message) {
  if(message.content.startsWith(prefix + "count")) {
    message.channel.send(`**[ **${message.guild.memberCount}** ] أعضاء السيرفر**`).then(m => {
      setTimeout(() => {
        message.delete();
        m.delete();
      },3000);
    });
  }
});

hero.login(process.env.BOT_TOKEN);
