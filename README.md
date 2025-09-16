<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>week2</title>
</head>
<body>
   <header>
    <!-- 제목(주석)-->
     <h1>안녕</h1>
     <h2>하세</h2>
     <h3>요!</h3>

    <h1>반갑습니다.</h1>
   </header>
   
   <hr>
   <nav>
      <div style="background-color: aliceblue; width: 400px; height: 200px; padding: 20px;">
         <!-- 자기소개 넣기 p-단락// 앞뒤로 띄어쓰기 구분이 된다-->
         <p>저는 충대에 재학중이며, <br>웹 프로그래밍 기초를 듣고 있습니다.</p>
     

         <!-- 하이퍼링크, 밑에 충남대학교가 링크를 담는 트리거가 된다.-->
         <p><h3><span style="color:blue"> 충남대학교 사이트</span></h3>
         <a href="https://plus.cnu.ac.kr/html/kr/intro.html">충남대학교 접근하기</a>,
         <!-- a:blank는 이 하이퍼링크를 열면 새로운 창이 열린다!-->
         <a href="http://plus.cnu.ac.kr/html/kr/intro.html" target="_blank">충남대학교 새창열기 </a> </p>
      </div>
   </nav>

   <section>
    <!-- 이미지 담기-->
     <h2>나의 이미지</h2> <br>
     <img src="img/chacha.png" width="200" height="200" alt="자기소개 사진"> 
     <img src="img/chacha.png" width="200" height="200" alt="자기소개 사진"> <br>
     <img src="img/chacha.png" width="200" height="200" alt="자기소개 사진">
     <img src="img/chacha.png" width="200" height="200" alt="자기소개 사진">
     <!--파일의 위치에서 폴더를 타고 들어간 형태, 같은 위치에 있다면 img/가 필요없다!-->
   </section>

   <aside>
      <pre style="background-color:beige; padding: 20px;">
      9월 16일에 배운것들을 정리해 보도록 하겠습니다.
      먼저 <span style="color:red">시맨틱</span> 태그입니다. 시맨틱 태그는 사이트의 
      각 부분을 <i>header, nav, section, aside, footer</i> 등으로 구분지어, 
      구조화하는 것을 말합니다.
      이중에서 section은 내부를 여러 <span style="color:blue">절(article)</span>로 또다시 
      나눌 수 있습니다.

      다음으로 배운것은 <span style="color:red">블록태그</span>와 <span style="color:red">인라인 태그</span>입니다.
      블록태그는 <span style="color:purple">&ltdiv&gt</span>를 이용한 태그로 하나의 블록을 만들어 나눌수 있습니다.
      이렇게 나뉘는 블록들은 앞뒤에 줄바꿈이 추가되어 하나의 절로 구분됩니다. 
      인라인 태그는 블록 내부에 삽입되어 블록의 일부로 출력됩니다. 주로 <span style="color:purple">&ltspan&gt</span>을
      이용하며, 블록의 내부로 삽입되기에 띄어쓰기나 줄바꿈이 실행되지 않습니다. 
      블록 태그나 인라인 태그 전부 <span style="color:blue">CSS</span>인 <span style="color:purple">style</span>을 적용하여 색상을 갖는 박스를 만들거나,
      글씨 색상을 바꿀수 있습니다.
      </pre>

   </aside>

   <footer>
    <!-- 리스트-->
     <h2>관심 분야</h2>
     <ul>
        <li>웹 개발</li>
        <li>데이터 분석</li>
        <li>인공지능</li>
     </ul>
     <h2>일상</h2>
     <ol>
        <li>운동하고</li>
        <li>공부하기</li>
        <li>숨쉬기</li>
     </ol>
   </footer>

</body>
</html> 
