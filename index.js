const { Client } = require('klasa')
const ping = require('./ping.js')

const client = new Client({
  fetchAllMembers: false,
  prefix: '..',
  commandEditing: true,
  typing: true,
  providers: { default: 'min' },
  owners: ['697377187808149564', '662207542486630401'],
  readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.cache.size} guilds.`,
  presence: { activity: { name: '..help || devilowl.js.org', type: 'WATCHING' } }
})

ping()
client.login(process.env.TOKEN)