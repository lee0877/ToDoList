const images = ['0.png', '1.png', '2.png','3.png','4.png'];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
 
document.body.appendChild(bgImage);
//append는 가장 아래에 =>즉 createElement로 <img></img> 태그를만들고 

/** img 태그를 저장한 변수에 url을 지정한 후 img/images[random]을 
 * document.body.appendChild를 사용하여 append니까 html>body 가장 아래에 
 * <img>images[random]</img> 의 코드를 생성하고 실행한 것임 
 */
//prepend는 가장 위에 


//createElement() => html 요소를 만든다.
    //createElement('h1') => <h1></h1> 과 같이 생성함 
        // 하지만 요소를 만들기만 해서는 사용할 수 없다 
//appendChild() => body에 html을 추가함
        // appendChild()를 사용하여 html에 추가해줘야한다.