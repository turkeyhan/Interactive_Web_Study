# 4. 인터렉티브 웹을 위한 CSS 다루기  
  
## 4-1. 콘텐츠 모양을 자유롭게 변형하기  
* transform의 2D변형 속성  
    * scale: 확대  
    * skewX: 비틀기  
    * translateY: 상하로 이동  
    * rotate: 회전  
  
* transform의 3D변형 속성  
    * rotateX: x축으로 회전  
    * rotateY: y축으로 회전  
    * translateZ: z축으로 이동  
    * origin: right, left, top, bottom 등을 이용해 가로축 세로축의 기준점 설정  
  
* perspective 속성: 작을수록 3D변형 커짐, 원근감 설정 및 공간 왜곡  

## 4-2. 사용자 행동에 반응하는 전환 효과 만들기  
* transition 속성
    * property: 전환 속성 지정  
    * duration: 지속 시간  
    * timing-function: 가속도  
    * delay: 지연 시간  

* :hover는 마우스를 올렸을 때, 반응하는 선택자  
  
## 4-3. 자동으로 움직이는 애니메이션 효과 만들기  
* animation 속성  
    * name: 애니메이션 지정  
    * duration: 지속 시간  
    * timing-fuction: 가속도  
    * iteration-count: 반복 횟수  
    * delay: 지연 시간  
    * play-state: 모션 정지 또는 실행  
  
* @keyframes: 애니메이션 등록 및 이름 지정
    * 0%: 모션의 시작  
    * 100%: 모션의 끝  

## 4-4. 벡터 이미지 파일 제어하기  
* 비트맵 이미지와 벡터 이미지의 차이: 용량, 확대 차이, 그리는 방식  
* SVG(Scalable Vector Graphics) 이미지: 벡터 이미지, 벡터 이미지는 px 단위가 아닌 비율 단위 사용(1기준)  
* path 요소  
    * fill: 배경색  
    * stroke: 선의 색  
    * stroke-width: 선의 굵기  
    * stroke-dasharray: 선의 간격  
    * stroke-dashoffset: 선의 시작 위치 지정  

* viewBox 속성값: "x좌표 y좌표 너비 높이"로 제어  
  
## 4-5. 화면 너비에 따라 웹 페이지 디자인 변경하기  
* @media screen and (max-width: Npx): 0~Npx의 웹 브라우저 폭만 지정한 CSS 우선 적용, N이 낮은 것을 우선 적용함  

# 5. flex 방식으로 레이아웃 만들기  
  
## 5-1. 부모 요소에 flex 적용하기  
* display
    * flex: 부모 요소의 크기만큼 자식 요소의 정렬  
    * inline-flex: 자식 요소의 합의 크기만큼 부모 요소의 크기를 줄이고 정렬  
* flex-direction: 자식 요소의 정렬 방향 변경, row는 가로, column은 세로, default는 row  
* flex-wrap: 자식 요소에 줄 바꿈 적용, 창의 크기를 줄이면 줄바꿈 됨  
* flex-flow: flex-direction, flex-wrap 속성 한번에 적용  
  
## 5-2. 자식 요소 정렬하기  
* justify-content: 기본 축(row or column)으로 정렬하기  
    * flex-start: 자식 요소들을 시작 방향으로 정렬  
    * flex-end: 자식 요소들을 종료 방향으로 정렬  
    * center: 자식 요소들을 가운데 방향으로 정렬  
    * space-between: 자식 요소들의 좌우 사이 간격을 균일하게 정렬  
    * space-around: 자식 요소들의 기본 축 방향으로 주위 간격을 균일하게 정렬  
    * space-evenly: 자식 요소들을 균일하게 정렬하고, 양 끝의 간격만큼 여백 적용  
  
* align-content, align-items: 반대 축으로 정렬하기  
  
## 5-3. 자식 요소의 순서 지정하기  
* display:flex를 부여하면 order를 통해 자식 요소의 순서를 정할 수 있음  

## 5-4. 요소의 여백 비율 지정하기  
* flex-grow: 요소의 안쪽 여백 확대하기, 배율로 설정, 클수록 여백 증가  
* flex-shrink: 요소의 안쪽 여백 축소하기, 클수록 여백 감소  
* flex: 전체 너빗값의 비율 조절하기, 클수록 여백 증가  

