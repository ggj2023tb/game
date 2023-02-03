const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function (msg) {
        obj = JSON.parse(msg);

        if (obj.type == 'startGame') {
            for (let i=0; i<4; i++) {
                ws.send(JSON.stringify({ "type": "addPlayer" }));
            }
        }

        if (obj.type == 'sendQuestion') {
            ws.send(JSON.stringify({ "roomId": "123", "type": "question", "msg": "what is 1+1", "options": ["3", "4", "5", "2"] }));
        }
    });
});

