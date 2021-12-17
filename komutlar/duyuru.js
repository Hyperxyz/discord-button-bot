module.exports = {
    
  name: "duyuru", 
  aliases: ["duyuru"],
  çalıştır: async (client, message, args, prefix ) => {

    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🎁')
        .setCustomId('etkinlik')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🎉')
        .setCustomId('cekilis')

   


    let row = new MessageActionRow()
        .addComponents(button1, button2,)
    
  

    message.channel.send({ content:`Sunucumuzda eveyone ve here kullanılmamaktadır, bu yüzden bu rolleri almanızı öneririz.

<@&${config.Roles.cekilis}> :  Sunucumuzda her gün yapılan çekilişlere katılmanızı sağlar

<@&${config.Roles.etkinlik}> : Sunucumuzda her gün yapılan etkinliklere katılmanızı sağlar

Etkinlik Duyuru için : 🎉
Çekiliş Katılımcısı için : 🎁

    `, components: [row]  }) ;




      }

}
