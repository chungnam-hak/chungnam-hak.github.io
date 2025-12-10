//footer에 변화를 주는 함수


//1. Web 선택지
function F_Web_HTML() {
    
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>HTML이란?</h3>
        <p style="padding: 5px;">
            표준화된 태그로 웹페이지를 작성하는언어입니다<br>
            <span style="color:blue">&ltimg&gt, &lthr&gt, &lttable&gt, &ltli&gt</span> 등의 태그로 이뤄집니다.<br>
            <strong>*집을 짓는 것에 비유하면 집의 뼈대를 만드는 과정이라 할수 있습니다.</strong>


        </p>`

    Footer_Blend(); //집중 효과!

    
}
function F_Web_CSS() {

    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>CSS란?</h3>
        <p style="padding: 5px;">
            HTML 문서의 색이나 모양 등 외관을 꾸미는 언어입니다<br>
            CSS로 작성된 코드를 <span style="color:red">스타일시트(style sheet)</span>라고 부릅니다.<br>
            <span style="color:blue">&ltstyle&gt 태그 또는 style속성, 스타일 시트에 별도 파일</span>로 두어 적용합니다.<br>
            <strong>*집을 짓는 것에 비유하면 지붕이나 벽에 페인트를 칠하고 장식하는 과정이라 할수 있습니다.</strong>


        </p>`

    Footer_Blend(); //집중 효과!

}
function F_Web_JS() {

    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>자바스크립트란?</h3>
        <p style="padding: 5px;">
            웹페이지에 동적인 기능과 상호작용을 추가하는 언어입니다.<br>
            <span style="color:blue">이벤트 리스너, &ltscript&gt, 별도의 파일</span>로 두어 적용합니다.<br>
            <strong>*집을 짓는 것에 비유하면 집에 전기공사를 하여 기능을 제공하는 과정이라 할수 있습니다.</strong>


        </p>`

    Footer_Blend(); //집중 효과!
}


//2-1. HTML 선택지
function F_HTML_Base(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>HTML 생성</h3>
        <p style="padding: 5px;">
            vs code에서 html의 기본 구성 생성하기<br>
            단축키: <span style="color:blue">! + ↵</span><br>
            <strong>*--</strong>


        </p>`

    Footer_Blend(); //집중 효과!
}

function F_HTML_Annotation(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>주석</h3>
        <div style="padding: 5px;"> 
            단축키: <span style="color:blue">Ctrl + /</span><br>
            HTML,CSS,JS에서 그 생긴 모양새가 다르다.<br>
            <strong>*HTML : &nbsp <span style = "color:lightgreen">&lt;!-- 주석--&gt;</span></strong> &nbsp | &nbsp <strong>*CSS : &nbsp<span style = "color:lightgreen">/*주석*/</span></strong> &nbsp | &nbsp <strong>*JS : &nbsp<span style = "color:lightgreen">//주석</span> &nbsp 또는 &nbsp <span style = "color:lightgreen">/*주석*/</span></strong>


        </div>`

    Footer_Blend(); //집중 효과!
}

function F_HTML_Head(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>&lt;head&gt; . . . &lt;/head&gt;</h3>
        <div style="padding: 5px;"> 
            웹페이지의 제목을 설정하고 &lt;style&gt;, &lt;script&gt;를 작성하거나, CSS,JS 파일을 참조할수도 있다.<br>
            그렇기에, &lt;body&gt에서 보여지는 페이지에 디자인을 주거나, 기능을 추가하는 영역이다. <br>
            <strong>*태그: &lt;title&gt;, &lt;style&gt;, &lt;link&gt;, &lt;script&gt; 등</strong>


        </div>`

    Footer_Blend(); //집중 효과!
}

function F_HTML_Body(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>&lt;body&gt; . . . &lt;/body&gt;</h3>
        <div style="padding: 5px;"> 
            웹페이지에 보여지는 모든 것을 작성한다.<br>
            <strong>* 기본 요소 태그, 블록 태그, 인라인 태그 등 </strong>


        </div>`

    Footer_Blend(); //집중 효과!
}

//2-2 HTML_BaseTag
function F_HTML_BaseTag(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>HTML 태그의 특징</h3>
        <ol>
            <li>시작태그와 종료 태그가 모두 있는 경우와 시작태그만 있는 경우로 나뉜다.<br>
            &emsp;* &lt;h1&gt; . . . &lt;/h1&gt;, &lt;p&gt; . . . &lt;/p&gt;<br>
            &emsp;* &lt;hr&gt;, &lt;br&gt; </li>
            <li>태그와 속성에는 대소문자 구분이 없다. <br>
            &emsp;* &lt;H1&gt; . . . &lt;/h1&gt;, &lt;p&gt; . . . &lt;/P&gt;  //정상적으로 작동한다.</li> 
        <ol>`
    Footer_Blend(); //집중 효과!
}

