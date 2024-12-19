/* Задание 1:
Напишите функцию fetchWithRetry(url, retries), которая делает асинхронный запрос на указанный URL. Если запрос завершился с ошибкой,
функция повторяет его до заданного количества раз (retries).​
P.S.: Обработайте ошибки в случае если произошла ошибка.​
Пример:​
fetchWithRetry("https://api.example.com/data", 3)​
  .then(console.log)​
  .catch(console.error);
Результат:
/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/



async function fetchWithRetry(url, retries) {
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка со статусом: ${response.status}`);
            }
            return await response.json(); 
        } catch (error) {
            if (i === retries) {
                throw new Error(`Не удалось выполнить запрос после ${retries} попыток: ${error.message}`);
            }
            console.warn(`Попытка ${i + 1} не удалась: ${error.message}. Повторяем запрос...`);
        }
    }
}

fetchWithRetry("https://api.example.com/data", 3)
    .then(console.log)
    .catch(console.error);