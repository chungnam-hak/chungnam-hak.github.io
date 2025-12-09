//header의 항목을 선택시 실행되는 함수들

function UpSelHome() {
    ResetFooter();
    ResetNav();
    ResetAside();
    ResetSection();
    //alert("홈페이지를 초기화합니다.");
    OffImgView(); //팝업 이미지 초기화
}

//전체 요약 정리
function UpSelWeb() {
    //alert("웹프로그래밍을 선택합니다.");

    //Nav 변화
    /** 
    const nav = document.getElementsByTagName("nav")[0];
    const tp = document.getElementById("Nav_Web");
    nav.innerHTML = ""; //기존 내용 삭제.
    nav.append(tp.content.cloneNode(true)); */

    N_Web(); //nav 구성 변화
    S_Web(); //section 구성 변화 
    F_Web_HTML(); //nav의 첫 선택지(HTML)로 변화
    Footer_Blend(); //집중 효과!
    OffImgView(); //팝업 이미지 초기화
}

//1~5주차 내용 정리
function UpSelHTML() {
    //alert("HTML을 선택합니다.");
    const nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = ""; //기존 내용 삭제.
    nav.innerHTML = `
    <h3 style="margin: 10px;">목록</h3><br>
        <ul>
            <li id="upsel" onclick="N_HTML_Base()">기본 틀 이해 </li> <!-- 1,2주차-->
            <br>
            <li id="upsel" onclick="N_HTML_BaseTag()">기본 요소 태그 </li> <!-- 3주차-->
            <br>
            <li id="upsel" onclick="N_BlockInlineTag()">블록 태그와<br>인라인 태그 </li> 
            <br>
            <li id="upsel" onclick="N_List_Table()">리스트와 표 </li> <!-- 4주차-->
            <br>
            <li id="upsel" onclick="N_WebForm()">웹 폼과 폼 요소 </li> <!--form | input, select, button, textarea 5주차-->
        </ul>`
    S_HTML_Base(); //section 구성 변화
    F_HTML_Base(); //nav의 첫 선택지(기본 틀 이해)로 변화
    Footer_Blend(); //집중 효과!
    OffImgView(); //팝업 이미지 초기화
    
    
}

//6, 7주차 내용 정리
function UpSelCSS() {

    //alert("CSS을 선택합니다.");
}

//8 ~ 13주차 내용 정리
function UpSelJS() {

    //alert("JAVASCRIPTS을 선택합니다.");
}

//퀴즈 
function UpSelQuiz(){

}