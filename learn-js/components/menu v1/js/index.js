var menu = new Menu({
    title: "Сладости",
    items: [
        "Торт",
        "Пончик",
        "Пирожное",
        "Шоколадка",
        "Мороженое"
    ]
});
  
  // получить сгенерированный DOM-элемент меню
  var elem = menu.getElem();
  menu.getElem();
  
  // вставить меню в нужное место страницы
  document.body.appendChild(elem);