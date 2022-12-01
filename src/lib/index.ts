export const shuffle = (array: Array<any>) => {
  const copiedArray = [...array];
  let currentIndex = copiedArray.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [copiedArray[currentIndex], copiedArray[randomIndex]] = [
        copiedArray[randomIndex], copiedArray[currentIndex]];
  }

  return copiedArray;
}
