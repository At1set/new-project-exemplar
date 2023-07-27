import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp()

//Меню-бургер
import "./modules/burger-menu.js"

//Динамическое адаптирование
flsFunctions.DynamicAdapt()

//Слайдер
//import "./modules/swiper.js"

//Включение спойлеров
if (flsFunctions.isMobile.any()) {
  flsFunctions.spollers()
}

//Основной js файл
import "./modules/script.js"