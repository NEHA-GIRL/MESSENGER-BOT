module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MADE BY PREM BABU",
  commandCategory: "BOT-PREFIX",
  usages: "PREFIX",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "PREM BABU") { return api.sendMessage(`PREM-BABU-BOT-CREATER 🙂`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`┏━━━━━┓\n     नेहा ठाकुर                    ✧═══•❁[ ${prefix} ]❁•═══✧\n┗━━━━━┛\n\n[ 1 ]   𒁍 बोट का एडमिन    →    🌺 नेहा ठाकुर 🌺\n[ 2 ]   𒁍 बोट का नाम    →    🌺 चिंटू ठाकुर 🌺\n[ 3 ]   𒁍 बोट का प्री फिक्स    →   🌺 > ${prefix} < 🌺\n[ 4 ]   𒁍 FOLLOW MY OWNER FB LINK→ [ https://www.facebook.com/profile.php?id=61563040551757 ]\n[ 5 ]   𒁍 ❁`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("मेरी जान ये कमांड नो प्री फिक्स है। सिर्फ प्री फिक्स लिखो 🙂✌️", event.threadID)
}
