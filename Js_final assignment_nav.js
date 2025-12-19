//Nav_Web시 실행되는 함수

//1.Web -0
function N_Web(){
    const nav = document.getElementsByTagName("nav")[0];
    nav.innerHTML = ""; //기존 내용 삭제.
    nav.innerHTML = `
    <h3 style="margin: 10px;">목록</h3><br>
        <ul>
            <li id="upsel" onclick="F_Web_HTML()">HTML </li>
            <br>
            <li id="upsel" onclick="F_Web_CSS()">CSS </li>
            <br>
            <li id="upsel" onclick="F_Web_JS()">JAVASCRIPT </li>
        </ul>`
}

/* //위 함수의 실험작
<p style="padding: 20px;">
            &lt!DOCTYPE html&gt <br>
            &lt!-- 주석넣기--&gt <br>
            <br>
            &lthtml&gt <br>
            <br>
            &nbsp&nbsp&nbsp&nbsp&lttitle&gtDocument&lt/title&gt <br>
            <br>
            &nbsp&nbsp&nbsp&nbsp&ltlink rel="stylesheet" href="__.css"&gt <br>
            <br>
            &nbsp&nbsp&nbsp&nbsp&ltscript src="__.js"&gt&lt/script&gt <br>
            <br>
            &lthead&gt <br>
            <br>
            &lt/head&gt <br>
            <br>
            &ltbody&gt <br>
            &nbsp&nbsp&nbsp&nbspHello world!  <br>
            &lt/body&gt <br>
            <br>
            &lt/html&gt <br>
        </p> 
*/

//2.HTML 선택지

//기본 틀의 이해 - 1
function N_HTML_Base(){
    S_HTML_Base();
    F_HTML_Base();
    OffImgView();
    CheckTrue(1); 
    CheckEnd() //전부 트루인지 확인
}
//기본 요소 태그 -2
function N_HTML_BaseTag(){
    S_HTML_BaseTag();
    F_HTML_BaseTag();
    OffImgView();
    CheckTrue(2); 
    CheckEnd() //전부 트루인지 확인
}
//블록 태그와 인라인 태그 -3
function N_BlockInlineTag(){
    S_HTML_BlockInlineTag();
    F_HTML_BlockInlineTag();
    OffImgView();
    CheckTrue(3); 
    CheckEnd() //전부 트루인지 확인
}
//시맨틱 태그 -4
function N_SemanticTag(){
    S_HTML_SematicTag();
    F_HTML_SematicTag();
    OffImgView();
    CheckTrue(4); 
    CheckEnd() //전부 트루인지 확인
}
//리스트와 표 - 5
function N_List_Table(){
    S_HTML_List_Table()
    F_HTML_List_Table()
    OffImgView();
    CheckTrue(5); 
    CheckEnd() //전부 트루인지 확인
}
//웹 폼과 폼 요소 -6
function N_WebForm(){
    S_HTML_WebForm()
    F_HTML_WebForm();
    OffImgView();
    CheckTrue(6); //1번 트루
    CheckEnd() //전부 트루인지 확인
}
// - 7
function N_External(){
    S_HTML_External();
    F_HTML_External();
    OffImgView();
    CheckTrue(7); 
    CheckEnd() //전부 트루인지 확인
}

//3.CSS - 8
//스타일 시트 구성
function N_CSS_Base(){
    S_CSS_Base();
    F_CSS_Base();
    OffImgView();
    CheckTrue(8); 
    CheckEnd() //전부 트루인지 확인
}
//스타일 시트 만드는 방법 -9
function N_CSS_Make(){
    S_CSS_Make();
    F_CSS_Make();
    OffImgView();
    CheckTrue(9); 
    CheckEnd() //전부 트루인지 확인
}
//셀렉터 - 10
function N_CSS_sel(){
    S_CSS_sel();
    F_CSS_sel();
    OffImgView();
    CheckTrue(10); 
    CheckEnd() 
}
//다양한 프로퍼티 -11
function N_CSS_p(){
    S_CSS_p();
    F_CSS_p();
    OffImgView();
    CheckTrue(11); 
    CheckEnd() 
}
//박스 유형 -12
function N_CSS_box(){
    S_CSS_box();
    F_CSS_box();
    OffImgView();
    CheckTrue(12); 
    CheckEnd() 
}
//동적 변화 -13
function N_CSS_ani(){
    S_CSS_ani();
    F_CSS_ani();
    OffImgView();
    CheckTrue(13); 
    CheckEnd() 
}


//4.JAVASCRIPTS
//기본 - 14
function N_JS_base(){
    S_JS_base();
    F_JS_base();
    OffImgView();
    CheckTrue(14); 
    CheckEnd() 
}
//기본 활용 코드 -15
function N_JS_bc(){
    S_JS_bc();
    F_JS_bc();
    OffImgView();
    CheckTrue(15); 
    CheckEnd() 
}
//식별자와 변수 -16
function N_JS_let(){
    S_JS_let();
    F_JS_let();
    OffImgView();
    CheckTrue(16); 
    CheckEnd() 
}
//자바스크립트의 연산 -17
function N_JS_cal(){
    S_JS_cal();
    F_JS_cal();
    OffImgView();
    CheckTrue(17); 
    CheckEnd() 
}
//조건문과 반복문 -18
function N_JS_if(){
    S_JS_if();
    F_JS_if();
    OffImgView();
    CheckTrue(18); 
    CheckEnd() 
}
//함수 -19
function N_JS_fct(){
    S_JS_fct();
    F_JS_fct();
    OffImgView();
    CheckTrue(19); 
    CheckEnd() 
}
//객체 -20
function N_JS_ob(){
    S_JS_ob();
    F_JS_ob();
    OffImgView();
    CheckTrue(20); 
    CheckEnd() 
}
//사용자 객체 -21
function N_JS_uob(){
    S_JS_uob();
    F_JS_uob();
    OffImgView();
    CheckTrue(21); 
    CheckEnd() 
}
//DOM 객체 -22
function N_JS_dom(){
    S_JS_dom();
    F_JS_dom();
    OffImgView();
    CheckTrue(22); 
    CheckEnd() 
}