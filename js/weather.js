const API_KEY = "d5915b422c3c7ded28ebf03840a54444";

// user에 위치를 알 수 있다 
function onGeoOk(positition){
    const lat = positition.coords.latitude ;  // 위도 
    const lon = positition.coords.longitude; // 경도 
    console.log("u live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response=> response.json())
        .then(data=>{
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText =  data.name;
            weather.innerText = `Weather: ${data.weather[0].main}  | 🏠`;
    });
        
    //fetch를 사용하면 js가 url을 가져온다, 안에 있는 정보들을 가져오나봄
    //url 내에 화씨 온도를 섭씨로 바꾸고 싶어서 api사이트에서 찾아서 url뒤에 추가함 
    // fetch > f12 > Network > Preview
    console.log(url);
}

function onGeoError(){
    alert("can't find u, No Weather for u.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//getCurrent...2 개의 인자가 필요하며 하나는 실행할 함수 두번쨰는 에러가 났을 때 실행될 함수