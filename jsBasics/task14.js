// 1.Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// 2. У функції треба поділити numerator на denominator і повернути результат.
// 3. Додайте валідацію в функції. У разі, якщо denominator дорівнює 0 або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням.
// 4. Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// 5. Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.


try {
    function divide (numerator, denominator) {
        if (typeof numerator !== 'number' || typeof denominator !== 'number' || denominator === 0) {
            throw new Error("Invalid input: numerator and denominator must be numbers, and denominator cannot be zero.");
        }
        console.log(numerator / denominator);
    }
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
    console.log("Work completed");
}

divide(10, 2); // Valid case
// divide(10, 0); // Invalid case: denominator is zero
divide(10, 'a'); // Invalid case: denominator is not a number
// divide('a', 3); // Invalid case: numerator is not a number
