// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Driver code for Celsius to Fahrenheit conversion
const inputCelsius = 25;
const convertedFahrenheit = celsiusToFahrenheit(inputCelsius);
console.log(`${inputCelsius}°C is equal to ${convertedFahrenheit}°F`);

// Driver code for Fahrenheit to Celsius conversion
const inputFahrenheit = 77;
const convertedCelsius = fahrenheitToCelsius(inputFahrenheit);
console.log(`${inputFahrenheit}°F is equal to ${convertedCelsius.toFixed(2)}°C`);