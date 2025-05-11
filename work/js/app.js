document.getElementById("get-weather").addEventListener("click", function () {
    const cityCode = document.getElementById("city-select").value;
    
    if (!cityCode) {
        alert("都市を選択してください");
        return;
    }
  
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${cityCode}.json`;
  
    fetch(url).then(function (response) {
        if (!response.ok) {
            throw new Error("データの取得に失敗しました");
        }
        return response.json();
      
    })
  
    .then(function (weather) {
        let area = weather[0].timeSeries[0].areas[0];
        let tempsArea = weather[1].tempAverage.areas[0];
  
        document.getElementById("publishingOffice").querySelector("td").textContent = weather[0].publishingOffice;
        document.getElementById("reportDatetime").querySelector("td").textContent = weather[0].reportDatetime;
        document.getElementById("targetArea").querySelector("td").textContent = area.area.name;
        document.getElementById("today").querySelector("td").textContent = area.weathers[0];
        document.getElementById("tomorrow").querySelector("td").textContent = area.weathers[1];
        document.getElementById("dayAfterTomorrow").querySelector("td").textContent = area.weathers[2];
        document.getElementById("todayHighTemperature").querySelector("td").textContent = tempsArea.max + "℃";
        document.getElementById("todayLowTemperature").querySelector("td").textContent = tempsArea.min + "℃";
    })
    .catch(function (error) { alert(error.message); });
});