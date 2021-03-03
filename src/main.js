function togmenu(){

var menu= document.getElementById("menu1");
var line= document.getElementById("lines");
var nav1= document.getElementById('nav1');
var nav2= document.getElementById('nav2');
var tog = document.getElementById('tog1')




let flag=false;

    if(!flag)
    {
        menu.classList.toggle("open");
        line.classList.toggle("open");
        nav1.classList.toggle("open");
        nav2.classList.toggle("open");
        tog.classList.toggle("open");
        document.getElementById('navimg').style.opacity='0.6';
        document.getElementById('navimg').style.transitionDelay= '0.5s';
        document.getElementById('nav2img').style.opacity='0.6';
        document.getElementById('nav2img').style.transitionDelay= '0.5s';
    
        flag = true;

    }
    else 
    {
        menu.remove('open');
        line.remove('open');
        nav1.remove('open');
        nav2.remove('open');
        tog.remove('open');
        
        flag=false;
    }
}

export default togmenu;

