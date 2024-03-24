const DateSum = () => {
  // Получаем текущую дату
  const currentDate = new Date();
  
  // Преобразуем дату в строку формата "дд.мм.гггг"
  const dateString = currentDate.toLocaleDateString('ru-RU');
  
  // Удаляем точки из строки и преобразуем ее в массив цифр
  const digitsArray = dateString.replace(/\./g, '').split('').map(Number);
  
  // Считаем сумму цифр в массиве
  const sum = digitsArray.reduce((acc, curr) => acc + curr, 0);
  
  return (sum);
};

export default DateSum;