function F_HTML_Pre(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>&lt;pre&gt; . . . &lt;/pre&gt;</h3>
        <p style="padding: 5px; margin-bottom: 0;">
            &lt;pre&gt; 내에서는 사용자가 작성한 그대로 출력된다.
            <table style="position: relative; bottom:10px;">
            <tr>
                <td> &emsp;<span style = "color:blue">예시)</span>&emsp;<br><br><br><br></td>
                <td>
                    <div>
                    &lt;pre&gt;<br>
                    안녕하세요!<br>
                    웹프로그래밍을 배워봅시다.<br>
                    ^_^ 
                    &lt;/pre&gt;</div>
                </td> 
                <td style = "width: 100px; text-align: center;">
                    <span style = "color:red"><b>-><br>
                    출력</b></span>
                </td>
                <td>
                    <div><br>
                    안녕하세요!<br>
                    웹프로그래밍을 배워봅시다.<br>
                    ^_^ 
                    </div>
                </td> 
            </tr>
            </table>
        </p>` 
    Footer_Blend(); //집중 효과!
}

function F_HTML_Textdesign(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>텍스트를 꾸미기 위한 태그</h3>
    <img id = "f_img" onclick = "OnImgView('img/textdesign.png', '500px')" src="img/textdesign.png" alt="3주차_p.14" title = "3주차_p.14" style="position: relative; bottom: 50px; right: 50px; height: 180px; margin: 0; padding: 0; float:right">
        <p style="padding: 5px;">
            &lt;body&gt; 내에서 사용하며, 다양한 기능을 수행한다.<br>
            &emsp;* &lt;b&gt; Hello &lt;/b&gt;&nbsp; <span style = "color:red"><b>-></b></span> &nbsp;<b>Hello</b> //진하게 <br>
            &emsp;* &lt;i&gt; Hello &lt;/i&gt;&nbsp; <span style = "color:red"><b>-></b></span> &nbsp;<i>Hello</i> //강조 <br>
            &emsp;* &lt;mark&gt; Hello &lt;/mark&gt;&nbsp; <span style = "color:red"><b>-></b></span> &nbsp;<mark>Hello</mark> //하이라이팅 <br>
            <span style="color:blue">오른쪽 이미지를 클릭해 확인하자!</span>
        </p>`
    Footer_Blend(); //집중 효과!
}

function F_HTML_SC(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>특수문자, 기호, 심볼 삽입</h3>
    <img id = "f_img" onclick = "OnImgView('img/SC.png', '400px')" src="img/SC.png" alt="3주차_p.11" title = "3주차_p.11" style="position: relative; bottom: 50px; right: 50px; height: 180px; margin: 0; padding: 0; float:right">
        <p style="padding: 5px;">
            문자들을 입력하기 위해선 해당 엔터티표현을 알아야 쓸수 있다.<br>
            &emsp;* &amp;it;head&amp;gt; &nbsp; <span style = "color:red"><b>-></b></span> &nbsp; &lt;head&gt;<br>
            &emsp;* 10 &amp;divide 2 = 5 &nbsp; <span style = "color:red"><b>-></b></span> &nbsp; 10 &divide 2 = 5 <br>
            &emsp;* &amp;radic2 &nbsp; <span style = "color:red"><b>-></b></span> &nbsp; &radic2<br>
            <span style="color:blue">오른쪽 이미지를 클릭해 확인하자!</span>
        </p>` 
    Footer_Blend(); //집중 효과!
}

//2-3 HTML_BlockTag
function F_HTML_BlockInlineTag(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
        <table>
            <tr>
                <td><strong>블록 태그의 예시</strong>&emsp;<br><br><br></td>
                <td>
                    <div>  
                        &lt;div&gt; <br>
                        &emsp;블록 태그의 영역<br>
                        &lt;/div&gt; <br>
                    </div>
                </td> 
                <td style = "width: 100px; text-align: center;">
                    <span style = "color:red"><b>-><br>
                    출력</b></span>
                </td>
                <td>
                    <div>
                    <br>
                    &emsp;<span style="color:blue">블록 태그의 영역</span><br>
                    <br>
                    </div>
                </td> 
            </tr>
        </table>
        <span class="small-br"></span>
        <table>
            <tr>
                <td><strong>인라인 태그의 예시</strong>&emsp;<br><br><br></td>
                <td>
                    <div>  
                        &lt;div&gt; <br>
                        &emsp;블록 태그 속의 &lt;span&gt;인라인 태그의 영역&lt;/span&gt;<br>
                        &lt;/div&gt; <br>
                    </div>
                </td> 
                <td style = "width: 100px; text-align: center;">
                    <span style = "color:red"><b>-><br>
                    출력</b></span>
                </td>
                <td>
                    <div>
                        <br>
                        &emsp;블록 태그 속의 <span style="color:blue">인라인 태그의 영역</span><br>
                        <br>
                    </div>
                </td> 
            </tr>
        </table>
    ` 
    Footer_Blend(); //집중 효과!
}
//2-4. HTML_SematicTag
function F_HTML_SematicTag(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>시맨틱 태그의 위치, 모양, 색 등은 자동으로 결정되는것이 아니라 직접 지정해야 한다.</h3>
    <img id = "f_img" onclick = "OnImgView('img/SematicTag1.png', '400px')" src="img/SematicTag1.png" alt="2주차_p.9" title = "2주차_p.9" style="position: relative; bottom: 50px; right: 50px; height: 180px; margin: 0; padding: 0; float:right">
        <p style="padding: 5px;">
            다음의 이미지처럼, 단순히 시맨틱 태그를 선언하는 것으로는,<br>
            각각의 블록 태그를 생성하는 것과 다름이 없다. <br>
            그렇기에 CSS를 이용하여 직접 위치와 색, 모양을 지정해야 한다.<br>
            <span style="color:blue">오른쪽 이미지를 클릭해 확인하자!</span>
        </p>` 
    Footer_Blend(); //집중 효과!
}

//2-5 HTML_List_Table
function F_HTML_List_Table(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>리스트와 표의 디자인</h3>
        <p style="padding: 5px;">
            리스트의 경우, type = <span style="color:red">" "</span>을 추가하여 각 아이템의 나열 마커를 지정할 수 있다. <br><span class="ssmall-br"></span>
            표의 경우, border = "<span style="color:red">n</span>"테두리 두께를 조절할수 있으며, <br><span class="ssmall-br"></span>
            clospan, rowspan = "<span style="color:red">n</span>" 으로 열과 행을 병합 할수도 있다. <br><span class="ssmall-br"></span>
            <span style="color:purple">* CSS를 추가한다면 더 다양한 내부 디자인이 가능하다.</span>
        </p>` 

    Footer_Blend(); //집중 효과!
}

