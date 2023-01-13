class Names{

//Создание рандомного предложения
names = ["Aaron", "Archer", "Ben", "Jack", "Jenny", "Deborah", "David"];
getRandomNames(firstLetterToUppercase = false) {
 const name = this.names[this.randomNumber(0, this.names.length - 1)];
 return firstLetterToUppercase ? name.charAt(0).toUpperCase() + name.slice(1) : name;
 }

 generateNames(length = 7) {
    let arr = []
    for (let i = 0; i < length; i++) {
      arr.push(this.getRandomNames(i === 0))
    }
    return arr.join(' ').trim();
      }
 /*generateWords(length = 10) {
 return [...Array(length)].map((_, i) => getRandomWord(i === 0)).join(' ').trim() + '.';
 }*/

randomNumber(min, max) {
 return Math.round(Math.random() * (max - min) + min);
 }

}

export default Names