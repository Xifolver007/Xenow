const { MessageEmbed, Collection } = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Client({ ws: { intents: Intents.ALL } });
const { token, prefix } = require("./config")
client.login(process.env.TOKEN)
const fs = require("fs");
client.on("ready", () => {
    console.log("Bot logged")
    client.user.setActivity("Etre developper", { type: "PLAYING" })
})
client.commands = new Collection()
const commandfile = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))

for (const file of commandfile) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const startargs = message.content.slice(prefix.length).split(/ +/)
    const command = startargs.shift().toLowerCase()
    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(message)
})





client.on("message", async message => {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let rargs = message.content.substring(message.content.indexOf() + 1);
    if (cmd === `${prefix}help`) {
        message.delete()
        let embed = new MessageEmbed()
            .setTitle("__**Cochez la réaction correspondant à votre recherche.**__")
            .setColor("#FF2052")
            .setTimestamp()
            .setFooter(message.author.tag)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription("📚 | Informations\n\n🚫 | Modération\n\n🔨 | Utilitaires\n\n🎉 | Fun\n\n📺 | Configuration\n\n🎮 | Games\n\n❌ | Fermer la commande")
        let msgembed = await message.channel.send(embed)
        msgembed.react("📚")
        msgembed.react("🚫")
        msgembed.react("🔨")
        msgembed.react("🎉")
        msgembed.react("📺")
        msgembed.react("🎮")
        msgembed.react("💰")
        msgembed.react("❌");

        //informations pricipales
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "📚") {
                reaction.users.remove(user.id)
                embed.setTitle("**📚 | Informations**")
                embed.setDescription("📖 | Présentation\n\n📜 | Équipe\n\n⚙️ | Fonctionnement\n\n💰 | Donateurs\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("📖")
                msgembed.react("📜")
                msgembed.react("⚙️")
                msgembed.react("💰")
                msgembed.react("🏠")
            }
        });
        //Informations - Présentation
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "📖") {
                reaction.users.remove(user.id)
                embed.setTitle("**📖 | Présentation**")
                embed.setDescription("La présentation arrive bientôt.\n\n🔙 | Retour\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("🔙")
                msgembed.react("🏠")
            }
        });
        //Informations - Equipe
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "📜") {
                reaction.users.remove(user.id)
                embed.setTitle("**📜 | Équipe**")
                embed.setDescription("L'équipe de Xenon arrive bientôt.\n\n🔙 | Retour\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("🔙")
                msgembed.react("🏠")
            }
        });
        //Informations - Fonctionnement
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "⚙️") {
                reaction.users.remove(user.id)
                embed.setTitle("**⚙️ | Fonctionnement**")
                embed.setDescription("Le fonctionnement de Xenon arrive bientôt.\n\n🔙 | Retour\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("🔙")
                msgembed.react("🏠")
            }
        });
        //Informations - Donnateurs
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "💰") {
                reaction.users.remove(user.id)
                embed.setTitle("**💰 | Donateurs**")
                embed.setDescription("Le top donateurs ainsi que leurs privilèges arrivent bientôt.\n\n🔙 | Retour\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("🔙")
                msgembed.react("🏠")
            }
        });
        //Informations - Back
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "🔙") {
                reaction.users.remove(user.id)
                embed.setTitle("**📚 | Informations**")
                embed.setDescription("📖 | Présentation\n\n📜 | Équipe\n\n⚙️ | Fonctionnement\n\n💰 | Donateurs\n\n🏠 | Page d'acceuil")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("📖")
                msgembed.react("📜")
                msgembed.react("⚙️")
                msgembed.react("💰")
                msgembed.react("🏠")
            }
        })
        //Alls - Home
        client.on("messageReactionAdd", async (reaction, user, message) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (user.bot) return;
            let msgid = msgembed.id
            if (!reaction.message.guild) return;
            if (reaction.message.id != msgid) return;
            if (reaction.emoji.name === "🏠") {
                reaction.users.remove(user.id)
                embed.setTitle("__**Cochez la réaction correspondant à votre recherche.**__")
                embed.setDescription("📚 | Informations\n\n🚫 | Modération\n\n🔨 | Utilitaires\n\n🎉 | Fun\n\n📺 | Configuration\n\n🎮 | Games\n\n❌ | Fermer la commande")
                await msgembed.edit(embed)
                await msgembed.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
                await msgembed.react("📚")
                msgembed.react("🚫")
                msgembed.react("🔨")
                msgembed.react("🎉")
                msgembed.react("📺")
                msgembed.react("🎮")
                msgembed.react("💰")
                msgembed.react("❌");
            }
        });
    }
})


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content == prefix + "userinfo") {
        const args = message.content.slice(prefix.length).split(/ +/)
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:793785017842008095> En ligne";
                break;
            case "dnd":
                status = "<:dnd:793784996308844614> Ne pas déranger";
                break;
            case "idle":
                status = "<:idle:793785163930664960> Inactif";
                break;
            case "offline":
                status = "<:offline:793785036645859339> Invisible"
                break;

        }
        const embed = new MessageEmbed()
            .setColor("#FF7500")
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL())
            .setTitle(`__**Informations de ${user.user.username}**__`)
            .addFields(
                fields = {
                    name: "Pseudo",
                    value: user.user.username,
                    inline: false
                },
                {
                    name: "Discriminateur",
                    value: user.user.discriminator,
                    inline: false
                },
                {
                    name: "Id",
                    value: user.user.id
                },
                {
                    name: "Mode de statut",
                    value: status
                },
                {
                    name: "Activité",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : "Aucun activité en cours.",
                    inline: false
                },
                {
                    name: "Lien Avatar",
                    value: `[Ici](${user.user.displayAvatarURL()})`
                },
                {
                    name: "Dans le serveur depuis",
                    value: user.joinedAt.toLocaleDateString(locales = "fr-fr"),
                    inline: false
                },
                {
                    name: "Rôles",
                    value: user.roles.cache.map(role => role.toString()).join(", ")
                }
            )
        await message.channel.send(embed)
    }
});