//2-6 HTML_WebForm
function F_HTML_WebForm(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
        <h3>입력 요소의 타입 &nbsp; &lt;input &nbsp; type = <span style="color:red">" "</span>&gt;</h3>
        <table border = "1" style="border-collapse: collapse;">
            <thead>
                <th>&nbsp;text,password,submit&nbsp;</th><th>button</th><th>checkbox</th><th>radio</th>
            </thead>
            <tr>
                <td>
                    <img id = "f_img" onclick = "OnImgView('img/WebForm_login.png', '500px')" src = "img/WebForm_login.png" alt="5주차_p.4" title = 5주차_p.4" style="width:150px;">
                </td>
                <td>
                    <img id = "f_img" onclick = "OnImgView('img/WebForm_button.png', '500px')" src = "img/WebForm_login.png" alt="5주차_p.15" title = 5주차_p.15" style="width:150px;">
                </td> 
                <td >
                    <img id = "f_img" onclick = "OnImgView('img/WebForm_checkbox.png', '500px')" src = "img/WebForm_login.png" alt="5주차_p.17" title = 5주차_p.17" style="width:150px;">
                </td>
                <td>
                    <img id = "f_img" onclick = "OnImgView('img/WebForm_radio.png', '500px')" src = "img/WebForm_login.png" alt="5주차_p.18" title = 5주차_p.18" style="width:150px;">
                </td> 
            </tr>
        </table>
        <span style="color:blue">이미지를 클릭해 확인하자!</span>
    `

    Footer_Blend(); //집중 효과!
}

//2-7 HTML_External
function F_HTML_External(){
    const f = document.getElementsByTagName("footer")[0];
    f.innerHTML = "";  //부가 설명의 내용도 초기화

    f.innerHTML = `
    <h3>구조(HTML), 디자인(CSS), 기능(JAVASCRIPT)으로 파일을 나누는 이유</h3>
        <p style="padding: 5px;">
            하고자 한다면 뼈대인 HTML 파일 내에 CSS와 JAVASCRIPT를 전부 넣어서 하나의 파일로 만들 수도 있다. <br><span class="ssmall-br"></span>
            하지만 그럴 경우, 파일이 너무 길어지기에 가독성이 낮아지며, 성능이 떨어진다. <br><span class="ssmall-br"></span>
            그렇기에 파일 나눔으로써, <span style="color:red">코드가 명확하고 관리하기 쉬운 형태가 된다.</span> <br><span class="ssmall-br"></span>
            <span style="color:purple">*프로그래머는 파일을 나누는 것을 습관화해야 한다.</span>
        </p>` 

    Footer_Blend(); //집중 효과!
}

//3. CSS 선택지

//4. JS 선택지