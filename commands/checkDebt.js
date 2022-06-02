const profileModel = require("../models/profileSchema");
module.exports = {
    name: "checkDebt",
    aliases: ["cdb", "checkDB", "chDB", "checkDb", "chDb"],
    description: "Compare you debt with another user",
    async execute(message, args, cmd, client, discord, profileData){
        if(!args.length) return message.channel.send("You need to mention an user to compare with!");
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("That user does not exist");

        try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if(!targetData) return message.channel.send("This user doesn't exist in the database!");

            const comparison = profileData.debt - targetData.debt;
            if(comparison >= 0) return message.channel.send(`You have ${comparison} debt compared to ${target.username}.`);
            if(comparison < 0) return message.channel.send(`${target.username} has ${Math.abs(comparison)} debt compared to you.`);
        } catch (err) {
            console.log(err);
        }
    },
};