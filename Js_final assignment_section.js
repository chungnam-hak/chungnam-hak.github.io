//section 함수


//1.Web
function S_Web(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">웹프로그래밍</h3>
        <img src="img/Web_base.png" alt="오리엔테이션_p.6", title = "오리엔테이션_p.6" style="position: relative; left: 200px; height: 300px; clip-path: inset(10px 10px 30px 10px);">
        <div style = "margin: 20px 50px; line-height: 1.6; margin-top: 0; position:relative; bottom: 40px;">
            &emsp;웹프로그래밍은 인터넷에서 동작하는 웹사이트와 웹 애플리케이션을 만드는 기술을 말한다. 우리가 매일 사용하는 뉴스 사이트, 쇼핑몰, 포털 서비스, 블로그 등은 <br>
            모두 웹프로그래밍으로 만들어진다. 먼저, <span id = "li_Sel" onclick="F_Web_HTML()" style="color:blue; padding : 0px;">HTML</span>은 <span style="color:red">웹페이지의 구조를 만드는 가장 기본적인 언어</span>이다. HTML은 여러 태그(tag) 로 구성되며, 태그는 &lt;title&gt;과 <br>
            같은 형태의 꺾쇠괄호(&lt; &gt;) 안에 들어 있는 단어로 작성된다. 웹의 모든 구조(제목, 문단, 표, 이미지 위치 등)는 HTML 태그로 정의된다. <br>
            &emsp;<span id = "li_Sel" onclick="F_Web_CSS()" style="color:blue; padding : 0px;">CSS</span>는 HTML로 만들어진 <span style="color:red">뼈대에 색을 칠하고, 모양을 다듬고, 배치를 조정하는 디자인 작업</span>에 해당합니다. 색상 및 배경 설정, 텍스트 스타일, 폰트 지정, 박스 모델 <br>
            (Box Model)을 통한 크기·여백 조정, 비주얼 효과 및 애니메이션 등 다양한 기능을 제공한다. <br>
            &emsp;HTML이 구조를 만들고, CSS가 장식을 입힌다면, <span id = "li_Sel" onclick="F_Web_JS()" style="color:blue; padding : 0px;">JavaScript</span>는 웹페이지에 생명과 기능을 부여하는 역할을 한다. 버튼을 눌러 메뉴가 열리고, 스크롤하면 애니메이 <br>
            션이 나타나고, 폼 입력값을 검사하거나, 인터넷에서 데이터를 불러오는 모든 기능은 JavaScript로 구현된다. <span style="color:red">즉, JavaScript는 웹페이지가 사용자와 상호작용할 수  <br>
            있도록 만드는 핵심 언어</span>이다.<br>
            <span style="color:purple">*HTML, CSS, JS의 경우 코딩 중 발생한 에러에 대해 무시하고 일단 실행하는 방식으로 작동한다. 그렇기에 작은 에러에도 민감하게 반응하는 다른 언어와 달리 디버깅<br>
            에서 에러를 찾기가 번거롭다.</span>
        </div>`    
}

//2.HTML
//2-1. HTML_Base
function S_HTML_Base(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">HTML의 기본틀</h3>
        <ul style = "list-style-type : none;">
            <li><strong>&lt!DOCTYPE html&gt</strong></li> &emsp;- 문서 형식 선언; 해당문서가 HTML5 문서임을 알리는 선언 <br>
            <li id = "li_Sel" onclick="F_HTML_Annotation()"><strong>&lt!-- 주석넣기--&gt</strong></li> &emsp;- 주석; 개발자의 이해와 공유를 위한 메모로, 화면에 출력되지 않는다.<br><br>
            <li><strong>&lthtml&gt</strong></li> &emsp;- html 태그; 페이지 구조의 시작과 끝을 알리는 태그<br>
            <li id = "li_Sel" onclick="F_HTML_Head()"><strong>&lthead&gt</strong></li> &emsp;- head 태그; 눈에 보이지 않는 정보(메타데이터)를 담는 영역<br>
            <li>&emsp;<strong>&lttitle&gtDocument&lt/title&gt</strong> &emsp; &emsp;- 브라우저 탭에 표시되는 페이지 제목을 설정</li> <br>
            <li>&emsp;<strong>&ltlink rel="stylesheet" href="__.css"&gt</strong> &emsp; &emsp;- CSS파일을 참조하여 style을 가져온다.</li>  <br>
            <li>&emsp;<strong>&ltscript src="__.js"&gt&lt/script&gt</strong> &emsp; &emsp;- JS파일을 참조하여 script를 가져온다.</li>  <br>
            <li id = "li_Sel" onclick="F_HTML_Head()"><strong>&lt/head&gt</strong></li><br>
            <li id = "li_Sel" onclick="F_HTML_Body()"><strong>&ltbody&gt</strong></li>  &emsp;- body 태그; 실제 화면에 보이는 모든 내용(텍스트, 이미지, 버튼 등)을 넣는 영역
            <li id = "li_Sel" onclick="F_HTML_Body()"><strong>&lt/body&gt</strong></li>
            <li><strong>&lt/html&gt</strong></li>
        </ul>
        
        `

        // <p id = "blueline" style = "color:blue;">*파란 글씨는 클릭가능</p>
}
//2-2. HTML_BaseTag
function S_HTML_BaseTag(){ 
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">기본 요소 태그</h3>
    <img src="img/BaseTag.png" alt="3주차_p.4", title = "3주차_p.4" style="position: relative; left: 40px; height: 140px; margin: 0; padding: 0;">
        <ul style = "list-style-type : circle;">
            <li><strong>&lt;h1&gt;~&nbsp;&lt;h6&gt;</strong> <br>
            &emsp;- 문단 제목용 태그: 글씨 크기가 다른 태그들로, h1에서 h6로 갈수록 글씨 크기가 작아진다. 하나의 박스로 인식되어, 앞뒤로 줄바꿈이 발생한다. </li> <span class="small-br"></span>
            <li><strong>&lt;p&gt; . . . &lt;/p&gt;</strong><br>
            &emsp;- 단락 태그; 하나의 단락을 형성하기 위한 태그이다. 코드상의 줄바꿈은 적용되지 않기에 다음의 &lt;br&gt;이 따로 필요하다. </li> <span class="small-br"></span>
            <li><strong>&lt;hr&gt;</strong><br>
            &emsp;- 수평선을 그어주는 태그: 윗줄과 아랫 줄의 구분을 지어주는 수평선을 표현하는 태그이다.</li> <span class="small-br"></span>
            <li><strong>&lt;br&gt;</strong><br>
            &emsp;- 줄바꿈 태그: 코드 상의 줄바꿈은 출력시 표현되지 않기에, 줄바꿈을 표현해주는 태그이다. </li> <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_Pre()"><strong>&lt;pre&gt; . . . &lt;/pre&gt;</strong></li>
            &emsp;- 개발자의 포맷을 그대로 출력하는 태그; 일일히 &lt;br&gt;이나 특수 엔터티표현을 두지 않아도 코드 상의 문자구조를 그대로 페이지에 표현해주는 태그를 말한다. <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_Textdesign()"><strong>텍스트를 꾸미기 위한 태그</strong> </li> 
            &emsp;- 글씨를 진하게하거나, 글씨체를 바꾸고, 강조하는 등의 효과를 주는 태그들을 말한다. <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_SC()"><strong>특수문자, 기호, 심볼 삽입</strong></li>
            &emsp;- 특수문자나 기호 등은 HTML내에서 각각 다른 기능을 가지거나, 키보드로 표현하기 어려울수 있다. 그렇기에 그런 문자들을 입력하기 위한 엔터티표현을 말한다. 
        </ul>`
}
//2-3. HTML_BlockTag
function S_HTML_BlockInlineTag(){ 
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">블록 태그와 인라인 태그</h3>
        <ul style = "list-style-type : circle;">
            <li><strong>태그는 블록 태그와 인라인 태그로 구분된다.</strong>
                <p>
                    블록 태그의 예:&nbsp; &lt;p&gt;,&nbsp; &lt;h1&gt;,&nbsp; &lt;div&gt;,&nbsp; &lt;ul&gt; <br><span class="small-br"></span>
                    인라인 태그의 예: &nbsp;&lt;strong&gt;,&nbsp; &lt;a&gt;,&nbsp; &lt;img&gt;,&nbsp; &lt;span&gt;
                    
                </p>
            </li>
            <li><strong>블록 태그</strong>
                <p>
                    항상 새라인에서 시작하여 출력된다. <span class="ssmall-br"></span>
                    양 옆에 다른 콘텐트를 배치하지 않고 한 라인을 독점 사용<span class="ssmall-br"></span>
                    가장 많이 사용되는 블록 태그: &lt;div&gt;
                </p>
            </li>
            <li><strong>인라인 태그</strong>
                <p>
                    블록 속에 삽입되어 블록의 일부로 출력된다. <span class="ssmall-br"></span>
                    가장 많이 사용되는 인라인 태그: &lt;span&gt;
                </p>
            </li> 
        </ul>`
}
//2-4. HTML_SematicTag
function S_HTML_SematicTag(){ 
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">시맨틱 태그</h3>
    <img src="img/SematicTag2.png" alt="3주차_p.11" title = "3주차_p.11" style="position: relative; left:10px; height: 550px; margin: 0; padding: 0; float:left">
    &emsp;<strong>시맨틱 태그는 HTML의 구조화를 위하여 이용한다.</strong><br>
    &emsp;&emsp;시맨틱 태그의 예:&nbsp; &lt;header&gt;,&nbsp; &lt;nav&gt;,&nbsp; &lt;section&gt;,&nbsp; &lt;article&gt;,&nbsp; &lt;aside&gt;,&nbsp; &lt;footer&gt; &nbsp;등 <br>
    <ul style = "list-style-type : circle; position: relative; left:70px; ">
        
        <li><strong>&lt;header&gt; . . . &lt;/header&gt;</strong> <br>
        &emsp;- 페이지나 섹션의 머리말을 위한 영역으로, 페이지 제목, 페이지를 소개하는 설명을 담는다. </li> <br>
        <li><strong>&lt;nav&gt; . . . &lt;/nav&gt;</strong><br>
        &emsp;- 하이퍼링크들을 모으거나, 페이지 내 목차를 만드는 용도로 쓰인다. </li> <br>
        <li><strong>&lt;section&gt; . . . &lt;/section&gt;</strong><br>
        &emsp;- 문서의 장 혹은 절을 구성하는 역할로, 일반 문서에서 여러 &lt;section&gt;를 둘수 있다. </li> <br>
        <li><strong>&lt;article&gt; . . . &lt;/article&gt;</strong><br>
        &emsp;- 본문과 연관 있지만, 독립적인 콘텐츠를 담는 영역으로, 담는 내용이 많을 경우 여러 &lt;article&gt;, 절을 둘수 있다.</li> <br>
        <li><strong>&lt;aside&gt; . . . &lt;/aside&gt;</strong><br>
        &emsp;- 본문에서 약간 벗어난 노트나 팁을 넣는다. 페이지의 오른쪽이나 왼쪽에 주로 배치한다. </li> <br>
        <li><strong>&lt;footer&gt; . . . &lt;/footer&gt;</strong><br>
        &emsp;- 꼬리말 영역, 주로 저자나 저작권 정보를 넣는다. </li> <br>
        <li><span id = "li_Sel" onclick ="OnImgView('img/SematicTag3.png','600px')" style="color:blue; padding : 0px;"><strong>* CSS를 더한 시맨틱 태그 예시</strong></span></li>
    </ul>`
}
//2-5. HTML_List_Table
function S_HTML_List_Table(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">리스트와 표</h3>
    <ul style = "list-style-type : circle;">
        <li><strong>순서 있는 리스트(ordered list) - &lt;ol&gt;. . . &lt;/ol&gt; </strong> <br>
        &emsp; - &lt;li&gt; : &nbsp;리스트의 아이템, &lt;/li&gt;는 생략가능 <br>
        &emsp; <span id = "li_Sel" onclick ="OnImgView('img/LT_ol.png','600px')" style="color:blue; padding : 0px;"><strong>* 순서 있는 리스트 예시</strong></span> </li><br>
        <li><strong>순서 없는 리스트(unordered list) - &lt;ul&gt;. . . &lt;/ul&gt;</strong> <br> 
        &emsp; <span id = "li_Sel" onclick ="OnImgView('img/LT_ul.png','600px')" style="color:blue; padding : 0px;"><strong>* 순서 없는 리스트 예시</strong></span> </li><br>
        <li><strong>정의리스트(definition list) - &lt;dl&gt;. . . &lt;/dl&gt;</strong> <br>
        &emsp; - &lt;dt&gt; : &nbsp;용어의 이름 <br> <span class="small-br"></span>
        &emsp; - &lt;dd&gt; : &nbsp;용어의 설명 <br><span class="small-br"></span>
        &emsp; <span id = "li_Sel" onclick ="OnImgView('img/LT_dl.png','600px')" style="color:blue; padding : 0px;"><strong>* 정의 리스트 예시</strong></span><br> </li>

        <li><strong>표(table) </strong> <span id = "li_Sel" onclick ="OnImgView('img/LT_table.png','600px')" style="color:blue; padding : 0px;"><strong>* 표 예시</strong></span><br>
        <ul style = "list-style-type : square;">
            <li>&lt;table&gt; : &nbsp;표 전체를 담는 컨테이너</li><span class="ssmall-br"></span>
            <li>&lt;caption&gt; : &nbsp;표 제목</li><span class="small-br"></span>
            <li>&lt;thead&gt; : &nbsp;헤딩 셀 그룹</li><span class="small-br"></span>
            <li>&lt;tfoot&gt; : &nbsp;바닥 셀 그룹</li><span class="small-br"></span>
            <li>&lt;tbody&gt; : &nbsp;데이터 셀 그룹</li><span class="small-br"></span>
            <li>&lt;tr&gt; : &nbsp;행. 여러 &lt;th&gt;, &lt;td&gt; 포함 </li><span class="small-br"></span>
            <li>&lt;th&gt; : &nbsp;열 제목(헤딩) 셀</li><span class="ssmall-br"></span>
            <li>&lt;td&gt; : &nbsp;데이터 셀</li>
            
        </ul></li> 
        
    </ul>`
}

