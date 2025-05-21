const myName = "Дени";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Максим";
const reasonText = "Работа будующего";
const numberOfMonth = "Первый месяц"; 

let text = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал
${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до
конца!`;

console.log(text); 

let text2 = text.replaceAll (`JavaScript`, `${programmingLanguage.toUpperCase()}`);

console.log(text2); 