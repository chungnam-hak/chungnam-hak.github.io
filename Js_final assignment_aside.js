//aside에 관련된 함수들과 변수들

let recArray = new Array;
let recNum = 0;

function Login() {
    const a = document.getElementsByTagName("aside")[0];
    let D = document.getElementsByName("lightModeC");

    if (D[0].checked) {
        a.innerHTML = `
    <div id="log" style="background-color: rgba(78, 91, 102, 1); height: 150px; width: 100%; padding: 5px;">
        OO님
        <hr>
        <img src="img/chacha.png" alt="나" width="80px" style = "border: 1px solid rgb(223, 223, 223);">
        <input id = "logout" type="button" onclick="LogOut();" value="로그아웃">
        
    </div>
    <div id="mesage" style="background-color: rgba(124, 108, 74, 1); height: 80%; width: 100%; padding: 5px;">
        <p>메모장<br>
        <textarea style="width: 80%; height: 10%;" id="text" placeholder='내용을 입력하세요.(최대 30자)'></textarea>
        <input id = "recodein"type="button"  onclick="Textreg();" value="등록">
        </p>

        <div id = "record" style="background-color: rgba(153, 142, 117, 1); width: 80%;">
            
        </div>
    </div>
    `
    }
    else {

        a.innerHTML = `
    <div id="log" style="background-color: rgb(173, 201, 224); height: 150px; width: 100%; padding: 5px;">
        OO님
        <hr>
        <img src="img/chacha.png" alt="나" width="80px">
        <input id = "logout" type="button" onclick="LogOut();" value="로그아웃">
        
    </div>
    <div id="mesage" style="background-color: rgb(255, 194, 63); height: 80%; width: 100%; padding: 5px;">
        <p>메모장<br>
        <textarea style="width: 80%; height: 10%;" id="text" placeholder='내용을 입력하세요.(최대 30자)'></textarea>
        <input id = "recodein"type="button"  onclick="Textreg();" value="등록">
        </p>

        <div id = "record" style="background-color: rgb(255, 235, 191); width: 80%;">
            
        </div>
    </div>
    `
    }

    LoginMemo();
}

function LogOut() {
    alert("다음에 또 방문해주세요.");
    ResetAside();

}

function Textreg() {
    let t = document.getElementById("text").value;
    if (t.length > 0 && t.length < 31) {
        //alert("글을 등록했습니다.");
        let newt = document.getElementById("record");
        let d = new Date();
        let a = "오전";
        let h = d.getHours();
        if (d.getHours() >= 13) {
            a = "오후";
            h -= 12;
        }

        let str;
        if(d.getMinutes() < 10)
        {
            str = `<p>${t} <br> ${a} ${h}:0${d.getMinutes()} </p>`;
            newt.innerHTML = `<p>${t} <br> ${a} ${h}:0${d.getMinutes()} </p>` + newt.innerHTML;
        }
        else{
            str = `<p>${t} <br> ${a} ${h}:${d.getMinutes()} </p>`;
            newt.innerHTML = `<p>${t} <br> ${a} ${h}:${d.getMinutes()} </p>` + newt.innerHTML;
        }

        document.getElementById("text").value = "";

        TCheck(str);
    }
    else {
        alert("입력 가능한 글자 수는 1자 이상 30자 이하입니다.");
        document.getElementById("text").value = "";
    }
}

function TCheck(str) {
    if(recNum == 6){
        for(let i = 0; i < 5; i++)
        {
            recArray[i] = recArray[i+1];
        }
        recArray[5] = str;
    }
    else{
        recArray[recNum] = str;
        recNum++;
        
    }
}

function LoginMemo(){
    const m = document.getElementById("record");
    m.innerHTML = "";

    for(let i = 0; i < recNum; i++)
    {
        m.innerHTML = recArray[i] + m.innerHTML;
    }
}

function LoginStart() {

    let id = document.getElementById("id")
    let pw = document.getElementById("pw")

    if (id.value == "id" && pw.value == "pw") {
        alert("OO님 방문을 환영합니다.");
        Login();
    }
    else {
        if (id.value == "id") alert("비밀번호가 틀렸습니다.");
        else if (pw.value == "pw") alert("존재하지 않는 아이디 입니다.");
        else alert("존재하지 않는 계정입니다.");

    }
}