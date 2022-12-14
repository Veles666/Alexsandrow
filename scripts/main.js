/*
 *  Информация о государствах мира
 */
var about=["Государство", "Столица", "Континент", "Часть света",  "Разница во времени",  
           "Денежная единица",  "Географические объекты",  "Литературные произведения",
		   "Исторические события"];
	   
var countries=[["Италия", "Рим", "Евразия", "Европа", -2, "итальянская лира",
["Альпы", "Пальмария", "Апеннинский полуостров", "Комо", "Тальяменто"],
[["Джованни Верга", "Жизнь среди полей", 1880], ["Анна Виванти", "Цирцея", 1912], ["Джузеппе Понтиджа", "Рождённые дважды", 2000]],
{ "1882": "избирательная реформа", "1945": "антифашистское восстание, 18-28 апреля" }
],
[["Эндр", "Пиренеи", "Луара", "Альпы", "Бискайский залив"],
"Франция", -1, "Париж", "Евразия", "Европа", "евро",
[["Александр Дюма", "Граф Монте-Кристо", 1845], ["Жюль Габриэль Верн", "Завещание чудака", 1900], ["Луи Анри Буссенар", "Капитан Сорви-голова", 2001], ["Морис Самюэль Роже Шарль Дрюон", "Тисту — мальчик с зелеными пальцами", 1957]],
{ "1572": "Варфоломеевская ночь", "1648": "Вестфальский мир", "1914": "Марнское сражение, 5-12 сентября" }
],
[[["Иоханна Спири", "Хайди: годы странствий и учёбы", 1880], ["Герман Гессе", "Игра в бисер", 1942], ["Макс Фриш", "Homo Фабер", 1957], ["Мелинда Надь Абонджи", "Голуби взлетают", 2010]],
"Швейцария", "отсутствует", "Евразия", "Европа", -1, "Швейцарский франк",
["Бильское озеро", "Рейхенбахский водопад", "Альпы", "Алечский ледник"],
{ "1291": "основание Швейцарии", "1844": "начало работы первой железнодорожной линией" }
],
["Венгрия", "Будапешт", "Евразия", "Европа", -1, ["Геллерт", "Карпаты", "Веленце", "Мезёфёльд"],
"Венгерский форинт",
[["Янош Бачаньи", "Мужество венгров", 1785], ["Аттила Бартиш", "Спокойствие", 2001], ["Ийеш Дьюла", "Двое мужчин", 1950]],
{ "1222": "подписание Эндре II «Золотой буллы»", "1867": "Коронование Франца-Иосифа в Будапеште по старым обычаям, 8 июня" }
],
["Румыния", "Бухарест", "Евразия", "Европа", "Румынский лей",
["Олт", "Трансильванское плато", "Карпаты", "Медвежья пещера", "Бабеле"], 0,
{ "1881": "Румыния была провозглашена королевством", "1990": "первые свободные президентские и парламентские выборы", "2004": "Румыния стала членом НАТО" },
[["Михаил Садовяну", "Золотая ветвь", 1933], ["Мирча Элиаде", "Изабель и воды дьявола", 1930]]
],
["Япония", "Токио", "Евразия", "Азия",
["Фудзияма", "Сакурадзима", "Абукума"],
[["Сюсаку Эндо", "Море и яд", 1958], ["Юдзо Ямамото", "Профессор Цумура", 1919], ["Марико Хасиока", "Аут", 1997]],
{ "1872": " отменена сложного и строгого сословного деления", "1904": "японский флот атаковал русскую эскадру в Порт-Артуре", "1941": "атака на Пёрл-Харбор" },
6, "японская иена"
],
[1.5, "Афганистан", "Кабул", "Евразия", "Азия", "афгани",
[["Гуль Пача Ульфат", "Голос сердца", 1962], ["Абдуррауф Бенава", "Горестные размышления", 1957], ["Махмуд-бек Тарзи", "Путешествия через три континента за 29 дней", 1914]],
{ "1973": "провозглашение Республики, 17 июля", "2004": "новая Конституция и проведены первые президентские выборы" },
["Намакзар", "Дашти-Марго", "Фарахруд", "Гиндукуш"]
],
[{ "1857": "Восстание Сипаев", "1617": "Британская Ост-Индская компания получила право торговать с Индией", "1948": "Операция «Поло»", "1986": "архитектурное наследие Хампи включено в список Всемирного наследия" },
"Индия", "Нью-Дели", "Евразия", "Азия", 2.5, "Индийская рупия",
["Ганг", "Гуру-Сикар", "Дудхсагар", "Цо-Морари", "Деканские траппы"],
[["Арундати Рой", "Бог мелочей", 1997], ["Хушвант Сингх", "Поезд в Пакистан", 1956]]
],
["Бразилия", "Бразилиа", "Южная Америка", "Америка", -6, "риал",
["Тапажос", "Пантанал", "пампа", "Сейшас", "Параноа"],
[["Лима Баррето", "Жалкий конец Поликарпо Кваресма", 1911], ["Эрику Верисиму", "Происшествие в Антаресе", 1971], ["Шику Буарки", "Будапешт ", 2003], ["Жоаким Мануэл ди Маседу", "Смуглянка", 1844]],
{ "1888": "Золотой закон об отмене рабства в Бразилии, 13 мая", "1935": "вооружённое выступление бразильских коммунистов и тенентистов" }
],
[["Фанди", "Подкова", "Элсмир", "Невольничье озеро", "Оттава"],
[["Филип Майкл Ондатже", "Английский пациент", 1992], ["Маргарет Этвуд", "Up In The Tree", 1978]],
"Канада", "Оттава", "Северная Америка", "Америка", -7, "канадский доллар",
{ "1608": "основание города Квебек", "1838": "Битва за ветряную мельницу", "1867": "Канада получила право формировать собственное правительство" }
],
["Аргентина", "Буэнос-Айрес", "Южная Америка", "Америка", -6, "аргентинское песо",
[["Хорхе Луис Борхес", "Фунес памятливый", 1942]],
["Охос-дель-Саладо", "Огненная земля", "Пампа", "Лагунас-де-Гуанакаче"],
{ "1912": "закон о всеобщем избирательном праве", "1871": "Завоевание пустыни", "1810": "Аргентинская война за независимость" }
],
[["Кристобаль-Колон", "Магдалена", "Каука", "Анды", "Льянос"],
[["Рафаэль Помбо", "Флибустьеры", 1856], ["Хосе Эустасио Ривера", "Вихрь", 1924], ["Лаура Рестрепо", "Леопард на солнце", 1993]],
"Колумбия", "Богота", "Южная Америка", "Америка", -8, "колумбийское песо",
{ "1916": "обнаружены богатейшие запасы нефти", "1549": "образование королевской аудиенсии и канцелярии Санта-Фе де Боготы", "1886": "принята консервативная конституция" }
],
["Англия", "Лондон", "", "", -3, "фунт стерлингов",
["Тис", "Белые клифы Дувра", "Саут-Даунс", "Скофелл-Пайк"],
{ "1701": "Акт о престолонаследии", "1455": "начало войны Алой и Белой розы", "1215": "Великая хартия вольностей" },
[["Майн Рида", "Огненная земля", 1883], ["Уильям Шекспир", "Ромео и Джульетта", 1595], ["Оскар Уайльд", "Портрет Дориана Грея", 1891], ["Джонатан Свифт", "Путешествия в некоторые удалённые страны мира в четырёх частях: сочинение Лемюэля Гулливера, сначала хирурга, а затем капитана нескольких кораблей", 1726]]
],
["Мексика", "Мехико", "Южная Америка", "Америка", -9, "мексиканское песо",
{ "1810": "Мексиканская война за независимость", "1536": "открытие коллегиума Санта-Крус де Тлателолько", "2006": "Революция кактусов" },
["Попокатепетль", "Калифорния", "Эль-Вискаино", "Сонора", "Чапала", "Гуадалупе", "Пещера Ласточек"],
[["Октавио Пас", "Salamandra", 1962], ["Амадо Нерво", "Недвижная возлюбленная", 1922], ["Карлос Фуэнтес", "Смерть Артемио Круса", 1962], ["Хуан Рульфо", "Педро Парамо", 1955]]
]
];
// Функция, формирующая массив таблиц (стран)... 
// Проходим по каждому элементу исходного массива
let obj1 = {
    countries_object:  JSON.parse(JSON.stringify(countries)), // Для копирования значений
    outCountries: function () {
        // document.getElementById('countriesOut').innerHTML = "";
    function makeTableFromCountry(country) {
    let result = new Array(); // Конечный результат
    result[about[2]] = new Array(); // Страны, континент, часть света, разница во времени и т.д. // result - переменная, [2] -индекс массива about
    result[about[6]] = new Array(); // Географические объекты
    result[about[7]] = new Array(); // Литературные произведения
    result[about[8]] = new Array(); // Исторические события 

    function swe(text) { return "<em>" + text + "</em>"; } 
    

    country.forEach(elem => {    // Стрелочная функция
        if (elem === null) return;

        // Идет проверка типа нашего элемента
        if (typeof elem === "object") {
            if (Array.isArray(elem)) {
                // Литературные произведения
                if (Array.isArray(elem[0])) { 
                    elem.forEach(function(e) {
                        result[about[7]].push(e[0] + " «" + e[1] + "» (" + e[2] + ")");
                    });
                }
                // Географические объекты
                else {
                    elem.forEach(function(e) {
                        result[about[6]].push(e)
                    });
                }
            }
            else {
                // Исторические события
                let keys = Object.keys(elem);
                for (let i = 0; i < keys.length; i++) {  // ключевое слово length показывает сколько символов
                    result[about[8]].push("<p>" + keys[i] + " - " + elem[keys[i]] + "</p>");
                }
            }
        }
        else {
            if (typeof elem === "number") result[about[2]].unshift(elem); // Вставляем наше число вперед
            else result[about[2]].push(elem);
        }
    });
    

    // Создаем таблицу
    table = "<table width=100%>";
    {
        function createT(v1, v2) { return "<tr><td width=50%>" + swe(v1) + "</td><td>" + v2 + "</td></tr>"; } // Для упрощения создания таблицы
        function outArrayData(arr) {
            let r = "";
            arr.forEach(function(e, index) { r += "<li>&#101" + (22 + index) + "; " + e + "</li>" });
            return r;
        }

        // Заголовок, где result[about[2]][1] - страна1
        {
            table += "<tr>";
            table += "<td><h1>" + result[about[2]][1] + " - " + result[about[2]][2] + "</h1></tr>";
            table += "</tr>";
        }
        // Континент, часть света и 
        {
            table += "<table width=75% style=\"margin-left: auto; margin-right: auto;\">";
            table += createT(about[2], result[about[2]][3]);
            table += createT(about[3], result[about[2]][4]);
            table += createT(about[4], result[about[2]][0]); 
            table += createT(about[5], result[about[2]][5]);
            table += "</table><br><hr>";
        }
        // Географические объекты
        {
        
            table += "<table width=75% style=\"margin-left: auto; margin-right: auto;\">";
            table += "<tr>";
            table += createT(about[6] + ":", outArrayData(result[about[6]]));
            table += "</tr>";
            table += "</table><br><hr>";
        }
        // Литературные произведения
        {
            table += "<table width=75% style=\"margin-left: auto; margin-right: auto;\">";
            table += "<tr>";
            table += createT(about[7]+ ":", outArrayData(result[about[7]]));
            table += "</tr>";
            table += "</table><br><hr>";
        }
        // Исторические события
        {
            table += "<p style=\"text-align: center;\">" + "<strong>" + about[8] + "</strong>" + "</p>";
            table += "<table width=90% colspan=\"" + result[about[8]].length + "\" style=\"margin-left: auto; margin-right: auto; border:3px solid black;\">";
            table += "<tr>";
            for (let i = 0; i < result[about[8]].length; i++) {
                table += "<td style=\"border:1px solid black; padding: 3px;\">" + result[about[8]][i] + "</td>";
            }
            table += "</tr>";
            table += "</table><br><hr>";
        }

        table += "</table>";
    }
    return table; // Возвращаем нашу строку
}

// Выводим все на нашу страницу
let result =this.countries_object.map(makeTableFromCountry);
result.forEach(function(table) {
    document.body.innerHTML += table + "<br>";
});
    }
}

