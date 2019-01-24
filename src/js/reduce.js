{
  // const numbers = [1, 2, 3, 4, 5];
  // // 1. number = 1, accumulator = 0 -> 1
  // // 2. number = 2, accumulator = 1 -> 3
  // // 3. number = 3, accumulator = 3 -> 6
  // // 4. number = 4, accumulator = 6 -> 10
  // // 5. number = 5, accumulator = 10 -> 15
  // const sum = numbers.reduce((total, number) => {
  //   total += number;
  //   return total;
  // }, 0);
}

{
  // const players = [
  //   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  //   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  //   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  //   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  //   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
  // ];
  // // const totalTimePlayed = players.reduce((totalHours, player) => {
  // //   return totalHours + player.timePlayed;
  // // }, 0);
  // const totalTimePlayed = players.reduce(
  //   (totalHours, player) => totalHours + player.timePlayed,
  //   0,
  // );
  // console.log(totalTimePlayed);
}

{
  // const tweets = [
  //   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  //   { id: '001', likes: 2, tags: ['html', 'css'] },
  //   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  //   { id: '003', likes: 8, tags: ['css', 'react'] },
  //   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  // ];
  // const allTags = tweets.reduce((acc, tweet) => {
  //   acc.push(...tweet.tags);
  //   return acc;
  // }, []);
  // console.table(allTags);
  // const logger = obj => {
  //   console.group('keys');
  //   Object.entries(obj).forEach(([key, value]) =>
  //     console.log(`${key}: ${value}`),
  //   );
  //   console.groupEnd('keys');
  // };
  // const tagStats = allTags.reduce((acc, tag) => {
  //   logger(acc);
  //   if (acc.hasOwnProperty(tag)) {
  //     acc[tag] += 1;
  //     return acc;
  //   }
  //   acc[tag] = 1;
  //   return acc;
  // }, {});
  // console.log(tagStats);
}
