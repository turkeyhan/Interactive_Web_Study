# 6. 자바스크립트로 웹 페이지 제어하기  
  
## 6-1. 자바스크립트 시작하기  
* console.log(): console에 출력하기  
* body안에 script를 사용해 사용가능(직접코딩 or src로 가져오기)  
* 외부 js파일을 head에 script defer src=""을 선언해 사용가능  
  
## 6-2. 자바스크립트로 HTML 요소 선택하기  
* document.querySelector(): 요소 선택하기, #은 id, .은 class  
* document.querySelectorAll(): 요소를 모두 선택하기  
    * for of 문  
    ```javascript
    for(let "iterator" of "Referencing Group"){
        statements;
    }
    ```
    * for문  
    ```javascript
    for(let "iterator"; "Condition"; "What to do after each loop"){
        statements;
    }
    ```
* 부모. 자식, 형제 요소 선택하기  
    * var1에 var2의 자식요소들을 저장  
    ```javascript
    const var1 = var2.children;
    ```
    * var1에 var2의 직계부모 요소를 저장  
    ```javascript
    const var1 = var2.parentElement;
    ```
    * var1에 var2의 가장 가까운 상위 부모 요소 저장  
    ```javascript
    const var1 = var2.closest("element");
    ```
    * var1에 var2의 이전 형제 요소 저장  
    ```javascript
    const var1 = var2.previousElementSibling;
    ```
    * var1에 var2의 다음 형제 요소 저장  
    ```javascript
    const var1 = var2.nextElementSibling;
    ```
  
## 6-3. 자바스크립트로 스타일 제어하기  
* querySelector로 Variable에 id나 class를 얻어 Variable.style.attribute를 이용해 제어 가능  
* -로 연결된 속성은 camelCase로 -다음 문자를 대문자로 사용  
  
## 6-4. 자바스크립트로 이벤트 연결하기  
* addEventListener("Event Name", (Sending value) => {statements});
* preventDefault(): 기본 기능 실행하지 않기  
* hover event 연결, mouseenter와 mouseleave를 이용해 구현    
* 반복문으로 event를 한번에 연결하기 가능, 그리고 반복문에서 .currentTarget.innerText 이용해 내용 접근  
* 백틱(`)과 ${Variable name}을 이용해 변수값을 사용  
  
## 6-5. 자바스크립트로 클래스 제어하기  
* addEventListener와 Click을 사용하여 상호작용하기  
    * .classList: 해당 요소가 가지고 있는 class의 List  
    * .classList.contains: 해당 class을 포함하면 true, 아니면 false  
    * .classList.add(): classList에 추가  
    * .classList.remove(): classList에서 제거  
    * .toggle: class를 포함하면 classList.remove(), 그렇지 않으면 classList.remove()  
  
## 6-6. 함수를 활용하여 코드 패키징하기  
* 새로운 건 없고 그냥.. 하면 됨.. 위에서 배운 것 활용해서..  
  
## 6-7. HTML 요소의 속성값 제어하기  
* .getAttribute: 해당하는 속성값 얻기  
* .setAttribute: 해당하는 속성값을 새로운 속성값으로 변경하기  
  
## 6-8. 자바스크립트로 사용자 브라우저 판단하기  
* navigator.userAgent: 브라우저의 navigator객체 안의 userAgent는 브라우저의 정보를 저장하고 있음
* /trident/i: 'trident' 문자열이 대소문자 구분없이 포함되어 있는지 확인하는 정규식, 'trident'는 Internet Explorer 브라우저의 레이아웃 엔진인 Trident임  
