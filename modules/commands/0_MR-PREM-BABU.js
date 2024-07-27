module.exports.config = {
  name: "neha",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "PREM BABU IMAGE",
  usages: "PREM-BABU",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/a/K7BEEPs",];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     नेहा  ठाकुर                   ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\nदेख लो मेरे एडमिन नेहा ठाकुर को सबसे अलग मासूम चेहरा भोली सी सूरत ♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
