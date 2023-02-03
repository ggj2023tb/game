const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9000 });
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}
const questions = [
    {
        "question": "Which of the following is not a greenhouse gas?",
        "answer": "option_3",
        "option_0": "methane",
        "option_1": "nitrous oxide",
        "option_2": "Sulfur Hexa Fluoride",
        "option_3": "carbon monoxide"
    },
    {
        "question": "Biological indicator of pollution of sulfur dioxide is?",
        "answer": "option_0",
        "option_0": "moss",
        "option_1": "smoke",
        "option_2": "Braophyta",
        "option_3": "None of these"
    },
    {
        "question": "Which one is the richest area of Biodiversity?",
        "answer": "option_2",
        "option_0": "black forest",
        "option_1": "Sahara",
        "option_2": "Tropical rainforest",
        "option_3": "Amazon"
    },
    {
        "question": "What is the main source of CFC gas?",
        "answer": "option_1",
        "option_0": "N02",
        "option_1": "cfc(Chlorofluorocarbon)",
        "option_2": "Methane",
        "option_3": "carbon monoxide"
    },
    {
        "question": "Which chemical is responsible for Acid rain?",
        "answer": "option_2",
        "option_0": "CO2",
        "option_1": "CFC(Chlorofluorocarbon)",
        "option_2": "SO2 & NO2",
        "option_3": "carbon monoxide"
    },
    {
        "question": "Which River is called Coal carrying river?",
        "answer": "option_1",
        "option_0": "Nile",
        "option_1": "Rhine River",
        "option_2": "Amazon"
    },
    {
        "question": "International Biodiversity Day is celebrated on?",
        "answer": "option_3",
        "option_0": "1 June",
        "option_1": "22 December",
        "option_2": "21 March",
        "option_3": "22 May"
    },
    {
        "question": "What was the first theme of Environment Day?",
        "answer": "option_2",
        "option_0": "One world",
        "option_1": "Go Greeen",
        "option_2": "Only one Earth"
    },
    {
        "question": "Which gas absorbs Ultraviolet rays in the Atmosphere?",
        "answer": "option_1",
        "option_0": "SO2",
        "option_1": "Ozone",
        "option_2": "NO2",
        "option_3": "Stratosphere"
    },
    {
        "question": "The gas which has a major role in the Greenhouse Effect is?",
        "answer": "option_2",
        "option_0": "Chlorine",
        "option_1": "carbon monoxide",
        "option_2": "Carbon dioxide",
        "option_3": "NO2"
    },
    {
        "question": "The use of microorganism metabolism to remove pollutants such as oil spills in the water bodies is known as",
        "answer": "option_1",
        "option_0": "Biomagnification",
        "option_1": "Bioremediation",
        "option_2": "Bioreduction",
        "option_3": "Biomethanation"
    },
    {
        "question": "Which one of the following trees is considered to be an environmental hazard?",
        "answer": "option_0",
        "option_0": "Eucalyptus",
        "option_1": "Nymphel",
        "option_2": "Cucumis sativus",
        "option_3": "Gossypium herbaceum"
    },
    {
        "question": "Solar radiation plays the most important role in the",
        "answer": "option_2",
        "option_0": "Nitrogen Cycle",
        "option_1": "Carbon Cycle",
        "option_2": "Water cycle.",
        "option_3": "Air Cycle"
    },
    {
        "question": "What is the root cause of the increasing cases of chronic diseases?",
        "answer": "option_3",
        "option_0": "Lack of sleep",
        "option_1": "Excessive use of technology",
        "option_2": "Poor hygiene",
        "option_3": "Unhealthy lifestyle choices"
    },
    {
        "question": "What is the root cause of the disparities in educational outcomes among students?",
        "answer": "option_3",
        "option_0": "Poor teaching methods",
        "option_1": "Inadequate funding for education",
        "option_2": "Unmotivated students",
        "option_3": "Inequities in the education system"
    },
    {
        "question": "What is the root cause of the current environmental crisis?",
        "answer": "option_0",
        "option_0": "Human activities and industrialization",
        "option_1": "Natural disasters",
        "option_2": "Poor waste management practices",
        "option_3": "Inefficient use of energy"
    },
    {
        "question": "What is the root cause of the high crime rates in certain communities?",
        "answer": "option_2",
        "option_0": "Lack of police presence",
        "option_1": "Availability of firearms",
        "option_2": "Socioeconomic disadvantage",
        "option_3": "Ineffective justice system"
    },
    {
        "question": "What is the root cause of the rapid advancement in technology and its impact on society?",
        "answer": "option_0",
        "option_0": "Investment in research and development",
        "option_2": "Fear of falling behind",
        "option_3": "Obsession with convenience"
    }
];

let rooms = [];

function updateGame(ws, roomId) {
    ws.send(JSON.stringify({"roomId": roomId, "data": rooms[roomId]));
}

wss.on('connection', function connection(ws) {
    ws.on('message', function (msg) {
        obj = JSON.parse(msg);

        if (obj.type == 'createGame') {
            let players = new Array();
            let roomId = Date.now();
            players[obj.playerId] = {"points": 0};
            rooms[roomId] = {
                "name": obj.name,
                "players": players
            }

            updateGame(ws, roomId);
        } else if (obj.type == 'joinGame') {
            rooms[obj.roomId].players[obj.playerId] = {
                points: 0
            }

            console.log(rooms);
        } else if (obj.type == 'updateGame') {
        }

        if (obj.type == 'sendQuestion') {
            question = questions.random();
            ws.send(JSON.stringify({ "roomId": "123", "type": "question", "msg": question.question, "options": [question.option_0, question.option_1, question.option_2, question.option_3] }));
        }
    });
});

