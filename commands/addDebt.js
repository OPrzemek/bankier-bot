const profileModel = require("../models/profileSchema");
module.exports = {
    name: "addDebt",
    aliases: ["adb", "addDB", "addDb"],
    description: "Add debt to your account",
    async execute(message, args, cmd, client, discord, profileData){
        if(!args.length) return message.channel.send("You need to specify the amount!");
        const amount = args[0];
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $inc: {
                    debt: amount,
                },
            });
            return message.channel.send(`${message.author.username}, you added ${amount} to your debt.`);
        } catch (err) {
            console.log(err);
        }
    },
};