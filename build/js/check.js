'use strict';

function getMessage(a, b) {

  //Если первый аргумент, a, имеет тип boolean, то:
  if (typeof a === 'boolean') {

    //Если он true,
    if (a === true) {

      //вернуть строку, в которую подставлен параметр b:
      //  "Я попал в [b]"
      return 'Я попал в ' + b;
    }

    //Если он false,
    if (a === false) {

      //вернуть строку:
      //  "Я никуда не попал"
      return 'Я никуда не попал';
    }
  }

  //Если первый аргумент имеет числовой тип,
  if (typeof a === 'number') {

    //то вернуть строку:
    //    "Я прыгнул на [a] * 100 сантиметров"
    return 'Я прыгнул на ' + a * 100 + ' сантиметров';
  }

  // //Если первый аргумент массив,
  // if (a instanceof Array) {
  //
  //   //то вернуть строку:
  //   //    "Я прошёл [numberOfSteps] шагов"
  //   //    где [numberOfSteps] — это сумма значений переданного массива
  //   var numberOfSteps = 0;
  //   for (var i = 0; i < a.length; i++) {
  //     numberOfSteps += a[i];
  //   }
  //   return 'Я прошёл ' + numberOfSteps + ' шагов';
  // }
  //
  // //Если оба аргумента массивы,
  // if (a instanceof Array && b instanceof Array) {
  //
  //   //то вернуть строку:
  //   //    "Я прошёл [distancePath] метров"...
  //   //    где [distancePath] — это сумма произведений соответствующих элементов массивов a и b,
  //   //    cумма произведения первого элемента a с первым элементом b, второго со вторым и так далее
  //   var distancePath = 0;
  //   for (var i = 0; (i < a.length) && (i < b.length); i++) {
  //     distancePath += a[i] *  b[i];
  //   }
  //   return 'Я прошёл ' + distancePath + ' метров';
  // }

  //Если первый аргумент массив,
  var aArray;
  if (a instanceof Array) {
    aArray = 'true';
  }

  if (aArray) {

    //то вернуть строку:
    //    "Я прошёл [numberOfSteps] шагов"
    //    где [numberOfSteps] — это сумма значений переданного массива
    var numberOfSteps = 0;
    for (var i = 0; i < a.length; i++) {
      numberOfSteps += a[i];
    }
    return 'Я прошёл ' + numberOfSteps + ' шагов';
  }

  //Если оба аргумента массивы,
  var bArray;
  if (b instanceof Array) {
    bArray = 'true';
  }

  if (aArray && bArray) {

    //то вернуть строку:
    //    "Я прошёл [distancePath] метров"...
    //    где [distancePath] — это сумма произведений соответствующих элементов массивов a и b,
    //    cумма произведения первого элемента a с первым элементом b, второго со вторым и так далее
    var distancePath = 0;
    for (var i = 0; (i < a.length) && (i < b.length); i++) {
      distancePath += a[i] *  b[i];
    }
    return 'Я прошёл ' + distancePath + ' метров';
  }
}
