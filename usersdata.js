const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json()
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);   
    }   
}

const foundUsers = async () => {
    const users = await getData();
    users.map(user => {
        const userData = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: user.address.street
        }
        console.log(userData);
    })
}  

foundUsers();

async function getWeather(latitude, longitude) {
    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    const response = await fetch(url);
    const data = await response.json();

    console.log("Weather Data:", data);

    console.log("Temperature:", data.current.temperature_2m);
    console.log("Humidity:", data.current.relative_humidity_2m);
    console.log("Wind Speed:", data.current.wind_speed_10m);
}

getWeather(16.5062, 80.6480); // Vijayawada