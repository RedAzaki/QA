import Data from '../PegeObject/Data'
import Auth from '../PegeObject/autorization'

//auth1 - Селедкин
//auth2 - Ромашкин
//auth3 - Печенькина

describe("Chek filter all incomming", () => {
     
  const auth = new Auth()
  const data = new Data() 
 

  //Создание рандомного предложения
  const words = ["поручение", "проект", "тест", "задача", "проверка", "распоряжение", "сроки", "входящие", "заявка",
   "договор", "исполнить", "сделать"];
  function getRandomWord(firstLetterToUppercase = false) {
    const word = words[randomNumber(0, words.length - 1)];
    return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }

    function generateWords(length = 10) {
	return [...Array(length)].map((_, i) => getRandomWord(i === 0)).join(' ').trim() + '.';
    }

    function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
    }



    //Переменные для ввода:
    let type1 = "Подзадача"   
    let type2 = "Предложение"     
    let type3 = "Голосование"  
    let otFace = "ечен"    //Ответственный исполнитель   
    let ds = "01.11.2022"  // Дата регистрации начало
    let de = "30.12.2023"  // Дата регистрации конец
    let NoIsh = "1"     //№ исходящего
    let corr = "ака"    //Корреспондент
    let status = "сполнено"    //Статус
    let soisp = "ечен"  //Соисполнители
    let syst = "ист"   //Система
    let podSyst = "сис"    //Подсистема
     
    
  it("Проверка фильтра все входящие", () => {
    
    auth.auth();      //Авторизация в системе
    cy.wait(3000)

    // Открыть меню
    cy.get('div[class="mat-mdc-tooltip-trigger sidebar-toggler not-active"]').click({timeout: 3000}); 
    cy.get('.link-display-name-parent').contains('Мой кабинет').click();
    cy.get('div[class="mat-mdc-tooltip-trigger sidebar-toggler active"]').click();
    cy.wait(2000)
    cy.get('.tile-name').contains('Все задачи').click();
    cy.get('.selectedTile').should('be.visible');
    cy.wait(2000) 
    cy.get('tr').contains('Принято').then(($confirm) => {  //выбирает только один единственный вариант, первый которой найдет.
        console.log($confirm.length)

      //  for(let i = 0; i < $confirm.length; i++){
            cy.get('tr').contains('Принято').eq(0).click(); 
        //}
    })

    cy.get('i[class="fas fa-tasks fa-2x"]').click();
    /*cy.get('.cdk-drag-handle mat-mdc-dialog-title mdc-dialog__title module-back').contains('Добавить задачу');
    cy.get('mat-icon[mattooltipposition="right"]').contains('add').click();
    cy.get('.branch-name').contains('ООО "Зеленоглазое такси"').click();
    cy.get('#MainTableGrid').within(()=>{
        cy.get('tr').contains(`${soisp}`).dblclick({force: true});
    })*/
    cy.get('input[formcontrolname="dateEnd"]').type(`${data.TodayDate()}`);
    cy.get('input[formcontrolname="text"]').type(`${generateWords(2)}`);
    cy.get('div[data-placeholder="Insert text here ..."]').type(`${generateWords(5)}`);/*

    //Добавление attach
    cy.get('button').contains('Файлы').click();
    cy.get('input[type=file]').eq(0).selectFile('attach/attach.jpg', {force: true});

    cy.get('button').contains('Сохранить').click();
    cy.get('button').contains('Да').click();

    cy.get('tr').contains(`${randomText}`).dblclick();

    //Проверки после создания задачи
   cy.get('.req-item.status').contains('Создано').should('be.visible');
   cy.get('.task-type').contains(`${type1}`).should('be.visible');
   cy.get('.req-item').eq(3).contains(`${otFace}`).should('be.visible');
   cy.get('.card-result-theme').contains(`${randomText}`).should('be.visible');
   cy.get('.ng-star-inserted').contains(`${randomText}`).should('be.visible');
   cy.get('.req-item').eq(1).contains('07.01.2023'); // Добавить автоматическую подстановку сегодняшней даты в указанном элементе строка.
   cy.get('button').contains('Отменить').should('be.visible');
   cy.get('button').contains('Не сделано').should('be.visible');*/
    
    
  })
})