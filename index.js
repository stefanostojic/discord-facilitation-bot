const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    console.log(msg);
  }
});

client.login('Nzk4MTM4MzcxMDQxMDAxNDgz.X_wqSA.YE1oSHsH_yL-9gbBC4dijerid-s');

