const API_KEY ="dac3c638b243866b7b24164d899fd03b";
const cidade ="Sao Miguel do Tapuio";
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`)

.then(response => response.json())
.then(data =>{
    const previsaoDiv = document.getElementByld("previsao");
    previsaoDiv.innerHTML ="";

    for(let i=0; i < 32; i += 8){
        const item = data.list[i];
        const dataClima = new Date(item.dt_txt);
        const temperatura = item.main.temp;
        const descricao = item.weather[0].description;
        const chuva = item.pop * 100;

        previsaoDiv.innerHTML +=`
        <div class="previsao-item">
        <h3>${dataClima.toLocaleDateString()}</h3>
        <p>🌡️${temperatura.toFixed(1)}°C</p>
        <p>☁️${descricao}</p>
        <p>🌧️${chuva.toFixed(0)}%</p>
        </div>
        `;
    }
});