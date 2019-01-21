'use strict';

const games = [
  { id: 'game-1', title: 'Total War' },
  { id: 'game-2', title: 'Metro' },
  { id: 'game-3', title: 'Witcher' },
  { id: 'game-4', title: 'Warhammer' },
  { id: 'game-5', title: 'Company of Heroes' },
  { id: 'game-6', title: 'Baldurs Gate' },
  { id: 'game-7', title: 'Dragon Age' },
];

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// Array.map
{
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
}

// Array.filter
{
  const onlinePlayers = players.filter(player => player.online);
  console.table(onlinePlayers);

  const hardcorePlayers = players.filter(player => player.timePlayed >= 200);
  console.log(hardcorePlayers);
}

// Array.find
{
  const findPlayerById = (allPlayers, playerId) =>
    allPlayers.find(player => player.id === playerId);

  const player = findPlayerById(players, 'player-3');
  console.log(player);
}

// Array.every и Array.some
{
  const isAllOnline = players.every(player => player.online);
  console.log('isAllOnline: ', isAllOnline);

  const isAnyOnline = players.some(player => player.online);
  console.log('isAnyOnline: ', isAnyOnline);
}

// Chaining
{
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
}
