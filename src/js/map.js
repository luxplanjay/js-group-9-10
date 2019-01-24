const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const getPlayerNames = allPlayers => allPlayers.map(player => player.name);

const playerNames = getPlayerNames(players);
console.table(playerNames);

const updatePlayerById = (allPlayers, playerId, hours) => {
  return allPlayers.map(player => {
    if (player.id === playerId) {
      return {
        ...player,
        timePlayed: player.timePlayed + hours,
      };
    }
    return player;
  });
};

const udpatedPlayers = updatePlayerById(players, 'player-2', 200);
console.table(udpatedPlayers);
