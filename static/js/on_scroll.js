function scroll_handler(){
    // Watch video for line by line explanation of the code
    // http://www.youtube.com/watch?v=eziREnZPml4
    var wrap = document.getElementById('feed1');
    var contentHeight = wrap.offsetHeight;
    var yOffset = window.pageYOffset; 
    var y = yOffset + window.innerHeight;
    if(y >= contentHeight){
        // Ajax call to get more dynamic data goes here
        
        $( "#showButton" ).click();
    }
}
window.onscroll = scroll_handler;