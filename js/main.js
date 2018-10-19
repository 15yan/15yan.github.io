
document.getElementById('checkbox').addEventListener('change',agreeTerm);
function agreeTerm(){
    if(document.getElementById('checkbox').checked==true){
        document.getElementById('item15').disabled=false;
        
    }
    else{
        document.getElementById('item15').disabled=true;

    }
}

document.getElementById('item15').addEventListener('click',submit);
function submit(){
    if(localStorage.clickcount = 1 && document.getElementById('item15').disabled==false){
        document.getElementById('itme15').value='Processing...';
    }
}

document.getElementById('item16').addEventListener('hover',help);
function help(){
    if(document.getElementById('item16').click==true){
        document.getElementById('help').style.display='block';

    }
}
