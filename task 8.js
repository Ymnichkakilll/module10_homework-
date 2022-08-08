let myMap = new Map();
myMap.set("Возраст" , "many years");
myMap.set('Фамилия' , 'Шишов');
myMap.set('Имя' , 'Иван');

for (let name of myMap.keys()){
    console.log(`ключ - ${name} , значение - ${myMap.get(name)}`);
}