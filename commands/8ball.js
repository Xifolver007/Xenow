const {MessageEmbed} = require("discord.js")
const { prefix } = require("../config")
module.exports = {
    name: "8ball",
    execute(message){
        const args = message.content.slice(prefix.length).split(/ +/)
        if(!args[1]){
            const noargs = new MessageEmbed()
            .setColor("#FF0000")
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            .setFooter(message.author.tag)
            .setTitle("__**Erreur**__")
            .setDescription("Merci d'ajouter un argument après la commande.\n**Usage:** `/8ball question`\n**Exemple:** `/8ball Xenow est le meilleur bot?`")
            message.channel.send(noargs)
        }
        else{
        let replies = ["Oui!", "Non!", "Peut être...", "Sans doute...", "Aucune idée...", "Certainement!", "Certainement pas!", "Surement!", "Surement pas!", "Impossible", "Sur et certain", "Sur a 100%", "Pas du tout", "J'en sais rien moi", "Pourquoi cette question?", "C'est impossible", "Effectivement", "Logiquement oui", "Logiquement non"]
        let result = Math.floor((Math.random() * replies.length))
        message.channel.send(replies[result])
        }
    }
}