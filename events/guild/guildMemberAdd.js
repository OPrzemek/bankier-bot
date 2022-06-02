const profileModel = require("../../models/profileSchema");

module.exports = async(client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        debt: 0,
    });
    profile.save();
};