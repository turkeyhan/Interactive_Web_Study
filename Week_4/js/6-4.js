/* const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
}); */

/* const box = document.querySelector("#box");

box.addEventListener("mouseenter", ()=>{ 
  box.style.backgroundColor = "hotpink";
});

box.addEventListener("mouseleave", ()=>{ 
  box.style.backgroundColor = "aqua";
}); */


/* box.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "hotpink";
});

box.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "aqua";
}); */


/* box.addEventListener("mouseenter", e => {
  e.currentTarget.style.backgroundColor = "hotpink";
});

box.addEventListener("mouseleave", e => {
  e.currentTarget.style.backgroundColor = "aqua";
}); */

/* const list = document.querySelectorAll(".list li");

for(let el of list){
  el.addEventListener("click", e=>{
    e.preventDefault();
    console.log(e.currentTarget.innerText);
  })
} */

/* const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; 

btnPlus.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    console.log(num);
});

btnMinus.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    console.log(num);
}) */

/* const myName = "홍길동";
console.log("내 이름은 myName입니다."); */


/* const myName = "홍길동";
console.log(`내이름은 ${myName}입니다.`); */

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg = 45;
let num = 0;

btnLeft.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    box.style.transform= `rotate(${num * deg}deg)`;
});

btnRight.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    box.style.transform= `rotate(${num * deg}deg)`;
});
