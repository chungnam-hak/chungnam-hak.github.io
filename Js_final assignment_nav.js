//Nav_Web시 실행되는 함수

//1.Web
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

//기본 틀의 이해
function N_HTML_Base(){
    S_HTML_Base();
    F_HTML_Base();
    OffImgView();
}
//기본 요소 태그
function N_HTML_BaseTag(){
    S_HTML_BaseTag();
    F_HTML_BaseTag();
    OffImgView();
}
//블록 태그와 인라인 태그
function N_BlockInlineTag(){
    S_HTML_BlockInlineTag();
    F_HTML_BlockInlineTag();
    OffImgView();
}
//리스트와 표
function N_List_Table(){
    S_HTML_List_Table()
    F_HTML_List_Table()
    OffImgView();
}
//웹 폼과 폼 요소
function N_WebForm(){
    S_HTML_WebForm()
    F_HTML_WebForm();
    OffImgView();
}

//3.CSS
function N_CSS(){

}

//4.JAVASCRIPTS
function N_JS(){

}
