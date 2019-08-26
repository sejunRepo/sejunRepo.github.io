const aboutTitle = document.querySelector(".aboutTitle");
const aboutScreen = document.getElementById("about_screen_div");


const SELECTOR_DIV_CLASS = "div_about_selector";
const DIV_DESC = "div_des";
const DIV_COMMENT = "div_com"

const description_html = '<div id="main_info">\
    <img src="./assets/img/33.jpg" id="profile">\
    <div id="aboutsj" style="text-align: left">\
    <div class="myInfo">Name : 박세진</div>\
    <div class="myInfo">Age : 27</div>\
    <div class="myInfo">Related Experience : </div>' + 
    '<div class="myInfo">19-01 ~ 19-07 KH 정보교육원 JAVA & SPRING 웹/앱 개발자 과정 수료</div>\
    <div class="myInfo">Related Certificate: </div>\
    <div class="myInfo">1. 정보처리기능사</div>'  + 
    '<div class="myInfo">2. SQLD... 한문제차이 낙방 재시험 예정</div>\
    </div>\
    </div>';

const comment_html = '<div id="mydesc">\
<p>"항상 어린아이 같이"</p>\
<p>비록 늦은 나이에 개발에 발 디뎠지만, 누구보다 새로운 기술과 지식에 어린아이처럼 호기심이 왕성한 개발자입니다.</p>\
<p>지금과 같이 은퇴할 때까지 항상 개발에 대한 흥미와 열정이 식지 않는 것이 저의 목표입니다.</p>\
<p>어제보단 오늘이, 오늘보단 내일이 기대되는 어린아이같이 하루가 다르게 성장하는 개발자가 되려고 노력하고 있습니다.</p>\
<p>하지만 아직 부족한 점이 많습니다. 훌륭한 선배님들과 많은 것을 배우며 소통할 수 있는 회사를 기다리고 있습니다.</p>\
<p>많은 연락 바랍니다!</p>\
</div>';

function hasClass(el, cn){
    var classes = el.classList;
    for(var j = 0; j < classes.length; j++){
        if(classes[j] == cn){
            return true;
        }
    }
}
function showInfo(innerHtml) {
    const informationDiv =  document.querySelector("." + SELECTOR_DIV_CLASS);
    let infoDiv = informationDiv.querySelector(".infoDiv");
    if(infoDiv == null){
        infoDiv = document.createElement("div");
        infoDiv.classList.add("infoDiv");
        informationDiv.append(infoDiv);
        infoDiv.innerHTML = innerHtml;
    }else {
        informationDiv.removeChild(infoDiv);
        infoDiv = document.createElement("div");
        infoDiv.classList.add("infoDiv");
        informationDiv.append(infoDiv);
        infoDiv.innerHTML = innerHtml;

    }
    
}
function selectorClickHandler(){

    const movingEl = document.querySelector("." + SELECTOR_DIV_CLASS);
    movingEl.classList.add("showOn")
    if(hasClass(this, DIV_DESC)){
        const anotherDiv = document.querySelector("." + DIV_COMMENT);
        anotherDiv.classList.add("activeSel");
        this.classList.add("activeSel");
        this.classList.add("activate");
        anotherDiv.classList.remove("activate");
        
        // anotherDiv.classList.remove("activeSel");
        console.log("desc");
        showInfo(description_html);
    }
    if(hasClass(this, DIV_COMMENT)){
        const anotherDiv = document.querySelector("." + DIV_DESC);
        anotherDiv.classList.add("activeSel");
        this.classList.add("activeSel");
        this.classList.add("activate");
        anotherDiv.classList.remove("activate");
        showInfo(comment_html);
        console.log("com");
    }
}
function createAboutInfo(){
    const div_about_selector =  document.createElement("div");
    const div_des = document.createElement("div");
    const div_com = document.createElement("div");
    const span_des = document.createElement("span");
    const span_com = document.createElement("span");

    div_about_selector.classList.add(SELECTOR_DIV_CLASS);
    // add class
    div_des.classList.add(DIV_DESC);
    div_com.classList.add(DIV_COMMENT);
    div_des.classList.add("div_selector");
    div_com.classList.add("div_selector");
    span_des.classList.add("selectorSpan");
    span_com.classList.add("selectorSpan");
    // add text
    span_des.append("Description");
    span_com.append("Comments");
    div_des.append(span_des);
    div_com.append(span_com);
    // add Listener

    div_des.addEventListener('click', selectorClickHandler);
    div_com.addEventListener('click', selectorClickHandler);

    div_about_selector.append(div_des);
    div_about_selector.append(div_com);
    return div_about_selector;
}

function titleClickHandler(){
    console.log("타이틀 클릭");
    if(hasClass(this,"clickOn")){
        const removeEl = document.querySelector("." + SELECTOR_DIV_CLASS);
        aboutScreen.removeChild(removeEl);
        this.classList.toggle("clickOn");
    }else{
        this.classList.toggle("clickOn");
        div_about_selector = createAboutInfo();
        aboutScreen.append(div_about_selector);

    }
}

aboutTitle.addEventListener('click', titleClickHandler);
    

