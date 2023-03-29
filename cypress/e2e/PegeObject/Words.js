class Words {
  //Создание рандомного предложения
  words = [
    "поручение",
    "проект",
    "тест",
    "задача",
    "проверка",
    "распоряжение",
    "сроки",
    "входящие",
    "заявка",
    "договор",
    "исполнить",
    "сделать",
  ];
  getRandomWord(firstLetterToUppercase = false) {
    const word = this.words[this.randomNumber(0, this.words.length - 1)];
    return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
  }

  generateWords(length = 12) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(this.getRandomWord(i === 0));
    }
    return arr.join(" ").trim() + ".";
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

export default Words;
