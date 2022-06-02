module.exports = {
    name: "debt",
    aliases: ["db"],
    description: "Check your debt",
    execute(message, args, cmd, client, discord, profileData){
        message.channel.send(`Your debt is ${profileData.debt}.`);
    },
};