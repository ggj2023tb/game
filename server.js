const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9000 });
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
/*
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
*/
/*
const questions = [
  {
    question: "1+2",
    answer: "option_0",
    option_0: "3",
    option_1: "2",
    option_2: "1",
    option_3: "4",
  },
  {
    question: "3+4",
    answer: "option_0",
    option_0: "7",
    option_1: "8",
    option_2: "9",
    option_3: "10",
  },
  {
    question: "1*3",
    answer: "option_0",
    option_0: "3",
    option_1: "1",
    option_2: "5",
    option_3: "10",
  },
];
*/
const questions = [
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
   "option_1": "AI",
   "option_2": "Fear of falling behind",
   "option_3": "Obsession with convenience"
  },
  {
   "question": "hat is the root cause of natural disasters?",
   "answer": "option_2",
   "option_0": "Human activities",
   "option_1": "Climate change and environmental degradation",
   "option_2": "Natural geological processes",
   "option_3": "Lack of preparedness and response"
  },
  {
   "question": "What is the smallest country in the world?",
   "answer": "option_0",
   "option_0": "Vatican City",
   "option_1": "San Marino",
   "option_2": "Tuvalu",
   "option_3": "Palau"
  },
  {
   "question": "What is the largest big cat in the world?",
   "answer": "option_2",
   "option_0": "Lion",
   "option_1": "Cat",
   "option_2": "Tiger",
   "option_3": "Panther"
  },
  {
   "question": "How many legs does an octopus have?",
   "answer": "option_1",
   "option_0": "7",
   "option_1": "8",
   "option_2": "9",
   "option_3": "10"
  },
  {
   "question": "What is the slowest animal in the world?",
   "answer": "option_0",
   "option_0": "sloth",
   "option_1": "snake",
   "option_2": "lemur",
   "option_3": "koala"
  },
  {
   "question": "In which country would you find the Leaning Tower of Pisa?",
   "answer": "option_1",
   "option_0": "Spain",
   "option_1": "Italy",
   "option_2": "Peru",
   "option_3": "Poland"
  },
  {
   "question": "Largest animal in the world?",
   "answer": "option_2",
   "option_0": "Elephant",
   "option_1": "Giraf",
   "option_2": "Blue Whale",
   "option_3": "Camel"
  },
  {
   "question": "which is the worlds longest river?",
   "answer": "option_0",
   "option_0": "Nile River",
   "option_1": "Amazon River",
   "option_2": "Thames River",
   "option_3": "Danube River"
  },
  {
   "question": "Which country has the most number of lakes.",
   "answer": "option_1",
   "option_0": "Russia",
   "option_1": "Canada",
   "option_2": "USA",
   "option_3": "Finland"
  },
  {
   "question": "Which one is the largest tropical rain forest in the world.",
   "answer": "option_0",
   "option_0": "Amazon",
   "option_1": "South East Asian Rain Forest",
   "option_2": "Bosawas",
   "option_3": "Daintree Rain Forest"
  },
  {
   "question": "Total number of continents in the world is",
   "answer": "option_1",
   "option_0": 6,
   "option_1": 7,
   "option_2": 5,
   "option_3": 8
  },
  {
   "question": "Which one is the largest ocean in the World.",
   "answer": "option_0",
   "option_0": "Pacific",
   "option_1": "Atlantic",
   "option_2": "Arctic",
   "option_3": "North Atlantic"
  },
  {
   "question": "Which country has the highest number of Time Zones ?",
   "answer": "option_1",
   "option_0": "Italy",
   "option_1": "France",
   "option_2": "China",
   "option_3": "Canada"
  },
 ];


let rooms = [];

function getRoom(rooms, requestId) {
  const findRoom = rooms.find(function (room) {
    return room.id == requestId;
  });
  return findRoom;
}

wss.on("connection", function connection(ws) {
  ws.on("message", function (msg) {
    obj = JSON.parse(msg);

    if (obj.type == "createGame") {
      let startDate = Date.now();
      let roomId = Date.now();

      questionList = new Array();
      questions.forEach(function (question, index) {
        questionList.push({
          startDate: startDate,
          endDate: startDate + 20000,
          question: question,
        });
        startDate += 20000;
      });
      rooms.push({
        id: roomId,
        name: obj.name,
        status: "open",
        players: [],
        questions: questionList,
      });

      ws.send(JSON.stringify({ type: "createGame", roomId: roomId }));
    } else if (obj.type == "joinRoom") {
      let playerId = Date.now();
      getRoom(rooms, obj.roomId).players.push({
        points: 0,
        id: playerId,
        name: obj.playerName,
      });
      ws.send(
        JSON.stringify({
          type: "joinRoom",
          playerId: playerId,
          roomId: obj.roomId,
        })
      );
    } else if (obj.type == "startGame") {
      getRoom(rooms, obj.roomId).status = "running";
    } else if (obj.type == "updateGame") {
      ws.send(
        JSON.stringify({ type: "updateGame", room: getRoom(rooms, obj.roomId) })
      );
    } else if (obj.type == "getRooms") {
      ws.send(JSON.stringify({ type: "getRooms", rooms: rooms }));
    } else if (obj.type == "awnser") {
      getRoom(rooms, obj.roomId).questions.forEach(function (question, index) {
        if (question.question.question == obj.question) {
          getRoom(rooms, obj.roomId).players.forEach(function (
            player,
            playerIndex
          ) {
            if (player.id == obj.playerId) {
              if (obj.answer == question.question.answer) {
                getRoom(rooms, obj.roomId).players[playerIndex].points++;
              } else {
                //rooms[obj.roomId].players[playerIndex].points--;
              }
            }
          });
        }
      });
    }
  });
});
