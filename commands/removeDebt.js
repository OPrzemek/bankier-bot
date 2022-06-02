const profileModel = require("../models/profileSchema");
module.exports = {
    name: "removeDebt",
    aliases: ["rdb", "removeDB", "remDB", "removeDb", "remDb"],
    description: "Remove debt from your account",
    async execute(message, args, cmd, client, discord, profileData){
        if(!args.length) return message.channel.send("You need to specify the amount!");
        const amount = args[0];
        try {
            if(amount > profileData.debt) return message.channel.send(`You can't remove more from debt than you have.`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $inc: {
                    debt: -amount,
                },
            });
            return message.channel.send(`${message.author.username}, you removed ${amount} from your debt.`);
        } catch (err) {
            console.log(err);
        }
    },
};