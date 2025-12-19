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
//4-1. JS_base
function S_JS_base(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">HTML에서 자바스크립트 코드 작성방법 </h3>
    <ol>
            <h4><li> HTML 태그의 이벤트 리스너 속성에 작성하는 방법 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_base1.png','600px')" style = "color:blue;">*예시</span></h4>
                    HTML 태그 내에서 코드와 현재 태그를 연결하는 이벤트 리스너라는 속성으로 작성하여, 자바스크립트의 기능을 사용한다. <br><span class="small-br"></span>
                    &emsp;- 예시:&nbsp; onmouseover="", onclick="", onmouseout="" 등 <br>
                </li>
            <h4><li> &lt;script&gt; . . . &lt;/script&gt; 태그에 코드를 작성하는 방법 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_base2.png','600px')" style = "color:blue;">*예시</span></h4>
                    &lt;script&gt; 태그는 &lt;head&gt;나 &lt;body&gt; 내 어디든 작성 가능하며 여러 번 작성하는 것도 가능하다.
                    
            </li>
            <h4><li> 자바스크립트 파일에 작성하는 방법 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_base3.png','600px')" style = "color:blue;">*예시</span></h4>
                확장자로 .js를 갖는 자바스크립트 파일을 만들어 저장하고, 해당 파일을 HTML에서 참조하는 방법이다.<br><span class="small-br"></span>
                <img src="img/JS_base_js.png" title = "8주차_p.9" style="position: relative; height: 80px; margin: 0; padding: 0;">
            </li>
    </ol>   
    `
}

//4-2. JS_base code
function S_JS_bc(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">기본 요소 코드</h3>
        <ul style = "list-style-type : circle;">
            <li><strong> <span id="li_Sel" onclick="F_JS_bc()">자바스크립트로 HTML 콘텐츠 출력</span> &emsp; <span id = "li_Sel" onclick = "OnImgView('img/JS_bc1.png','400px')" style = "color:blue;">*예시</span></strong> <br>
            &emsp;- document.write() : 괄호 안에들어가는 문자열을 HTML의 문법으로 반영한다.<br><span class="small-br"></span>
            &emsp;- document.writein() : write() 동일하다. 추가로 줄바꿈이 같이 실행된다.<br>
            </li><br><br> 
            <li><strong>프롬프트 다이얼로그 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_bc2.png','400px')" style = "color:blue;">*예시</span></strong><br>
            &emsp;- prompt("메시지", "디폴트 입력값") : "메시지"를 다이얼로그로 출력하고, 사용자로부터 문자열을 입력 받아 반환한다.<br>
            &emsp;<span style="color:red">prompt를 사용하면 사용자로 부터 입력 받은 문자열을 코드 내에서 활용할수 있다.</span>
            </li> <br><br>
            <li><strong>확인 다이얼로그 </strong><br>
            &emsp;- <span id = "li_Sel" onclick="F_JS_bc_con()">confirm("메시지")</span> :  "메시지"를 다이얼로그로 출력하고 확인(true)/취소(false)로 받아서 반환한다.</li> <br><br>
            <li><strong>경고 다이얼로그 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_bc4.png','350px')" style = "color:blue;">*예시</span></strong><br>
            &emsp;- alert("메시지") :  "메시지"를 다이얼로그로 출력한다.</li> <br><br>
        
        </ul>   
        `
}

