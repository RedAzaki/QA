    class Data {
    TodayDate() {

        const now = new Date() 
        let date = `${(now.getDate() < 10 ? '0' : '')+(now.getDate())}.${((now.getMonth() + 1) < 10 ? '0' : '')+(now.getMonth() + 1)}.${now.getFullYear()}`
        return date;
    };
    
    YesDate() {  //Вчерашняя дата
    
        const now = new Date() 
        let date = `${(now.getDate() < 10 ? '0' : '')+(now.getDate()-1)}.${((now.getMonth() + 1) < 10 ? '0' : '')+(now.getMonth() + 1)}.${now.getFullYear()}`
        return date;
    };
      
    TomDate() {  //Завтрашняя дата в формате дд.мм.гггг(01.01.2023)
    
        const now = new Date() 
        let date = `${(now.getDate() < 10 ? '0' : '')+(now.getDate()+1)}.${((now.getMonth() + 1) < 10 ? '0' : '')+(now.getMonth() + 1)}.${now.getFullYear()}`
        return date;
    };

}
export default Data 


