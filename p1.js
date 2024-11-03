let boxes=document.querySelectorAll(".box");
// boxes jo h wo .box ka array h kyu ki bahut sara element se mil ke bna h
// let reset=document.querySelector(".reset");
let turn0="true";
 let val=prompt("do you want to play the game","PRESS-ENTER");

 const winpattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
]
                    // not understand
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0==="true"){
            turn0="false";
            box.innerText="O"
        }else{
            turn0="true";
            box.innerText="X"
        }
        box.disabled="true";
        checkwinner();
    });
});
                 

const checkwinner=()=>{
    for(  xxx of winpattern){
        let pos1val=boxes[xxx[0]].innerText;
        let pos2val=boxes[xxx[1]].innerText;
        let pos3val=boxes[xxx[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                prompt("winnner",pos1val);
                console.log("winner");
                box.disabled="true";
            }
        }

    }
};
// let num=[1,2,3,4,5];
// num.forEach((www)=>{
//     console.log(www*www);
// });