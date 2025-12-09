//section 함수


//1.Web
function S_Web(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">웹프로그래밍</h3>
        <img src="img/Web_base.png" alt="오리엔테이션_p.6", title = "오리엔테이션_p.6" style="position: relative; left: 200px; height: 300px; clip-path: inset(10px 10px 30px 10px);">
        <div style = "margin: 20px 50px; line-height: 1.6; margin-top: 0;">
            &emsp;웹프로그래밍은 인터넷에서 동작하는 웹사이트와 웹 애플리케이션을 만드는 기술을 말한다. 우리가 매일 사용하는 뉴스 사이트, 쇼핑몰, 포털 서비스, 블로그 등은 <br>
            모두 웹프로그래밍으로 만들어진다. 먼저, <span id = "upsel" onclick="F_Web_HTML()" style="color:blue; padding : 0px;">HTML</span>은 <span style="color:red">웹페이지의 구조를 만드는 가장 기본적인 언어</span>이다. HTML은 여러 태그(tag) 로 구성되며, 태그는 &lt;title&gt;과 <br>
            같은 형태의 꺾쇠괄호(&lt; &gt;) 안에 들어 있는 단어로 작성된다. 웹의 모든 구조(제목, 문단, 표, 이미지 위치 등)는 HTML 태그로 정의된다. <br>
            &emsp;<span id = "upsel" onclick="F_Web_CSS()" style="color:blue; padding : 0px;">CSS</span>는 HTML로 만들어진 <span style="color:red">뼈대에 색을 칠하고, 모양을 다듬고, 배치를 조정하는 디자인 작업</span>에 해당합니다. 색상 및 배경 설정, 텍스트 스타일, 폰트 지정, 박스 모델 <br>
            (Box Model)을 통한 크기·여백 조정, 비주얼 효과 및 애니메이션 등 다양한 기능을 제공한다. <br>
            &emsp;HTML이 구조를 만들고, CSS가 장식을 입힌다면, <span id = "upsel" onclick="F_Web_JS()" style="color:blue; padding : 0px;">JavaScript</span>는 웹페이지에 생명과 기능을 부여하는 역할을 한다. 버튼을 눌러 메뉴가 열리고, 스크롤하면 애니메이 <br>
            션이 나타나고, 폼 입력값을 검사하거나, 인터넷에서 데이터를 불러오는 모든 기능은 JavaScript로 구현된다. <span style="color:red">즉, JavaScript는 웹페이지가 사용자와 상호작용할 수  <br>
            있도록 만드는 핵심 언어</span>이다.<br>
            <span style="color:purple">*HTML, CSS, JS의 경우 코딩 중 발생한 에러에 대해 무시하고 일단 실행하는 방식으로 작동한다. 그렇기에 작은 에러에도 민감하게 반응하는 다른 언어와 달리 디버깅<br>
            에서 에러를 찾기가 번거롭다.</span>
        </div>`    
}

//2.HTML
//2-1.HTML_Base
function S_HTML_Base(){
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">HTML의 기본틀</h3>
        <ul style = "list-style-type : none;">
            <li><strong>&lt!DOCTYPE html&gt</strong></li> //문서 형식 선언; 해당문서가 HTML5 문서임을 알리는 선언 <br><br>
            <li id = "li_Sel" onclick="F_HTML_Annotation()"><strong>&lt!-- 주석넣기--&gt</strong></li> //주석; 개발자의 이해와 공유를 위한 메모로, 화면에 출력되지 않는다.<br><br>
            <li><strong>&lthtml&gt</strong></li> //html 태그; 페이지 구조의 시작과 끝을 알리는 태그<br><br>
            <li id = "li_Sel" onclick="F_HTML_Head()"><strong>&lthead&gt</strong></li> //head 태그; 눈에 보이지 않는 정보(메타데이터)를 담는 영역<br>
            <li>&emsp;<strong>&lttitle&gtDocument&lt/title&gt</strong> &emsp; //브라우저 탭에 표시되는 페이지 제목을 설정</li> <br>
            <li>&emsp;<strong>&ltlink rel="stylesheet" href="__.css"&gt</strong> &emsp; //CSS파일을 참조하여 style을 가져온다.</li>  <br>
            <li>&emsp;<strong>&ltscript src="__.js"&gt&lt/script&gt</strong> &emsp; //JS파일을 참조하여 script를 가져온다.</li>  <br>
            <li id = "li_Sel" onclick="F_HTML_Head()"><strong>&lt/head&gt</strong></li><br>
            <li id = "li_Sel" onclick="F_HTML_Body()"><strong>&ltbody&gt</strong></li>  //body 태그; 실제 화면에 보이는 모든 내용(텍스트, 이미지, 버튼 등)을 넣는 영역
            <li id = "li_Sel" onclick="F_HTML_Body()"><strong>&lt/body&gt</strong></li>
            <li><strong>&lt/html&gt</strong></li>
        </ul>
        
        `

        // <p id = "blueline" style = "color:blue;">*파란 글씨는 클릭가능</p>
}
//2-2.HTML_BaseTag
function S_HTML_BaseTag(){ 
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">기본 요소 태그</h3>
    <img src="img/BaseTag.png" alt="3주차_p.4", title = "3주차_p.4" style="position: relative; left: 40px; height: 140px; margin: 0; padding: 0;">
        <ul style = "list-style-type : none;">
            <li><strong>&lt;h1&gt;&nbsp;~&nbsp;&lt;h6&gt;</strong> <br>
            //문단 제목용 태그: 글씨 크기가 다른 태그들로, h1에서 h6로 갈수록 글씨 크기가 작아진다. 하나의 박스로 인식되어, 앞뒤로 줄바꿈이 발생한다. </li> <span class="small-br"></span>
            <li><strong>&lt;p&gt; . . . &lt;/p&gt;</strong><br>
            //단락 태그; 하나의 단락을 형성하기 위한 태그이다. 코드상의 줄바꿈은 적용되지 않기에 다음의 &lt;br&gt;이 따로 필요하다. </li> <span class="small-br"></span>
            <li><strong>&lt;hr&gt;</strong><br>
            //수평선을 그어주는 태그: 윗줄과 아랫 줄의 구분을 지어주는 수평선을 표현하는 태그이다.</li> <span class="small-br"></span>
            <li><strong>&lt;br&gt;</strong><br>
            //줄바꿈 태그: 코드 상의 줄바꿈은 출력시 표현되지 않기에, 줄바꿈을 표현해주는 태그이다. </li> <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_Pre()"><strong>&lt;pre&gt; . . . &lt;/pre&gt;</strong></li>
            //개발자의 포맷을 그대로 출력하는 태그; 일일히 &lt;br&gt;이나 특수 엔터티표현을 두지 않아도 코드 상의 문자구조를 그대로 페이지에 표현해주는 태그를 말한다. <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_Textdesign()"><strong>텍스트를 꾸미기 위한 태그</strong> </li> 
            //글씨를 진하게하거나, 글씨체를 바꾸고, 강조하는 등의 효과를 주는 태그들을 말한다. <span class="small-br"></span>
            <li id = "li_Sel" onclick="F_HTML_SC()"><strong>특수문자, 기호, 심볼 삽입</strong></li>
            //특수문자나 기호 등은 HTML내에서 각각 다른 기능을 가지거나, 키보드로 표현하기 어려울수 있다. 그렇기에 그런 문자들을 입력하기 위한 엔터티표현을 말한다. 
        </ul>`
}
//2-3.HTML_BlockTag
function S_HTML_BlockInlineTag(){ 
    const s = document.getElementsByTagName("section")[0];
    s.innerHTML = "";  //부가 설명의 내용도 초기화

    s.innerHTML = `
    <h3 style="padding: 5px;">블록 태그와 인라인 태그</h3>
        <ul style = "list-style-type : circle;">
            <li><strong>태그는 블록 태그와 인라인 태그로 구분된다.</strong>
                <p>
                    블록 태그의 예: &lt;p&gt;,&nbsp; &lt;h1&gt;,&nbsp; &lt;div&gt;,&nbsp; &lt;ul&gt; <br><span class="small-br"></span>
                    인라인 태그의 예: &lt;strong&gt;,&nbsp; &lt;a&gt;,&nbsp; &lt;img&gt;,&nbsp; &lt;span&gt;
                    
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
//2-4 HTML_List_Table
function S_HTML_List_Table(){

}

//2-5 HTML_N_WebForm
function S_HTML_WebForm(){

}
//3.CSS
function S_CSS(){

}

//4.JAVASCRIPT
function S_JS(){

}

