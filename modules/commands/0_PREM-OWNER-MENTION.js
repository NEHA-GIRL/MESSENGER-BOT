module.exports.config = {
  name: "ADMIN",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM-BABU",
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  commandCategory: "ADMIN MENTION",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61563040551757") {
];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["अरे यार मुझसे बात करो एडमिन को क्यूं बुला रहे हो 🙄", "किया हुआ मेरे एडमिन को क्यूं बुला रहे हो", "मेरे एडमिन शायद बीजी है", "अरे यार क्यूं मेरे एडमिन को तंग कर रहे हो", "मेरा एडमिन अभी सो रहे होगे", "लगता है मेरा एडमिन बाबू सोना करने में बीजी है 🤔", "किया काम है मुझे बताओ मैं एडमिन को बता दूंगा", "मेरे एडमिन शायद अभी ऑफ लाइन है" , "मेरे एडमिन अभी बीजी है 😐✌️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
