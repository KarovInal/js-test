/*
    Напишите конструктор User для создания объектов:
        С приватными свойствами имя firstName и фамилия surname.
        С сеттерами для этих свойств.
        С геттером getFullName(), который возвращает полное имя.
*/

function User () {
    var _firstName, _surname;

    this.setFirstName = function(firstName) {
        _firstName = firstName;
    }

    this.setSurname = function(surname) {
        _surname = surname;
    }

    this.getFullName = function() {
        return(`${_firstName} ${_surname}`);
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log(user.getFullName());