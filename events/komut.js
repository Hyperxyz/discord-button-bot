const { readdirSync } = require("fs"); 

module.exports = (client) => {
        const commands = readdirSync(`./komutlar/`).filter(file => file.endsWith(".js")); 
        for (let file of commands) { 
            let command = require(`../komutlar/${file}`); 
            if (command.name) { 
                client.komutlar.set(command.name, command); 
             console.log(`[COMMAND] ${command.name} Loaded!`);
                continue; 
            }
        }
}
