//기타 기능들의 정리

function Footer_Blend() {
    const f = document.getElementsByTagName("footer")[0];
    //다크모드가 켜져있을때 다르게 애니메이션 실행
    let D = document.getElementsByName("lightModeC");

    if (D[0].checked) {
        f.classList.add("blinking_Dark");

        setTimeout(() => {
            f.classList.remove("blinking_Dark");
        }, 500);
    }
    else {
        f.classList.add("blinking");

        setTimeout(() => {
            f.classList.remove("blinking");
        }, 500);
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


    }

}

function OnImgView(){  

    let img = document.getElementById("f_img").src;

    document.getElementById("popup_img").src = img;
    document.getElementById("popup_img").style.height ="400px"
    //팝업 나타내기
    document.getElementById("img_popup").style.display = "block";

}
function OnImgView2(){  

    let img = document.getElementById("f_img").src;

    document.getElementById("popup_img").src = img;
    document.getElementById("popup_img").style.height ="300px"

    //팝업 나타내기
    document.getElementById("img_popup").style.display = "block";

}
function OffImgView(){  
    //팝업 숨기기
    document.getElementById("img_popup").style.display = "none";
}

