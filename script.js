let getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

let width = 400;
let height = 400;
let clickCount = 0;

// создается случайная позиция для клада
// use function getRandomNumber for creating treasure coordinates
let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

$("#map").click(function (event) {
  clickCount++;

  // offsetX и offsetY - хранят x и y координаты клика
  // target.x и target.y - хранят x и y координаты клада
  // diffX - горизонтальное расстояние между кликом и кладом
  // diffY - вертикальное расстояние между кликом и кладом

  let getDistance = function (event, target) {
    // event - тот же самый, что передается обработчику кликов, и в нем содержится информация о событии
    // event хранит в себе offsetX и offsetY

    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);

    // diffX -  длина горизонтальной стороны треугольника,
    // diffY — длина вертикальной стороны.
    // Гипотенуза = diffX и diffY возводится в квадрат и складываются
    // Math.sqrt - извлекает из суммы квадратный корень

    // Math.sqrt((diffX * diffX) + (diffY * diffY))
    // теорема Пифагора - квадратный корень из а и b, длина а и b можно найти длину гипотенузы
  };

  let getDistanceHint = function (distance) {
    if (distance < 10) {
      return "Обожжешься!";
    } else if (distance < 20) {
      return "Очень горячо";
    } else if (distance < 40) {
      return "Горячо";
    } else if (distance < 80) {
      return "Тепло";
    } else if (distance < 160) {
      return "Холодно";
    } else if (distance < 320) {
      return "Очень холодно";
    } else {
      return "Замерзнешь!";
    }
  };

  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);

  if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clickCount);
  }
});
