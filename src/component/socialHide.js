
function SocialHide(){

    if(window.location.pathname==="/contact"){

        document.getElementById("hideID").style.display="none";
       

    }
    else{
        document.getElementById("hideID").style.display="flex";
        document.getElementById("hideID").style.flexFlow="column wrap";
        document.getElementById("hideID").style.position="absolute";
        document.getElementById("hideID").style.bottom="1.5rem";
        document.getElementById("hideID").style.right="0.5%";
    }
   
}

export default SocialHide;