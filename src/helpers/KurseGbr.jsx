import { useState, useEffect } from "react";

const KurseGbr = () => {
  const [exchangeRate, setExchangeRate] = useState(null);

  //  выполняется запрос к API для получения данных о курсе валюты GBP. Полученное значение округляется до целого числа и устанавливается в состояние `exchangeRate`
  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((data) => {
        const rate = data.Valute.GBP.Value; // получаем курс валюты "GBP"
        const roundedRate = Math.round(rate); // округляем курс до целого числа
        setExchangeRate(roundedRate); // устанавливаем значение в стейт
      })
      .catch((error) => console.error(error));
  }, []);

  return exchangeRate;
};

export default KurseGbr;
