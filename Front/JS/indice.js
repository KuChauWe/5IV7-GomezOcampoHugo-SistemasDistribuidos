var winScroll = window.scroll(90, 90)
/*
window.addEventListener('scroll',function(){
    document.getElementsByClassName('header-content').classList.toggle('active');
})
*/
window.onscroll = function() {

    var headAn = window.scrollY;

    if(headAn == 3920){
        document.getElementById('header-content').classList.toggle('active');
        setTimeout(() => {
            document.getElementById('header-content').classList.toggle('active');
        },1000);
    }else{
        setTimeout(() => {
            document.getElementById('header-content').classList.toggle('active');
        },1000);
    }

  };