const greetingWithWeather = (name, weather) => { 
    if (!name || !weather) {
        console.log("xin chao");
        return;  
    }
    if (weather == "sunny") {
        console.log(`Chào ${name}! Hôm nay trời nắng tuyệt vời!\n`);
    } else if (weather == "rainy") {
        console.log(`Chào ${name}! Hôm nay trời mưa, hay mang theo ô!\n`);
    } else {
        console.log(`Chào ${name}! Hôm nay thời tiết không xác định!\n`);
    }
}

greetingWithWeather("Nguyễn An", "sunny");//Chào Nguyễn An! Hôm nay trời nắng tuyệt vời!
greetingWithWeather("Lê Nam","rainy");//Chào Lê Nam! Hôm nay trời mưa, hay mang theo ô!
greetingWithWeather("Trần Tâm","cloudy");//Chào Trần Tâm! Hôm nay thời tiết không xác định!

