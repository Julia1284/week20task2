const param = {
	"url": "https://api.openweathermap.org/data/2.5/",
	"appid": "eab384f0539c9e08ae58b56c1cf56e41"
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
		.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
	// здесь выводим на страницу
	document.querySelector('.city').textContent = data.name;
	document.querySelector('.weather').textContent = data.weather[0]['description'];
	document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '&deg;';
	document.querySelector('.wind_speed').innerHTML = Math.round(data.wind.speed) + 'м/с';
}

getWeather();
document.querySelector('#city').onchange = getWeather;// при выборе города отправляется запрос на сервер