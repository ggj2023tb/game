const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9000 });
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const questions = [
    {
        "question": "Roots grow down instead of up because?",
        "answer": "option_0",
        "option_0": "Of gravity-sensing cells in their root cap.",
        "option_1": "They have meristems, and the stems do not.",
        "option_2": "They are repelled by air.",
        "option_3": "All of the answers"
    },
    {
        "question": "The tip of the root is called?",
        "answer": "option_1",
        "option_0": "Meristem",
        "option_1": "Root cap",
        "option_2": "Vascular cylinder",
        "option_3": "Root hairs"
    },
    {
        "question": "What is square root of 121?",
        "answer": "option_1",
        "option_0": "9",
        "option_1": "11",
        "option_2": "13",
        "option_3": "16"
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
        "option_1": "AI",
        "option_2": "Fear of falling behind",
        "option_3": "Obsession with convenience"
    },
    {
        "question": "What is the root cause of natural disasters?",
        "answer": "option_2",
        "option_0": "Human activities",
        "option_1": "Climate change and environmental degradation",
        "option_2": "Natural geological processes",
        "option_3": "Lack of preparedness and response"
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
      let roomId = Date.now();
      rooms.push({
        id: roomId,
        name: obj.name,
        status: "open",
        players: [],
        questions: [],
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
        let i = 0;
        let startDate = Date.now();
        questionList = new Array();
        questions.sort((a, b) => 0.5 - Math.random()).every(function (question, index) {
            if (i > 7) {
                return false;
            }
            questionList.push({
                startDate: startDate,
                endDate: startDate + 20000,
                question: question,
            });
            startDate += 20000;
            i++;
            return true;
        });

        getRoom(rooms, obj.roomId).questions = questionList;
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
              }
              ws.send(JSON.stringify({ type: "feedback", question: question.question }));
            }
          });
        }
      });
    }
  });
});
