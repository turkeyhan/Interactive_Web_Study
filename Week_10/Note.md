# 13. 핀터레스트 스타일의 반응형 웹 갤러리 제작하기  
## Tips  
* 명령어 사용해 한번에 중복되는 부분 만들기  
    * Example  
    ```html
    section>article*20>div>img[src="img/p$.jpg"]+h2>lorem3^p>lorem7
    ```  
  
* 사용자 화면 크기에 따라 css 변경하기  
    * Example  
    ```css
    @media screen and (max-width:이 크기보다 작을 때){
        변경할 내용
    }
    ```  
  
* javascript 함수화: 이것은 다른 언어와 다를게 없어서 Pass  
