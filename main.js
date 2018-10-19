
document.getElementById('checkbox').addEventListener('change',agreeTerm);
function agreeTerm(){
    if(document.getElementById('checkbox').checked==true){
        document.getElementById('item15').disabled=false;
        
    }
    else{
        document.getElementById('item15').disabled=true;

    }
}


document.querySelector("#edate").valueAsDate=new Date();
