//기타 기능들의 정리

let tArray = new Array;
let AllCheck = false;

function CheckStart(){
    for(let i = 0; i < 23; i++)
    {
        tArray[i] = false; 
    } 
}

function CheckTrue(n){
    tArray[n] = true;
}

function CheckEnd(){
    for(let i = 0; i<23; i++)
    {
        if(tArray[i] == false)
        {
            break;
        }
        else if( i == 22)
        {
            CheckClear();
        }
    }
}

function CheckClear(){
    if(!AllCheck)
    {
        alert("모든 내용을 학습했습니다. 수고하셨습니다.");
        document.getElementById("AllC").style.display = "block";
        AllCheck = true;
    }
    
}
function Footer_Blend() {
    const f = document.getElementsByTagName("footer")[0];
    //다크모드가 켜져있을때 다르게 애니메이션 실행
    let D = document.getElementsByName("lightModeC");

    //이미 실행중이라면 바로 종료하고, 다시 이벤트 실행!
    f.classList.remove("blinking");

    if (D[0].checked) {
        f.classList.add("blinking_Dark");

        setTimeout(() => {
            f.classList.remove("blinking_Dark");
        }, 1000);
    }
    else {
        f.classList.add("blinking");

        setTimeout(() => {
            f.classList.remove("blinking");
        }, 1000);
    }

}

function DarkMode() {
    let D = document.getElementsByName("lightModeC");
    if (D[0].checked) {
        //alert("DarkMode으로 전환합니다.");
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(94, 123, 133, 1)";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(126, 119, 119, 1)";
        document.getElementsByTagName("aside")[0].style.backgroundColor = "rgba(126, 119, 119, 1)";
        document.getElementsByTagName("section")[0].style.backgroundColor = "rgba(161, 157, 157, 1)";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "rgb(70, 67, 67)";
        document.getElementById("log").style.backgroundColor = "rgba(78, 91, 102, 1)";
        document.getElementById("mesage").style.backgroundColor = "rgba(124, 108, 74, 1)";
        document.getElementById("record").style.backgroundColor = "rgba(153, 142, 117, 1)";

        // document.body.style.color = "white";


    }
    else {
        //alert("LightMode으로 전환합니다.");
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(185, 225, 238)";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
        document.getElementsByTagName("aside")[0].style.backgroundColor = "white";
        document.getElementsByTagName("section")[0].style.backgroundColor = "white";
        document.getElementsByTagName("footer")[0].style.backgroundColor = "rgb(255, 255, 94)";
        document.getElementById("log").style.backgroundColor = "rgb(173, 201, 224)";
        document.getElementById("mesage").style.backgroundColor = "rgb(255, 194, 63)";
        document.getElementById("record").style.backgroundColor = "rgb(255, 235, 191)";

        // document.body.style.color = "black";
    }

}
/** 
function OnImgView(px){  

    let img = document.getElementById("f_img").src;

    document.getElementById("popup_img").src = img;
    document.getElementById("popup_img").style.height = px;
    //팝업 나타내기
    document.getElementById("img_popup").style.display = "block";

} */
function OnImgView(img, px){  

    document.getElementById("popup_img").src = img;
    document.getElementById("popup_img").style.height = px;

    //팝업 나타내기
    document.getElementById("img_popup").style.display = "block";

}
function OnImgViewW(img, px){  

    document.getElementById("popup_img").src = img;
    document.getElementById("popup_img").style.width = px;

    //팝업 나타내기
    document.getElementById("img_popup").style.display = "block";

}

function OffImgView(){  
    //팝업 숨기기
    document.getElementById("img_popup").style.display = "none";
}


