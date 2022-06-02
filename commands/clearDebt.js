const profileModel = require("../models/profileSchema");
module.exports = {
    name: "clearDebt",
    aliases: ["cldb", "clDB", "clDb"],
    description: "Clear debt of your account",
    async execute(message, args, cmd, client, discord, profileData){
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $set: {
                    debt: 0,
                },
            });
            return message.channel.send(`${message.author.username}, you cleared your debt.`);
        } catch (err) {
            console.log(err);
        }
    },
};