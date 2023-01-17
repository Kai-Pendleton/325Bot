require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const token = process.env.TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
	console.log('Logged in as ' + client.user.tag +'!');
});

client.on('messageCreate', (msg) => {
	if (msg.content.toLowerCase() === 'ping') {
		msg.reply('Pong!')
	}
});

// Log our bot in using the token from dev portal
client.login(token);
