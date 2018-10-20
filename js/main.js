
document.getElementById('checkbox').addEventListener('click',agreeTerm);
function agreeTerm(){
    if(document.getElementById('checkbox').clicked=true){
        document.getElementById('item15').disabled=false; 
    }

    else if(Number(localStorage.clickcount)%2==0){
        document.getElementById('item15').disabled=true;
    }
   
}

document.getElementById('item15').addEventListener('click',submit);
function submit(){
    if(getElementById('item15').clickcount =='1'){
        document.getElementById('itme15').value=='Processing...';
    }
}



document.getElementById('confirmpwd').addEventListener('input',psw);
function psw(){
    if (document.getElementById('pwd').value==document.getElementById('confirmpwd').value){
        document.getElementById('popup').style.display='none';
    }
    else{
        document.getElementById('popup').style.display='block';

    }
   
}

document.getElementById('close').addEventListener('click',close);
function close(){
    if(document.getElementById('close').click=true){
        document.getElementById('popup').style.display='none';

    }
}

document.getElementById('item16').addEventListener('mouseover',help);
function help(){
    if(document.getElementById('item16').mouseover=true){
        document.getElementById('video').style.display='block';
    }
}

document.getElementById('item16').addEventListener('mouseleave',leave);
function leave(){
    if(document.getElementById('item16').mouseleave=true){
        document.getElementById('video').style.display='none';
    }
}
