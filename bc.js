const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on("message", message => {

            if (message.content.startsWith(prefix + "Tk")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Mohammed`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Mohammed ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+Tk | Team Kabos`,"https://www.instagram.com/kaaboos2011/")
client.user.setStatus("dnd")
});



client.login("NTA3NTYzNTE4MzIxNzU0MTEy.DryhPw.jaKcJp4RF0Nx42DL7RA0kX1cIMg");