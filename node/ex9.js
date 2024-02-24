const luckyDraw = (player) => {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
};

const executeDrow = () => {
    const players = ["Joe", "Caroline", "Sabrina"];
    players.forEach(async (player) => {
        try {
          const result = await luckyDraw(player);
          console.log(result);
        } catch (error) {
          console.log(error.message);
        }
      });
}

executeDrow();
