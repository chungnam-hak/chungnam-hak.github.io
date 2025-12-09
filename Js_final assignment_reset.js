//홈페이지의 각 영역들을 초기화하는 함수


function ResetNav() {

    const n = document.getElementsByTagName("nav")[0];
    /* HTML내부에서 template를 만들어놓고 가져오는 방법,
    하지만 HTML 내에 길이가 너무 길어지기에 근냥 ``을 쓰는 방법으로 대체한다. 
    const tpN = document.getElementById("Nav_Base");
    n.innerHTML = "";  //부가 설명의 내용도 초기화
    n.append(tpN.content.cloneNode(true));
    */

    n.innerHTML = `<h3 style="margin: 10px;">목록</h3>`
}

function ResetFooter() {

    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = `
        <h3>부가 설명</h3>
        <p style="padding: 5px;">
            이곳은 웹프로그래밍 개념 선택시<br>
            부가 설명이 정리되는 곳입니다.
        </p> `
}

function ResetAside() {
    const a = document.getElementsByTagName("aside")[0];
    let D = document.getElementsByName("lightModeC");

    if (D[0].checked) {
        a.innerHTML = `
    <div id="log" style="background-color: rgba(78, 91, 102, 1); height: 150px; width: 100%; padding: 5px;">
        로그인<br>
        <hr>
        <input type="text" , id="id" , width="3px" placeholder="아이디"><br>
        <input type="password" , id="pw" , width="3px" placeholder="비밀번호"><br>
        <input type="button" onclick="LoginStart();" value="로그인">
        <div style="color: yellow;">
        *임시 제공* [아이디: id, 비밀번호: pw]<br>
        
        </div>
    </div>
    <div id="mesage" style="background-color: rgba(124, 108, 74, 1); height: 80%; width: 100%; padding: 5px;">
        <h4>로그인 후 이용이 가능합니다.</h4>    
    </div>
    ` 
    }
    else{
    a.innerHTML = `
    <div id="log" style="background-color: rgb(173, 201, 224) ; height: 150px; width: 100%; padding: 5px;">
        로그인<br>
        <hr>
        <input type="text" , id="id" , width="3px" placeholder="아이디"><br>
        <input type="password" , id="pw" , width="3px" placeholder="비밀번호"><br>
        <input type="button" onclick="LoginStart();" value="로그인">
        <div style="color: yellow;">
        *임시 제공* [아이디: id, 비밀번호: pw]<br>
        </div>
    </div>
    <div id="mesage" style="background-color: rgb(255, 194, 63); height: 80%; width: 100%; padding: 5px;">
        <h4>로그인 후 이용이 가능합니다.</h4>    
    </div>
    ` 
    }
}

function ResetSection() {
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = `
        <h3 style="padding: 5px;">내용 정리</h3>
    `
}