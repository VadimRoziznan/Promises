import GameSavingLoader from "./class/GameSavingLoader.js";


GameSavingLoader.load().then((saving) => {
    console.log(saving); // объект класса GameSaving
  }, (error) => {
    console.error(error);
  });