//4-3. JS_let
function S_JS_let(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">식별자와 변수</h3>
        <ul style = "list-style-type : circle;">
            <li>변수(variable)는 데이터를 저장하는 공간이고, 이 공간에 붙여지는 이름을 식별자(identifier)이다.<br>
                <img src="img/JS_let1.png" title = "8주차_p.17" onmouseover = "OnImgView('img/JS_let1.png', '500px')" onmouseout = "OffImgView()" style="position: relative; top: 10px; height: 200px; margin: 0; padding: 0;">
            </li><br>
            <li><strong>변수 선언</strong><br>
            &emsp;- var & let 키워드 :  변수를 선언하는 키워드로, 변수 타입을 지정하지 않아도 알아서 저장된다.<br>
            &emsp;- const 키워드 : 상수를 선언하는 키워드로, 상수는 값이 선언된 후에 수정이 불가하다. <br>
            &emsp;&emsp; <span style = "color:red">상수는 블록 범위 에서만 사용한다.</span>
            </li> <br><br>
            <li><strong>전역변수, 지역변수, 블록 변수</strong><br>
            &emsp;- 전역변수 :  프로그램 전역에서 사용되는 변수로, 함수의 밖에서 선언된 변수를 말한다.<br>
            &emsp;- 지역변수 :  함수 내에 선언된 변수로, 함수의 실행동안만 사용 가능하다.<br>
            &emsp;- 블록변수 :  조건문, 반복문(블록) 내에서 선언된 변수로, 해당 블록 내에서만 사용 가능하다. 
            </li> <br>
        
        </ul>   
        `
}
//4-4. JS_cal
function S_JS_cal(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">자바스크립트의 연산</h3>
        <img src="img/JS_cal0.png" title = "9주차_p.3" onmouseover = "OnImgView('img/JS_cal0.png', '300px')" onmouseout = "OffImgView()" style="position: relative; left: 20px; height: 120px; margin: 0; padding: 0;">
        <ul style = "list-style-type : circle;">
            <li><strong>산술 연산자 &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_cal1.png','500px')" style = "color:blue;">*예시</span></strong><br>
            &emsp;더하기(+),빼기(-), 곱하기(*), 나누기(/), 나머지(%)를 구하는 것으로, 결과는 항상 실수가 나온다.
            </li> <br>
            <li><strong>증감 연산자: ++, -- &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_cal2.png','300px')" style = "color:blue;">*예시</span></strong><br>
            &emsp;- 전위연산자 :  1증가(++)와 1감소(--)가 해당 코드가 작성된 순간에 진행된다.<br>
            &emsp;- 후위연산자 :  1증가(++)와 1감소(--)가 해당 코드가 작성된 다음줄부터 반영된다.
            </li> <br>
            <li><strong>대입 연산자, 비교 연산자, 논리 연산자</strong><br>
            &emsp;- 대입 연산자: 오른쪽 식의 결과를 왼쪽 변수에 대입하는 연산자로,<br>
            &emsp;여러 <span id = "li_Sel" onclick = "OnImgView('img/JS_cal4.png','300px')" style = "color:blue;">종류</span>가 있다. 
            &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_cal3.png','600px')" style = "color:blue;"><strong>*예시</strong></span><br><br>
            &emsp;- 비교 연산자: 두 값을 비교하여 true/false를 반환하는 연산자로,<br> 
            &emsp;여러 <span id = "li_Sel" onclick = "OnImgView('img/JS_cal5.png','200px')" style = "color:blue;">종류</span>가 있다. 
            &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_cal6.png','600px')" style = "color:blue;"><strong>*예시</strong></span><br><br>
            &emsp;- 논리 연산자: 두 값을 논리로 비교하여 true/false를 반환하는 연산자로,<br> 
            &emsp;여러 <span id = "li_Sel" onclick = "OnImgView('img/JS_cal7.png','200px')" style = "color:blue;">종류</span>가 있다. 
            &emsp;<span id = "li_Sel" onclick = "OnImgView('img/JS_cal8.png','600px')" style = "color:blue;"><strong>*예시</strong></span><br>
            </li> <br>
        
        </ul>   
        `
}
//4-5. JS_if
function S_JS_if(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">조건문과 반복문</h3>
        <ul style = "list-style-type : circle;">

            <li><strong>조건문 - if문, switch문 </strong> <br>
            &emsp;- if,if-else문 : if문의 조건을 하나씩 확인하며 맞는 조건의 코드를 실행하는 조건문이다.<br><br>
            &emsp;- switch문 : 하나의 변수를 받아 해당 변수의 값의 조건에 따라 코드를 실행시키는 조건문이다.<br>
            &emsp; -> 조건문을 활용하기 위해선 <span id="li_Sel" onclick="F_JS_if_cb()">continue와 break을 알아야한다.
            </li><br>
            <li><strong>반복문 - <span id = "li_Sel" onclick = "OnImgView('img/JS_if1.png','600px')" style = "color:blue;">for문, while문, do~while문</span></strong><br>
            &emsp;- for문 :  초기문/ 조건식/ 반복 후 작업을 통해 내용을 반복 실행한다. <br><br>
            &emsp;- while문 :  조건식만을 가지고 내용을 반복 실행한다.<br><br>
            &emsp;- do-while문 :  while문과 같이 조건식으로 반복 실행하지만, <br>
            &emsp;<span id="red">do-while문은 조건에 상관 없이 일단 한번 내용을 실행하는 차이가 있다.</span>
            </li> <br>
            <li><strong><span id = "li_Sel" onclick = "F_JS_if()" style = "color:blue;">
            조건문과 반복문의 사용 예시를 확인하자</span></strong><br> 
            </li> <br>
        
        </ul>   
        `
}
//4-6. JS_fct
function S_JS_fct(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">함수(function)</h3>
        &emsp;함수란 값을 입력을 받아서 특정한 작업을 수행하고 그 결과를 반환하는 <span style = "color:red;">하나의 기능을 가진 박스</span>를 말한다.<br>
        <ul style = "list-style-type : circle;">
            
            <li><strong>함수의 구성과 선언(anonymous function) </strong> <br>
                <img src="img/JS_fct1.png" title = "10주차_p.10" onmouseover = "OnImgView('img/JS_fct1.png', '300px')" onmouseout = "OffImgView()" style="position: relative; left: 20px; height: 100px; margin: 0; padding: 0;">
                <img src="img/JS_fct2.png" title = "10주차_p.10" onmouseover = "OnImgView('img/JS_fct2.png', '300px')" style="position: relative; left: 20px; height: 100px; margin: 0; padding: 0;">
            </li><br>
            <li><strong>무명함수(anonymous function) </strong> <br>
            &emsp; 자바스크립트에서 함수 이름으 주지 않고 한 번만 사용하는 경우도 많다.<br>
            &emsp; 이것을 무명 함수라고 한다.<br>
                <img src="img/JS_fct3.png" title = "10주차_p.15" onmouseover = "OnImgView('img/JS_fct3.png', '300px')" style="position: relative; left: 20px; height: 100px; margin: 0; padding: 0;">

            </li><br>
            <li><strong>화살표 함수(arrow fuction) </strong> <br>
            &emsp; 함수를 좀더 간단하게 만드는 방법으로,
            &emsp; <span id="red">짧은 함수 구문</span> 만으로 함수를 선언할수 있다. <br>
                <img src="img/JS_fct4.png" title = "10주차_p.15" onmouseover = "OnImgView('img/JS_fct4.png', '300px')" onmouseout = "OffImgView()" style="position: relative; top: 5px; left: 20px; height: 100px; margin: 0; padding: 0;">

            </li><br>
            
        
        </ul>   
        `
}
//4-6. JS_ob
function S_JS_ob(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">객체(object)</h3>
        <img src="img/JS_ob1.png" title = "11주차_p.5" onmouseover = "OnImgView('img/JS_ob1.png', '500px')" style="float:right; position:relative; height:200px; right:100px; bottom:50px; margin: 0; padding: 0;">
        
        &emsp; 객체란 데이터(data)와 동작(action)을 가지는 것을 말한다. 객체 안에는 데이터를 담는 변수를 속성(property)라고 하고,<br> 
        &emsp; 객체 안의 동작을 수행하는 함수를 메소드(method)라고 부른다. <span style = "color:red;">하나의 기능을 가진 박스</span>를 말한다.<br>

        <h3 style="padding: 5px;">내장 객체(built-in object) : 자바스크립트에 내장된 객체로, Date, String, Array등이 있다.</h3>
        <ul style = "list-style-type : circle;">
            <li><strong>Date 객체 </strong> <br>
                &emsp; Date 객체는 날짜와 시간을 저장하고 있는 객체이다.<br> 
                &emsp; <span id = "li_Sel" onclick = "OnImgView('img/JS_ob2.png','400px')" style = "color:blue;">선언</span>과 
                <span id = "li_Sel" onclick = "OnImgView('img/JS_ob3.png','500px')" style = "color:blue;">메소드</span>를 확인하자.
            </li><br>
            <li><strong>String 객체 </strong> <br>
                &emsp; String 객체는 텍스트를 저장하고 조작하는 객체이다..<br> 
                &emsp; <span id = "li_Sel" onclick = "OnImgView('img/JS_ob4.png','400px')" style = "color:blue;">선언</span>과 
                <span id = "li_Sel" onclick = "OnImgView('img/JS_ob5.png','500px')" style = "color:blue;">메소드</span>를 확인하자.
            </li><br>
            <li><strong>Array 객체 </strong> <br>
                &emsp; Array 객체는 한번에 다양한 자료형을 혼합하여 담을수 있는 객체이다..<br> 
                &emsp; <span id = "li_Sel" onclick = "OnImgView('img/JS_ob6.png','300px')" style = "color:blue;">선언</span>과 
                메소드를 확인하자.<br><br>
                &emsp;->메소드: <span id = "li_Sel" onclick = "OnImgView('img/JS_ob_m1.png','400px')" style = "color:blue;">concat(),</span>
                         <span id = "li_Sel" onclick = "OnImgView('img/JS_ob_m2.png','500px')" style = "color:blue;">push(), pop(),</span>
                         <span id = "li_Sel" onclick = "OnImgView('img/JS_ob_m3.png','500px')" style = "color:blue;">sort(),</span>
                         <span id = "li_Sel" onclick = "OnImgView('img/JS_ob_m4.png','500px')" style = "color:blue;">slice()</span> 등

            </li><br>
            
            
        
        </ul>   
        `
}
//4-7. JS_uob
function S_JS_uob(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">사용자 객체</h3>
        &emsp; 자바스크립트는 사용자가 직접 객체를 생성할수도 있다. <br>
        &emsp; 각 생성 방법은 예시를 보며 이해하자.
        <ul style = "list-style-type : circle;">
            
            <li><strong>객체 리터럴 사용 </strong> <br>
                <img src="img/JS_uob1.png" title = "12주차_p.3" onmouseover = "OnImgView('img/JS_uob1.png', '400px')" onmouseout = "OffImgView()" style="position: relative; left: 20px; top:5px; height: 200px; margin: 0; padding: 0;">
            </li><br>
            <li><strong><span id = "li_Sel" onclick = "OnImgView('img/JS_uob_s.png','500px')" style = "color:blue;">생성자 함수를 이용한 객체 생성</span> :</strong>  객체 생성과 동시에 속성을 할당할수 있다.<br>
            <img src="img/JS_uob2.png" title = "12주차_p.7" onmouseover = "OnImgView('img/JS_uob2.png', '500px')" onmouseout = "OffImgView()" style="position: relative; left: 20px; top:5px; height: 200px; margin: 0; padding: 0;">
            </li><br>
            
        
        </ul>   
        `
}
//4-8. JS_dom
function S_JS_dom(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = ""; 

    s.innerHTML = `
    <h3 style="padding: 5px;">
    <span id = "li_Sel" onclick = "OnImgView('img/JS_dom1.png','600px')" style = "color:blue;">
    문서 객체 모델(DOM)</span></h3>
        &emsp; DOM(Document Object Model)는 자바스크립트가 HTML 문서에 접근하여 <br>
        &emsp; 수정할수 있도록, HTML요소를 객체로 만들어놓은 것이다.
        <ul style = "list-style-type : circle;">
            
            <li><strong>innerHTML, innerText : </strong> 태그의 콘텐츠를 가져오거나 설정할때 사용한다.<br>
                <img src="img/JS_dom2.png" title = "12주차_p.19" onmouseover = "OnImgView('img/JS_dom2.png', '250px')" onmouseout = "OffImgView()" style="position: relative; left: 20px; top:5px; height: 200px; margin: 0; padding: 0;">
            </li><br>
            <li><strong>HTML 요소 찾기 :</strong>  동적인 웹페이지를 만들기 위해 요소를 찾는 방법이다.<br>
            <ol><br>
                <li> <span id = "li_Sel" onclick = "OnImgView('img/JS_dom3.png','500px')" style = "color:blue;">ID로 HTML 요소 찾기</span></li><br>
                <li> <span id = "li_Sel" onclick = "OnImgView('img/JS_dom4.png','500px')" style = "color:blue;">태그로 HTML 요소 찾기</span></li> <br>
                <li> <span id = "li_Sel" onclick = "OnImgView('img/JS_dom5.png','500px')" style = "color:blue;">CSS 선택자로 HTML 요소 찾기</span></li> <br>
            </ol>
            </li><br>
            
        
        </ul>   
        `
}