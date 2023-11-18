console.log

let stars1 = decument.getElementById('stars1');
let moon2 = decument.getElementById('moon2');
let mountains3 = decument.getElementById('mountains3');
let mountains4 = decument.getElementById('mountains4');
let river5 = decument.getElementById('river5');
let boat6 = decument.getElementById('boat6');
let abdo = decument.qureyselector('abdo');
window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px'; 
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    abdo.style.fontsize = value * 3 + 'px';
    if(scrollY >= 67){
        abdo.style.fontsize = 67+ 'px';
        abdo.style.position = 'fixed';
        if(scrollY > 478){
            abdo.style.display = 'none';
        }else{
            abdo.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.abdo').style.background = 'linear-gradient(#376281,#10001f)'
            
        }else{
            document.querySelector('.abdo').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}
