module.exports = {
    name: 'ping',
    aliases: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, discord, profileData){
        console.log("Autorem wiadomosci $ping jest " + message.author.username);
        message.channel.send('pong!');
    },
};