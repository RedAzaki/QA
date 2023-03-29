class Surnames {
  //Создание рандомного предложения
  surnames = ["Johnson", "Brown", "Walker", "Hall", "White", "Wilson", "Thompson"];
  getRandomSurnames(firstLetterToUppercase = false) {
    const surname =
      this.surnames[this.randomNumber(0, this.surnames.length - 1)];
    return firstLetterToUppercase ? surname.charAt(0).toUpperCase() + surname.slice(1) : surname;
  }

  generateSurnames(length = 7) {
    let arr = [];
    for (let i = 0; i < length; i++) {arr.push(this.getRandomSurnames(i === 0));
    }
    return arr.join(" ").trim();
  }

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

export default Surnames;
