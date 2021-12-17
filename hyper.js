const { Client, Intents , Collection, MessageActionRow, MessageSelectMenu} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const fs = require("fs");
const config = require("./config.json");
const moment = require("moment")
const { boga, ikizler, yengec, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık } = config.Roles;
const { Token, Durum } = config.Bot

moment.locale("tr");
const penalPoints = require('./schemas/penalPoints');
const penals = require('./schemas/penals.js')
const registers = require('./schemas/registers.js');


require('./handlers/functions.js')(client);
require('./handlers/mongoHandler.js');
require('./handlers/eventHandler.js');


const prefix = config.Bot.Prefix;

client.komutlar = new Collection(); 
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./events/komut`)(client);
}); 

client.on('ready', () => {
  console.log(`${client.user.tag} isimli bot aktif!`);
});

client.on("messageCreate", async message => {
  
  

  if (message.author.bot) return; 
  if (!message.guild) return; 

  if (!message.content.startsWith(prefix)) return; 

  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase(); 

  if (cmd.length === 0) return; 

  var command = client.komutlar.get(cmd); 
  if (!command) command = client.komutlar.get(client.aliases.get(cmd));


  if (command) 
  {
    try {
      command.çalıştır(client, message, args, message.author, args.join(" "), prefix)
    } catch (error) {
      console.log(error)
    }
  } else 
  return 
    
});




   

client.on('ready', () => {
  client.user.setActivity(Durum)
  client.user.setStatus(`PLAYING`)
}); 
 

 client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isButton()) {


    if(interaction.customId === 'boga') {
                let member = interaction.member

        
      if(member.roles.cache.has(config.Roles.boga)) {
        await member.roles.remove(config.Roles.boga);
        await interaction.reply({ content: `<@&${config.Roles.boga}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.boga);
        await interaction.reply({ content: `<@&${config.Roles.boga}> üzerinize verildi`, ephemeral: true });
        if([ikizler, yengec, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [ikizler, yengec, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});};  
        
      }; 
    };
  
  if(interaction.customId === "ikizler") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.ikizler)) {
        await member.roles.remove(config.Roles.ikizler);
        await interaction.reply({ content: `<@&${config.Roles.ikizler}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.ikizler);
        await interaction.reply({ content: `<@&${config.Roles.ikizler}> üzerinize verildi`, ephemeral: true });
      if([boga, yengec, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, yengec, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});};  
      
      
      
      };
    
    
    };
  
  
    if(interaction.customId === 'yengec') {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.yengec)) {
        await member.roles.remove(config.Roles.yengec);
        await interaction.reply({ content: `<@&${config.Roles.yengec}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.yengec);
        await interaction.reply({ content: `<@&${config.Roles.yengec}> üzerinize verildi`, ephemeral: true });
      if([boga,ikizler, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, aslan, basak, terazi, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});};  
      
      
      }; 
    };
    
  if(interaction.customId === "aslan") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.aslan)) {
        await member.roles.remove(config.Roles.aslan);
        await interaction.reply({ content: `<@&${config.Roles.aslan}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.aslan);
        await interaction.reply({ content: `<@&${config.Roles.aslan}> üzerinize verildi`, ephemeral: true });
      if([boga,ikizler, yengec, basak, terazi, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, terazi, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      
      };
    };
  
      
       
    if(interaction.customId === 'basak') {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.basak)) {
        await member.roles.remove(config.Roles.basak);
        await interaction.reply({ content: `<@&${config.Roles.basak}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.basak);
        await interaction.reply({ content: `<@&${config.Roles.basak}> üzerinize verildi`, ephemeral: true });
      if([boga,ikizler, yengec, aslan, terazi, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, aslan, terazi, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      }; 
    };
        
  if(interaction.customId === "terazi") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.terazi)) {
        await member.roles.remove(config.Roles.terazi);
        await interaction.reply({ content: `<@&${config.Roles.terazi}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.terazi);
        await interaction.reply({ content: `<@&${config.Roles.terazi}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, koc, akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, koc, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      };
    };
  
     
    if(interaction.customId === 'koc') {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.koc)) {
        await member.roles.remove(config.Roles.koc);
        await interaction.reply({ content: `<@&${config.Roles.koc}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.koc);
        await interaction.reply({ content: `<@&${config.Roles.koc}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi,  akrep, yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, akrep, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      }; 
    };
  
  if(interaction.customId === "akrep") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.akrep)) {
        await member.roles.remove(config.Roles.akrep);
        await interaction.reply({ content: `<@&${config.Roles.akrep}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.akrep);
        await interaction.reply({ content: `<@&${config.Roles.akrep}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi, koc,  yay, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, koc, yay, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      };
    };
  
      if(interaction.customId === "yay") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.yay)) {
        await member.roles.remove(config.Roles.yay);
        await interaction.reply({ content: `<@&${config.Roles.yay}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.yay);
        await interaction.reply({ content: `<@&${config.Roles.yay}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi, koc, akrep, oglak, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, koc, akrep, oglak, kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      };
    };
    
      if(interaction.customId === "oglak") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.oglak)) {
        await member.roles.remove(config.Roles.oglak);
        await interaction.reply({ content: `<@&${config.Roles.oglak}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.oglak);
        await interaction.reply({ content: `<@&${config.Roles.oglak}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi, koc, akrep, yay, kova, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, koc, akrep, yay,kova, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      };
    };
  
      if(interaction.customId === "kova") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.kova)) {
        await member.roles.remove(config.Roles.kova);
        await interaction.reply({ content: `<@&${config.Roles.kova}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.kova);
        await interaction.reply({ content: `<@&${config.Roles.kova}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi, koc, akrep, yay, oglak, balık].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, koc, akrep, yay, oglak, balık].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      };
    };
  
        if(interaction.customId === "balık") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.balık)) {
        await member.roles.remove(config.Roles.balık);
        await interaction.reply({ content: `<@&${config.Roles.balık}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.balık);
        await interaction.reply({ content: `<@&${config.Roles.balık}> üzerinize verildi`, ephemeral: true });
       if([boga,ikizler, yengec,basak, aslan, terazi, koc, akrep, yay, oglak, kova].some(x => member.roles.cache.get(x))) {
       [boga, ikizler, yengec, basak, aslan, terazi, koc, akrep, yay, oglak, kova].filter(x => member.roles.cache.get(x)).forEach(async x => {
    await member.roles.remove(x);});}; 
      
      };
    };
    
  if(interaction.customId === "Lovers") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.Lovers)) {
        await member.roles.remove(config.Roles.Lovers);
        await interaction.reply({ content: `<@&${config.Roles.Lovers}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.Lovers);
        await interaction.reply({ content: `<@&${config.Roles.Lovers}> üzerinize verildi`, ephemeral: true });
      };
    };
  
  
  if(interaction.customId === "Alone") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.Alone)) {
        await member.roles.remove(config.Roles.Alone);
        await interaction.reply({ content: `<@&${config.Roles.Alone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.Alone);
        await interaction.reply({ content: `<@&${config.Roles.Alone}> üzerinize verildi`, ephemeral: true });
      };
    };
  
if(interaction.customId === "LGBT") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.LGBT)) {
        await member.roles.remove(config.Roles.LGBT);
        await interaction.reply({ content: `<@&${config.Roles.LGBT}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.LGBT);
        await interaction.reply({ content: `<@&${config.Roles.LGBT}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   if(interaction.customId === "anyone") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.anyone)) {
        await member.roles.remove(config.Roles.anyone);
        await interaction.reply({ content: `<@&${config.Roles.anyone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.anyone);
        await interaction.reply({ content: `<@&${config.Roles.anyone}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   
     if(interaction.customId === "etkinlik") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.etkinlik)) {
        await member.roles.remove(config.Roles.etkinlik);
        await interaction.reply({ content: `<@&${config.Roles.etkinlik}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.etkinlik);
        await interaction.reply({ content: `<@&${config.Roles.etkinlik}> üzerinize verildi`, ephemeral: true });
      };
    };
    
    
    if(interaction.customId === "cekilis") {
      let member = interaction.member
      if(member.roles.cache.has(config.Roles.cekilis)) {
        await member.roles.remove(config.Roles.cekilis);
        await interaction.reply({ content: `<@&${config.Roles.cekilis}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(config.Roles.cekilis);
        await interaction.reply({ content: `<@&${config.Roles.cekilis}> üzerinize verildi`, ephemeral: true });
      };
    };
  
}})

client.login(Token).then(() => console.log('[BOT] Connection Started')).catch(() => {
	console.log('[BOT] Failed To Start Connection, Trying Again');
	process.exit();
});
