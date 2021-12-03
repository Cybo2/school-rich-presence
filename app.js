const ws = require("ws");
const discordrpc = require("discord-rpc");

const wss = new ws.Server({port: 6821});
const rpc = new discordrpc.Client({transport: "ipc"});

rpc.on("ready", () => {
    wss.on("connection", (socket) => {
        socket.on("message", (message) => {
            message = JSON.parse(message.toString());
    
            switch(message.command) {
                case "set-presence": {
                    const options = {
                        startTimestamp: message.data.startTimestamp || new Date(),
                    };
                    for (name in message.data) {
                        options[name] = message.data[name];
                    };
                    rpc.setActivity(options);
                    break;
                }
            }
        });
    });
});

rpc.login({clientId: "916091155299590184"});