//2-6. HTML_N_WebForm
function S_HTML_WebForm(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">웹폼과 폼 요소</h3>
    <img src="img/WebForm1.png" alt="5주차_p.3" title = "5주차_p.3" style="position: relative; height: 550px; margin: 0; padding: 0; float:right">
    <ul style = "list-style-type : circle; ">
        <li><strong>웹 폼</strong>
            <p>
                웹 페이지에서 사용자 입력을 받는 폼을 말한다.<span class="ssmall-br"></span>
                주로 로그인, 등록, 검색, 예약, 쇼핑 등의 기능을 수행하기 위해 쓰인다.<span class="ssmall-br"></span>
                <ul style = "list-style-type : square; ">
                    <img src="img/WebForm_form.png" alt="5주차_p.5" title = "5주차_p.5" style="position: relative; right:50px; margin: 0; padding: 0;">
                    <li>name 속성 - 폼의 이름을 지정한다.</li>
                    <li>action 속성 - 폼 데이터를 처리할 웹 서버 응용 프로그램의 이름을 지정</li>
                    <li>method 속성 - 폼 데이터를 웹 서버로 전송하는 형식을 말한다.</li>
                </ul>
            </p>
        </li>

        <li><strong>폼 요소</strong>
            <p>
                폼을 만드는 다양한 태그를 말한다. <span class="ssmall-br"></span>
                폼 요소 : &nbsp; &lt;input&gt;,&nbsp;
                        <span id = "li_Sel" onclick ="OnImgView('img/WebForm_textarea.png','500px')" style="color:blue;">&lt;textarea&gt;</span>,&nbsp; 
                        <span id = "li_Sel" onclick ="OnImgView('img/WebForm_select.png','600px')" style="color:blue;">&lt;select&gt;</span>,&nbsp;
                        <span id = "li_Sel" onclick ="OnImgView('img/WebForm_datalist.png','600px')" style="color:blue;">&lt;datalist&gt;</span> 등. 
                        <span class="ssmall-br"></span><br>
                <span id = "li_Sel" onclick ="OnImgView('img/WebForm_type.png','600px')" style="color:blue;"><strong>* 폼 요소의 종류</strong></span>
                
            </p>
        </li>
    </ul>
    
    `
}

//2-7. HTML_N_WebForm
function S_HTML_External(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">외부 요소</h3>
    &emsp;<strong>이미지, 하이퍼링크, 외부 CSS, JS 파일을 받아 올수 있다.</strong>
    <ul style = "list-style-type : circle;">
        <li><strong>이미지 삽입 </strong>
            - <span id = "li_Sel" onclick ="OnImgView('img/Ex_img.png','600px')" style="color:blue;"><strong>&lt;img &gt;</strong></span><br>
            현 html 파일의 위치를 기준으로 이미지 파일에 접근해서 참조하는 태그이다.<br>
            태그의 속성으로 이미지의 이름, 너비와 높이 등을 설정할수 있다.
        </li><br>
        <li><strong>하이퍼링크</strong>
             - <span id = "li_Sel" onclick ="OnImgView('img/Ex_a.png','600px')" style="color:blue;"><strong>&lt;a href = ""&gt;</strong></span><br>
            다른 웹페이지의 주소를 href에 담아서 현 html에서 접근할수 있도록 하는 태그이다.<br>
            태그의 속성으로 이미지의 이름, 너비와 높이 등을 설정할 수 있다.

        </li><br>
        <li><strong>CSS파일 참조</strong> 
            - <span id = "li_Sel" onclick ="OnImgView('img/Ex_link_css.png','500px')" style="color:blue;"><strong>&lt;link &gt;</strong></span><br>
            현 html 파일의 위치를 기준으로 CSS 파일에 접근해서 참조하는 태그이다.<br>
            태그의 속성으로 이미지의 이름, 너비와 높이 등을 설정할수 있다.<br>
            링크는 기본 <span style="color:blue">파란색</span>, 방문한 후엔 <span style="color:purple">보라색</span>, 링크를 누르고 있는 동안은 <span style="color:red">빨간색</span>이 된다.<br>
            <img src="img/Ex_link.png" title = "3주차_p.4" style="position: relative; left: 40px; height: 140px; margin: 0; padding: 0;">

        </li><br>
        <li><strong>JAVASCRIPT파일 참조</strong> 
            - <span id = "li_Sel" onclick ="OnImgView('img/Ex_script.png','550px')" style="color:blue;"><strong>&lt;script &gt;</strong></span><br>
            JAVASCRIPT를 직접 적용할수도 있지만, JAVASCRIPT 파일에 접근해서 그 내용을 참조 할수도 있다.<br>    
        </li><br>
    </ul>`
}
//3.CSS
//3-1. CSS_Base
function S_CSS_Base(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">CSS 스타일 시트 구성 </h3>
    <img src="img/CSS_stylesheet.png" title = "6주차_p.6" style="position: relative; left: 40px; height: 180px; margin: 0; padding: 0;">
    <ul style = "list-style-type : circle;">
            <li><strong>셀렉터 </strong>
                - CSS3 스타일 시트를 HYML 페이지에 적용하도록 만든 이름이다.
            </li><br>
            <li><strong>프로퍼티</strong>
                 - 스타일 속성 이름. 약 200개의 프로퍼티가 있다.

            </li><br>
            <li><strong>값</strong> 
                - 프로퍼티에 할당되는 값을 말한다.
            </li><br>
            <li><strong>주석문</strong> 
                - 스타일 시트 내에 붙이는 설명문으로 /* ...*/ 을<br>
                여러줄, 아무 위치에나 사용이 가능하다.
            </li><br>

            
        </ul>        `
}
//3-2. CSS_Make
function S_CSS_Make(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `

    <h3 style="padding: 5px;">HTML에서 CSS 스타일 시트 만드는 방법 </h3>
    <ol>
            <h4><li> &lt;style&gt; . . . &lt;/style&gt; 태그에 스타일 시트 작성하는 방법 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sc_1.png','600px')" style = "color:blue;">*예시</span></h4>
                <p>
                    &lt;style&gt; 태그는 &lt;header&gt;내에서만 사용하며, <br><span class="small-br"></span>
                    해당 태그는 여러 번 작성하는 것이 가능하다.
                </p>

            </li><br>
            <h4><li> style 속성에 스타일 시트을 작성하는 방법 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sc_2.png','600px')" style = "color:blue;">*예시</span></h4>
                <img src="img/CSS_Tag_Style.png" title = "6주차_p.10" style="position: relative; height: 140px; margin: 0; padding: 0;">
                
            </li><br>
            <h4><li>스타일 시트를 별도의 파일로 만들어서 HTML에서 참조하는 방법 </h4>
                <ul>
                    <li>&lt;link&gt; 태그 이용 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sc_3.png','600px')" style = "color:blue;"><strong>*예시</strong></span></li><br> 
                    <li>@import 이용 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sc_4.png','600px')" style = "color:blue;"><strong>*예시</strong></span></li> 
                </ul>
            </li><br>
        </ol>   
        &emsp;&emsp;<span id = "li_Sel" onclick = "F_CSS_priority()"><strong>* 3가지 방식의 스타일시트에는 우선순위가 있다.</strong></span>
        `
}
//3-3 selector
function S_CSS_sel(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
        <h3 style="padding: 5px;">셀렉터(selector)의 종류 </h3>
        <ul style = "list-style-type : circle;">
            <li><strong>태그 이름 셀렉터</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sel_1.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
            &emsp; - 태그 이름이 셀렉터로 사용되는 유형을 말한다. </li><br> 

            <li><strong>id 셀렉터와 class 셀렉터</strong><br><span class="small-br"></span>
            &emsp; - id 셀렉터:&nbsp; #으로 시작하는 이름의 셀렉터 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sel_2.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br>
            &emsp; - class 셀렉터:&nbsp; 점(.)으로 시작하는 이름의 셀렉터 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sel_3.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br>
            </li><br>

            <li><strong>전체 셀렉터와 속성 셀렉터</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sel_4.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
            &emsp; - 전체 셀렉터: 와일드 문자(*)를 사용하여 모든 태그에 적용시키는 셀렉터<br>
            &emsp;&emsp; 예시:&nbsp; *{color: green;} <span class="small-br"></span>
            &emsp; - 가상 셀렉터: HTML 태그의 특정 속성에 대해 값이 일치하는 태그에 스타일을 적용하는 셀렉터<br>
            &emsp;&emsp; 예시:&nbsp; input[type=text]{color:green;} 등
            </li><br>

            <li><strong>가상 클래스(pseudo-class)</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_sel_5.png','500px')" style = "color:blue;"><strong>*종류</strong></span><br><span class="small-br"></span>
            &emsp; - 어떤 조건이나 상황에서 스타일을 적용하도록 만든 셀렉터<br>
            &emsp;&emsp; 예시:&nbsp; li:hover {},&nbsp; a:visited {} 등 
            </li><br>
        </ul>
        `
}
//3-4 다양한 프로퍼티
function S_CSS_p(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
        <h3 style="padding: 5px;">프로퍼티의 종류 </h3>
        &emsp; - 다양한 프로퍼티를 적용해서 HTML를 디자인 할수 있다.
        <ul style = "list-style-type : circle;">
            <li><strong>색관련 프로퍼티</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_p_1e.png','400px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                <img src="img/CSS_p_1.png" title = "6주차_p.33" style="position: relative; left: 0px; height: 80px; margin: 0; padding: 0;">
            </li><br> 

            <li><strong>텍스트 프로퍼티</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_p_2e.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                <img src="img/CSS_p_2.png" title = "6주차_p.36" style="position: relative; left: 0px; height: 70px; margin: 0; padding: 0;">
            </li><br> 

            <li><strong>폰트 프로퍼티</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_p_3e.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                <img src="img/CSS_p_3.png" title = "6주차_p.40" style="position: relative; left: 0px; height: 35px; margin: 0; padding: 0;">
            </li><br>

            <li><strong>박스 모델</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_p_4.png','400px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                <img src="img/CSS_p_4e.png" title = "6주차_p.44" onmouseover = "OnImgView('img/CSS_p_4e.png', '500px')" onmouseout = "OffImgView()" style="position: relative; left: 0px; height: 120px; margin: 0; padding: 0;">
            </li><br>
        </ul>
        `
}
//3-5 박스 유형
function S_CSS_box(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
        <h3 style="padding: 5px;">박스 프로퍼티 </h3>
        &emsp; - 다양한 프로퍼티를 적용해서 HTML를 디자인 할수 있다.
        <ul style = "list-style-type : circle;">
            <li><strong>박스 유형 제어: display</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_b_1.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                &emsp; 박스의 배치를 변경하는 프로퍼티를 말한다. <br>
                &emsp; - display: block&nbsp; : 항상 새 라인에서 시작하는 배치 <br>
                &emsp; - display: inline : 새 라인을 만들지 못하고, 라인(line)으로 이어지는 배치<br>
                &emsp; - display: inline-block : inline과 block의 속성을 모두 같는 배치<br>
                &emsp; - display: none : 화면에 출력되지도 않고, 레이아웃의 공간도 차지하지 않는 배치
            </li><br> 

            <li><strong>박스의 배치: position </strong> <br><span class="small-br"></span>
                &emsp; - position:static<span> : 정적 배치로, 디폴트 배치. <br>
                &emsp; - position:relative : 상대 배치로, 기본 위치에서 값을 따라 이동하는 배치. <br>
                &emsp; - position:absolute : 절대 배치로, 브라우저 크기에 상관없는 배치 <br>
                &emsp; - position:fixed : 고정 배치로, 브라우저의 일정 위치에 고정되는 배치 <br>
                &emsp; - float : 유동배치로, float:left 혹은 float:right (position: <span style="color:red">X</span>)<br>
            </li><br> 

            <li><strong>z-index 프로퍼티</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_b_3e.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                여러 박스가 배치에 따라 겹치게 될때, 기본적으로는 코드상 <br>
                뒤에서 생성된 박스가 더 앞에 보여지게 된다. 이런 상황에서<br>
                "z-index : "에 값에 따라 박스가 보여지는 순서를 달리할수 있다. 
            </li><br>
        </ul>
        `
}
//3-6 동적 변화
function S_CSS_ani(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
        <h3 style="padding: 5px;">애니메이션 만들기 </h3>
        &emsp; - HTML 태그의 모양 변화를 시간 단위로 설정해서 애니메이션을 만든다.
        <ol style = "list-style-type : circle;">
            <li><strong>@keyfram <br><span class="small-br"></span>
                <img src="img/CSS_ani_1.png" title = "7주차_p.38" style="position: relative; left: 0px; height: 150px; margin: 0; padding: 0;">
            </li><br> 

            <li><strong>애니메이션 스타일 시트 작성</strong> <br><span class="small-br"></span>
                <img src="img/CSS_ani_2.png" title = "7주차_p.38" style="position: relative; left: 0px; height: 150px; margin: 0; padding: 0;">
            </li><br> 

            <li><strong>애니메이션 사례</strong> &emsp;<span id = "li_Sel" onclick = "OnImgView('img/CSS_p_3e.png','500px')" style = "color:blue;"><strong>*예시</strong></span> <br><span class="small-br"></span>
                <img src="img/CSS_ani_ex1.png" title = "7주차_p.39" onmouseover = "OnImgView('img/CSS_ani_ex1.png', '500px')" onmouseout = "OffImgView()" style="position: relative; left: 0px; height: 50px; margin: 0; padding: 0;">
                <img src="img/CSS_ani_ex2.png" title = "7주차_p.41" onmouseover = "OnImgView('img/CSS_ani_ex2.png', '500px')" onmouseout = "OffImgView()" style="position: relative; left: 0px; height: 50px; margin: 0; padding: 0;">
            </li><br>
        </ol>
        `
}

//4.JAVASCRIPT
function S_JS(){

}

