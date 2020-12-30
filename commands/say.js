const {MessageEmbed} = require("discord.js")
const { prefix } = require("../config")
module.exports = {
    name: "say",
    execute(message){
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
        .setDescription("Merci d'ajouter un argument après la commande.\n**Usage:** `/say message`\n**Exemple:** `/say hello`")
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.send(noperms)
        }
        else{
        const args = message.content.slice(prefix.length).split(/ +/)
        if(!args[1]){
            message.channel.send(noargs)
        }
        message.delete()
        message.channel.send(args.slice(1).join(" "))
    }
    }
}