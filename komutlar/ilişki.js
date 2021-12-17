module.exports = {
    
  name: "ilişki", 
  aliases: ["ilişki"],
  çalıştır: async (client, message, args, prefix ) => {
    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('❤️')
        .setCustomId('Lovers')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('💔')
        .setCustomId('Alone')

    let button3 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('💙')
        .setCustomId('LGBT')

    let button4 = new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('🖤')
        .setCustomId('anyone')


    let row = new MessageActionRow()
        .addComponents(button1, button2, button3, button4, )
    
  

    message.channel.send({ content:`Merhabalar arkadaşlar, ilişki rolünüzü seçmek için aşağıdaki emojilerden herhangi birine basabilirsiniz.

    ❤️ : \`Lovers\`
    💔 : \`Alone\`
    💙 : \`LGBT\`
    🖤 : \`I do not need anyone\``, components: [row]  }) ;




      }

}
