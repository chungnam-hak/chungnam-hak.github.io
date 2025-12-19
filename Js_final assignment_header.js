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
    CheckTrue(0); //0번 트루
    CheckEnd() //전부 트루인지 확인
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
            <li id="upsel" onclick="N_SemanticTag()">시맨틱 태그 </li> <!-- 2주차-->
            <br>
            <li id="upsel" onclick="N_List_Table()">리스트와 표 </li> <!-- 4주차-->
            <br>
            <li id="upsel" onclick="N_WebForm()">웹 폼과 폼 요소 </li> <!--form | input, select, button, textarea 5주차-->
            <br>
            <li id="upsel" onclick="N_External()">외부 요소 </li> <!-- 2주차 ~ 5주차-->
        </ul>`
    S_HTML_Base(); //section 구성 변화
    F_HTML_Base(); //nav의 첫 선택지(기본 틀 이해)로 변화
    Footer_Blend(); //집중 효과!
    OffImgView(); //팝업 이미지 초기화
    CheckTrue(1); //1번 트루
    CheckEnd() //전부 트루인지 확인
    
}

//6, 7주차 내용 정리
function UpSelCSS() {

    //alert("CSS을 선택합니다.");
    const nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = ""; //기존 내용 삭제.
    nav.innerHTML = `
    <h3 style="margin: 10px;">목록</h3><br>
        <ul>
            <li id="upsel" onclick="N_CSS_Base()">스타일 시트 구성 </li> <!-- 6주차-->
            <br>
            <li id="upsel" onclick="N_CSS_Make()">스타일 시트<br>만들기</li> 
            <br>
            <li id="upsel" onclick="N_CSS_sel()">셀렉터</li> 
            <br>
            <li id="upsel" onclick="N_CSS_p()">다양한 프로퍼티</li>
            <br>
            <li id="upsel" onclick="N_CSS_box()">박스 유형의<br>스타일 </li> <!-- 7주차-->
            <br>
            <li id="upsel" onclick="N_CSS_ani()">애니메이션 </li> <!-- 2주차-->
            <br>
        </ul>`
    S_CSS_Base(); //section 구성 변화
    F_CSS_Base(); //nav의 첫 선택지(기본 틀 이해)로 변화
    Footer_Blend(); //집중 효과!
    OffImgView(); //팝업 이미지 초기화
    CheckTrue(8); //8번 트루
    CheckEnd() //전부 트루인지 확인
}

//8 ~ 13주차 내용 정리
function UpSelJS() {

    //alert("JAVASCRIPTS을 선택합니다.");
    const nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = ""; //기존 내용 삭제.
    nav.innerHTML = `
    <h3 style="margin: 10px;">목록</h3><br>
        <ul>
            <li id="upsel" onclick="N_JS_base()">지바스크립트 코드 작성하기 </li> <!-- 8주차-->
            <br>
            <li id="upsel" onclick="N_JS_bc()">기본 요소 코드</li> 
            <br>
            <li id="upsel" onclick="N_JS_let()">식별자와 변수</li>
            <br>
            <li id="upsel" onclick="N_JS_cal()">자바스크립트의 연산 </li> <!-- 9주차-->
            <br>
            <li id="upsel" onclick="N_JS_if()">조건문과 반복문 </li> 
            <br>
            <li id="upsel" onclick="N_JS_fct()">함수 </li> <!-- 10주차-->
            <br>
            <li id="upsel" onclick="N_JS_ob()">자바스크립트의 객체</li> <!-- 11주차-->
            <br>
            <li id="upsel" onclick="N_JS_uob()">사용자 객체 </li> <!-- 12주차-->
            <br>
            <li id="upsel" onclick="N_JS_dom()">DOM 객체 </li> 
            <br>
        </ul>`
    S_JS_base(); //section 구성 변화
    F_JS_base(); //nav의 첫 선택지(기본 틀 이해)로 변화
    Footer_Blend(); //집중 효과!
    OffImgView(); //팝업 이미지 초기화
    CheckTrue(14); //14번 트루
    CheckEnd() //전부 트루인지 확인
}

//퀴즈 
function UpSelQuiz(){

}