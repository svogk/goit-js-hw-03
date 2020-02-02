console.log('Задание 3');

const findBestEmployee = function(employees) {

  const keys = Object.keys(employees);
  console.log(keys);
  const values = Object.values(employees);
  console.log(values);

  let nameBestEmployee = keys[0];
  let biggestValue = values[0];

  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > biggestValue) {
      biggestValue = values[i];
      nameBestEmployee = keys[i];
    }
  }

  return `Самый продуктивный сотрудник - ${nameBestEmployee}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
