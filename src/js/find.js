const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const findPlayerById = (allPlayers, playerId) =>
  allPlayers.find(player => player.id === playerId);

const player = findPlayerById(players, 'player-3');
console.log(player);
