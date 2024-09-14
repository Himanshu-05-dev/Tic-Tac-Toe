let game = document.querySelectorAll("#box")
let reset = document.querySelector("#reset")
let newgame =document.querySelector("#newgame")
let bd= document.querySelector("body")

let turn=true;
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

game.forEach(box => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled = true;

        chkwinner();
    })
});

const chkwinner=()=>{
    for(i of win){
        // console.log(i[0],i[1],i[2])
        // console.log(game[i[0]],game[i[1]],game[i[2]])

        let pos1= game[i[0]].innerText
        let pos2= game[i[1]].innerText
        let pos3= game[i[2]].innerText

        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if (pos1=== pos2 && pos2===pos3){
                console.log('winner')
                winner=bd.prepend("Congratulation!!! The winner is ",pos1)
                bd.style.fontSize="3rem";
                bd.style.color="red";
                bd.style.display="flex";
                bd.style.flexDirection="column"
                bd.style.alignItems='center';
                bd.style.justifyContent='center';
                newgame.style.visibility="visible";                
                newgame.style.display="block";
            }
        }
    }
}

newgame.addEventListener("click",()=>{
    location.reload();
})

reset.addEventListener("click",()=>{
    location.reload();
})