function Changes(){
    this.countries_object = JSON.parse(JSON.stringify(countries));
    this.changeCountries = (data) => {
        this.countries_object.forEach(country => {
            country.forEach(elem => {
                if (typeof elem === "object" && Array.isArray(elem) && !Array.isArray(elem[0])){
									let arr = new Array();
									if (elem.length < data) {
										arr.push(elem);
									}
									document.getElementById('pokazateli').append(arr);
                };   
            });
        });
    };                                                                                                                                                                       
};


let obj2 = new Changes();

function TimerBl(date_end){
let ret = document.getElementById("timmer");

if(ret != null){
    ret.innerHTML = "";
    let today = Date.now();
    let remaining = date_end - today;
    
    let days = Math.trunc(remaining/1000/60/60/24);
    remaining = remaining - days*1000*60*60*24;

    let hours = Math.trunc(remaining/1000/60/60);
    remaining = remaining - hours*1000*60*60;

    let minutes = Math.trunc(remaining/1000/60);
    remaining = remaining - minutes*1000*60;

    let seconds = Math.trunc(remaining/1000);
    remaining = remaining - seconds*1000;

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    let str='До конца учебного года осталось';
        ret.innerHTML += str+ ' ' + days + ' дней ' + hours + ' часов ' + minutes + ' минут ' + seconds + ' секунд ';
}
}

setTimeout(() => { TimerBl( new Date("June 30 2023 00:00:00")) });
setInterval(() => { TimerBl( new Date("June 30 2023 00:00:00")) }, 1000);



// Выводим информацию obj1 с помощью метода outCountries;
obj1.outCountries();

// Выводим информацию obj2 с помощью метода outCountries объекта obj1;
// call(this)
obj1.outCountries.apply(obj2);

// Меняем данные obj1.countries с помощью метода changeCountries объекта obj2;


// Вывод изменений в браузере с помощью метода outCountries объекта obj1;
