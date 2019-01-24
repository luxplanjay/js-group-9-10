const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);
// const playerNames = onlinePlayers.map(player => player.name);
// console.table(playerNames);

const onlinePlayerNames = players
  .filter(player => player.online)
  .map(player => player.name);

console.table(onlinePlayerNames);

// ======================================================
// const numbers = [1, 2, 3, 4, 5];
// const greaterThenThree = numbers.filter(number => number > 3);
// console.table(greaterThenThree);
// const doubled = greaterThenThree.map(number => number * 2);
// console.table(doubled);
// const doubled = numbers
//   .filter(number => number > 3)
//   .map(number => number * 2);
// console.table(doubled);
