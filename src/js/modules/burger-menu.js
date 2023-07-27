if (document.querySelector(".menu-burger")) {
  if (document.querySelector(".menu-burger") && getComputedStyle(document.querySelector(".menu-burger")).height !== '0px') {
    let menu_burger = document.querySelector(".menu-burger")
    let header_menu = document.querySelector(".header__menu")
    let body = document.querySelector("body")
    body.addEventListener("click", (e) => removeMenu(e))

    function removeMenu(e) {
      if (
        !e.target.closest(".header__menu") &&
        !e.target.closest(".menu-burger")
      ) {
        menu_burger.classList.remove("_active");
        header_menu.classList.remove("_active");
        body.classList.remove("_lock");
        body.classList.add("_unlock");
        // body.removeEventListener("click", (e) => removeMenu(e))
      }
    }
    //Вспомогательная переменная
    let init = true
    // Для второй анимации
    let posY1 = 0
    let posY2 = 0
    let middleSpanDuration = 0
    menu_burger.addEventListener("click", () => {
      function toggleClasses() {

        // !header_menu.classList.contains("_active")
        //   ? body.addEventListener("click", (e) => removeMenu(e))
        //   : body.removeEventListener("click", (e) => removeMenu(e))
        
        body.classList.contains("_unlock")
          ? (body.classList.remove("_unlock"), body.classList.add("_lock"))
          : (body.classList.remove("_lock"), body.classList.add("_unlock"))
        // menu_burger.classList.toggle("_active")
        header_menu.classList.toggle("_active")
      }
      //=======================================Burger-Anymation=======================================//
      // let menu_burger__lines = menu_burger.querySelectorAll("span")
      // let menu_burger__variables = getComputedStyle(menu_burger)
      // let duration =
      //   menu_burger__variables
      //     .getPropertyValue("--duration")
      //     .trim()
      //     .replace(/s/g, "") * 1000
      // let anym_side = 2
      // if (init) {
      //   // Вычисляем transition-delay для среднего спана
      //   middleSpanDuration = +menu_burger__variables.getPropertyValue("--duration").replace(/s/g, '') - 0.2

      //   // Вычисляем положение (в px) верхнего и нижнего span по центру
      //   if (menu_burger.classList.contains("_active")) {
      //     let line = menu_burger.querySelector("span")
      //     posY1 = getComputedStyle(line)
      //       .getPropertyValue("transform")
      //       .trim()
      //       .replace(/[matrix\(\) ]/g, "")
      //       .split(",")
      //     posY1 = posY1[5]
      //     posY2 = -posY1
      //     init = false
      //   }
      // }
      // // Анимация в крестик (если нужно добавить обратную анимацию для возвращ. в нач. положение, то изменить переменную anym_side на 2)
      // menu_burger__lines.forEach((line, i) => {
      //   // console.log(getComputedStyle(line).getPropertyValue("transform"))
      //   // Первый span
      //   if (i == 0) {
      //     if (menu_burger__variables.getPropertyValue("--deg1") == 0) {
      //       setTimeout(() => {
      //         menu_burger.style.setProperty("--deg1", "45deg")
      //       }, duration)
      //     } else {
      //       menu_burger.style.setProperty("--deg1", "0")
      //       if (anym_side === 2) {
      //         menu_burger.style.setProperty("--translateYMiddlePos1", posY1 + 'px')
      //         setTimeout(() => {
      //           menu_burger.style.setProperty("--translateYMiddlePos1", 0)
      //         }, duration);
      //       }
      //     }
      //     // Средний span
      //   } else if (i == 1) {
      //     if (menu_burger__variables.getPropertyValue("--delay") !== "0") {
      //       menu_burger.style.setProperty("--delay", "0")
      //     } else {
      //       menu_burger.style.setProperty("--delay", middleSpanDuration + 's')
      //     }
      //     // Нижний span
      //   } else {
      //     if (menu_burger__variables.getPropertyValue("--deg2") == 0) {
      //       setTimeout(() => {
      //         menu_burger.style.setProperty("--deg2", "-45deg")
      //       }, duration)
      //     } else {
      //       menu_burger.style.setProperty("--deg2", "0")
      //       if (anym_side === 2) {
      //         menu_burger.style.setProperty("--translateYMiddlePos2", posY2 + "px")
      //         setTimeout(() => {
      //           menu_burger.style.setProperty("--translateYMiddlePos2", '0')
      //         }, duration);
      //       }
      //     }
      //   }
      // })
      //=======================================Burger-Anymation=======================================//
      toggleClasses()
    })
  }
}

