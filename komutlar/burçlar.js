module.exports = {
    
    name: 'burçlar',
    aliases: ['burçlar'],
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const config = require('../config.json')

    let button1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('I')
        .setCustomId('boga')

    let button2 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('II')
        .setCustomId('ikizler')

    let button3 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('III')
        .setCustomId('yengec')

    let button4 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IV')
        .setCustomId('aslan')

    let button5 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('V')
        .setCustomId(`basak`)

    let button6 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VI')
        .setCustomId('terazi')


    let button7 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VII')
        .setCustomId('koc')


    let button8 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VIII')
        .setCustomId('akrep')
    
    let button9 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('ⅤⅣ')
        .setCustomId('yay')
    
    let button10 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('ⅤⅤ')
        .setCustomId('oglak')
    
    let button11 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('ⅤⅥ')
        .setCustomId('kova')
    
    let button12 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('ⅤⅤⅡ')
        .setCustomId('balık')
    

    let row = new MessageActionRow()
        .addComponents(button1, button2, button3, button4)
    
    let row2 = new MessageActionRow()
        .addComponents(button5, button6, button7, button8)

     let row3 = new MessageActionRow()
        .addComponents(button9, button10, button11, button12)
    
    message.channel.send({ content:` Merhabalar arkadaşlar, burç rollerinizi seçmek için aşağıdaki butonlardan herhangi birine basabilirsiniz 

    Ⅰ : <@&${config.Roles.boga}>
    Ⅱ : <@&${config.Roles.ikizler}>
    Ⅲ : <@&${config.Roles.yengec}>
    Ⅳ : <@&${config.Roles.aslan}>
    Ⅴ : <@&${config.Roles.basak}>
    Ⅵ : <@&${config.Roles.terazi}>
    Ⅶ : <@&${config.Roles.koc}>
    Ⅷ : <@&${config.Roles.akrep}>
    ⅤⅣ : <@&${config.Roles.yay}>
    ⅤⅤ : <@&${config.Roles.oglak}>
    ⅤⅥ : <@&${config.Roles.kova}>
    ⅤⅤⅡ : <@&${config.Roles.balık}>
    
    
    
    `, components: [row, row2, row3]  }) ;




      }

}
