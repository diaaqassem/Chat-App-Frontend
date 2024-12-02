import { io } from "socket.io-client";

const socket = io("https://asfour.diaaqassem.com:3001/", {
  transports: ["websocket"],
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// const socket = io("http://localhost:5001", {
//   transports: ["websocket"],
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

export default socket;
