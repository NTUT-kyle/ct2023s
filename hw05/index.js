/*
tsc ./html/FontDesign/HW5/hw05/index.ts
*/
var responseText = document.getElementById("Response");
var demoText1 = document.getElementById("DemoText1");
var demoText2 = document.getElementById("DemoText2");
var passText1 = document.getElementById("Pass-1");
var passText2 = document.getElementById("Pass-2");
var EASY_FONT_NAME = "EasyFontFace";
var MEDIUM_FONT_NAME = "MediumFontFace";
//----------------------------------------------------------------------
function LoadResponseText(){
    var dataLoader = new XMLHttpRequest();
    var startLoad = ()=>{
        responseText.appendChild( document.createTextNode(
            dataLoader.responseText
        ) );
    };//-------------------------------------------------------------
    setTimeout( ()=>{
        try{
            dataLoader.onload = startLoad;
            dataLoader.open("GET", "./src/心得.txt");
            dataLoader.send();
        }catch(e){

        }
    }, 100 );
}//---------------------------------------------------------------------
function LoadFont(){
    setTimeout( ()=>{
        
        try{
            var font = new FontFace(EASY_FONT_NAME, "url(./src/easy.ttf)");
            var message = "失敗(+0)";
            font.load().then( ()=>{message = "通過(+2)"} );
            document.fonts.add(font);
            demoText1.style.fontFamily = EASY_FONT_NAME;
            setTimeout(()=>{ passText1.appendChild( document.createTextNode(message) ); }, 1000);
        }catch(e){}
    }, 100 );
    setTimeout( ()=>{
        try{
            var font = new FontFace(MEDIUM_FONT_NAME, "url(./src/medium.ttf)");
            var message = "失敗(+0)";
            font.load().then( ()=>{message = "通過(+2)"} );
            document.fonts.add(font);
            demoText2.style.fontFamily = MEDIUM_FONT_NAME;
            setTimeout(()=>{ passText2.appendChild( document.createTextNode(message) ); }, 1000);
            
        }catch(e){}
    }, 110 );
    
}//----------------------------------------------------------------------
LoadResponseText();
LoadFont();