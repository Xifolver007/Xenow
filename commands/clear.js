const { MessageEmbed } = require("discord.js")
const { prefix } = require("../config")
module.exports = {
    name: "clear",
    execute(message) {
        const args = message.content.slice(prefix.length).split(/ +/)
        const noperms = new MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp()
            .setTitle("__**Erreur**__")
            .setFooter(message.author.tag)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription("Vous ne possédez pas les permissions requises a l'usage de cette commande.\n**Permissions requises:** `MANAGE_MESSAGES`/`ADMINISTRATOR`")
        const noargs = new MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp()
            .setTitle("__**Erreur**__")
            .setFooter(message.author.tag)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription("Merci d'ajouter un argument après la commande.\n**Usage:** `/clear message`\n**Exemple:** `/clear 5`")
        const nonb = new MessageEmbed()
            .setColor("#FF0000")
            .setTimestamp()
            .setTitle("__**Erreur**__")
            .setFooter(message.author.tag)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription("Merci de préciser un nombre entre **1** et **99**.\n**Usage:** `/clear message`\n**Exemple:** `/clear 5`")
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(noperms)
        }
        else {
            if (!args[1]) {
                message.channel.send(noperms)
            }
            else {
                if (parseInt(args[1]) >= 100) {
                    message.channel.send(nonb)
                }
                else {

                    if (parseInt(args[1]) <= 1) {
                        message.channel.send(nonb)
                    }
                    else {

                        message.channel.bulkDelete(args[1])
                        message.channel.send(`${args[1]} messages ont été suprimée`).then(m => {
                            m.delete(5000)
                        })
                    }
                }
            }
        }
    }
}