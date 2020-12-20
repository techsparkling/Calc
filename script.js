var ans=document.querySelector(".ansText");
var bar=document.querySelector(".anse")
var body=document.querySelector("body");
var main=document.querySelector("#main");
var buttoned=document.getElementsByClassName("button")
var set=document.querySelector(".mainsettings")
var button1=document.querySelector("#b1")
var button2=document.querySelector("#b2")
var button3=document.querySelector("#b3")
var button4=document.querySelector("#b4")
var button5=document.querySelector("#b5")
var button6=document.querySelector("#b6")
var button7=document.querySelector("#b7")
var button8=document.querySelector("#b8")
var button9=document.querySelector("#b9")
var button0=document.querySelector("#b0")
var buttonp=document.querySelector("#bp")
var buttons=document.querySelector("#bs")
var buttonm=document.querySelector("#bm")
var buttond=document.querySelector("#bd")
var buttonc=document.querySelector("#bc")
var buttone=document.querySelector("#be")
 
var quesh2=document.querySelector(".quest")
var buttonpercent=document.querySelector("#bper")
var buttonroot=document.querySelector("#broot")
var buttonpower=document.querySelector("#bpow")
var buttondot=document.querySelector("#bdot")
var buttonback=document.querySelector("#bback")
var buttonsettings=document.querySelector("#bsettings")
var buttonclose=document.querySelector("#bclose")
var bgblack=document.querySelector("#bgblack")
var bgwhite=document.querySelector("#bgwhite")
var ccblack=document.querySelector("#ccblack")
var ccwhite=document.querySelector("#ccwhite")
var red=document.querySelector("#red")
var green=document.querySelector("#green")
var orange=document.querySelector("#orange")
var choco=document.querySelector("#choco")
var purple=document.querySelector("#purple")
var settingsparts=document.querySelector(".settingsparts")
var calccolor=document.querySelector(".calccolor")
var calctheme=document.querySelector(".calctheme")
var brecent=document.querySelector("#brecent")
var calc=new Array()
var r = document.getElementById("rem");

var x = document.getElementById("settings");
var reclose=document.querySelector("#remclose")
var recent=document.querySelector(".recent")
var newdiv=document.getElementsByClassName("values")
var recents=document.querySelector(".recents")
var recclear=document.querySelector(".recclear")
var storage=document.querySelector(".store")
var h1=document.querySelector("#h13")
x.style.display = "none";
r.style.display = "none";
var recentCalc=new Array()
var questions=new Array()
var active=document.querySelector(".button:active")
// function myFunction() {
    brecent.addEventListener("click",()=>{
      
        if (rem.style.display === "block") {
          rem.style.display = "none";
        } else {
          rem.style.display = "block";
        }
      }
    )
    reclose.addEventListener("click",()=>{
      
        if (rem.style.display === "block") {
          rem.style.display = "none";
        } else {
          rem.style.display = "block";
        }
      }
    )
    recclear.addEventListener("click",()=>{
     recents.innerHTML=" "
     var h1=document.createElement("h1")
    h1.innerHTML="Recent Calculations:"
    
    recents.appendChild(h1)
       }) 
    bgblack.addEventListener("click",()=>{
        body.style.background="black";
        

    })
    bgwhite.addEventListener("click",()=>{
        body.style.background="white";
       
    })
    ccblack.addEventListener("click",()=>{
        main.style.background="#121212";
        main.style.color="white";
        recent.style.background="#121212";
        set.style.background="#121212"
        
    })
    ccwhite.addEventListener("click",()=>{
        main.style.background="white";
        main.style.color="black";
        recent.style.background="white";
        set.style.background="white"
        
    })
    red.addEventListener("click",()=>{
        bar.style.background="red";
        settingsparts.style.background="red";
        calccolor.style.background="red";
        calctheme.style.background="red";
        recents.style.background="red";
        active.style.background="red";
        
    })
    blue.addEventListener("click",()=>{
        bar.style.background="blue"
        settingsparts.style.background="blue";
        calccolor.style.background="blue";
        calctheme.style.background="blue";
        recents.style.background="blue";
    })
    green.addEventListener("click",()=>{
        bar.style.background="green"
        settingsparts.style.background="green";
        calccolor.style.background="green";
        calctheme.style.background="green";
        recents.style.background="green";
    })
    choco.addEventListener("click",()=>{
        bar.style.background="chocolate"
        settingsparts.style.background="chocolate";
        calccolor.style.background="chocolate";
        calctheme.style.background="chocolate";
        recents.style.background="chocolate";
    })
    purple.addEventListener("click",()=>{
        bar.style.background="#301934"
        settingsparts.style.background="#301934";
        calccolor.style.background="#301934";
        recents.style.background="#301934";
        calctheme.style.background="#301934";
    })
    orange.addEventListener("click",()=>{
        bar.style.background="orangered"
        settingsparts.style.background="orangered";
        calccolor.style.background="orangered";
        recents.style.background="orangered";
        calctheme.style.background="orangered";

    })

    buttonsettings.addEventListener("click",()=>{
        var x = document.getElementById("settings");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }
    )
    buttonclose.addEventListener("click",()=>{
        var x = document.getElementById("settings");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
    )
    button1.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button1.innerHTML;
        calc.push(button1.innerHTML)

        but1=parseInt(button1.innerHTML)
        
        console.log(calc);
    })
    button2.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button2.innerHTML;
    
    
    })
    button3.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button3.innerHTML;
    
    })
    button4.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button4.innerHTML;
    
    })
    button5.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button5.innerHTML;
    
    })
    button6.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button6.innerHTML;
    
    })
    button7.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button7.innerHTML;
    
    })
    button8.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button8.innerHTML;
    
    })
    button9.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button9.innerHTML;
    
    })
    button0.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+button0.innerHTML;
    
    })
    buttonp.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttonp.innerHTML;
        answer=ans.innerHTML; 
    })
    
    buttons.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttons.innerHTML;
    
    })
    
    buttonm.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttonm.innerHTML;
    
    })
    
    buttond.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttond.innerHTML;
    
    })
    buttonc.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=" ";

    
    })
    buttonback.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer.substr(0, answer.length - 1);

    
    })
    buttondot.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttondot.innerHTML;
        
    
    })
    buttonpercent.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttonpercent.innerHTML;
    
    
    })
    buttonpower.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+"^";
    
    
    })

    buttonroot.addEventListener("click",()=>{
        answer=ans.innerHTML;
        
        ans.innerHTML=answer+buttonroot.innerHTML;
    
    
    })

    buttone.addEventListener("click",()=>{
    //     function equ(...args){
    //         console.log(args)
            
    //         let sum = 0;
    //     for (const arg of args) {
    //     sum += arg;
    //   }
    //   ans.innerHTML=sum;
    //     }
    //     answer=ans.innerHTML;
    //     console.log(answer)
        
    //     answer=answer.split("+");
    //     console.log(answer)
    //     var arra=[];
    //     for(an of answer){
    //         console.log(an)
            
    //         a=parseInt(an)
    //         console.log(a)
    //         arra.push(a)
    //         console.log(arra)
    //     }
    //     console.log(...arra)

        // equ(...arra)
        que=ans.innerHTML;
        function per(...args){
            console.log(args)
            let sum = 0;
          
            console.log((args[0]/100)*args[1])
            ans.innerHTML=((args[0]/100)*args[1])
        }
       function root(...args){
           console.log(args)
            if (isNaN(args[0])){
                var root=Math.sqrt(args[1])
                ans.innerHTML=root;
                answer=ans.innerHTML;

            }
            else{
                var root=Math.sqrt(args[1])
                ans.innerHTML=args[0]*root;
            }
       }
        
        answer=ans.innerHTML;
        if (answer.includes("%")){
            answer=answer.split("%");
            console.log(answer)
            var arra=[];
            for(an of answer){
                console.log(an)
                
                a=parseInt(an)
                console.log(a)
                arra.push(a)
                console.log(arra)
            }
            console.log(...arra)

            per(...arra)
        }
        else if (answer.includes("^")){
            answer=answer.split("^");
            console.log(answer)
            var arra=[];
            for(an of answer){
                console.log(an)
                
                a=parseInt(an)
                console.log(a)
                arra.push(a)
                console.log(arra)
            }
            
            arr=Math.pow(...arra);
            document.getElementsByClassName("ansText")[0].innerHTML=arr
            
        
            

           
        }
       else if (answer.includes("√")){
            
            answer=answer.split("√");
        
            console.log(answer)
            var arra=[];
            for(an of answer){
                console.log(an)
                
                a=parseInt(an)
                console.log(a)
                arra.push(a)
                console.log(arra)
            }
        root(...arra)}
    
        else{
        answer=eval(answer);
        ans.innerHTML=answer;
        answer=ans.innerHTML
    }
    calc=que+"="+answer
       
        
    recentCalc.push(calc)
    console.log(recentCalc) 
    var recents=document.querySelector(".recents")
    

    
    
    var paragraph = document.createElement('div');
    paragraph.classList.add('values');
    var queh1=document.createElement("h2")
    queh1.classList.add("quest")
    

    queh1.innerText = recentCalc;
    
    paragraph.appendChild(queh1);
    recents.appendChild(paragraph)
    recentCalc.pop()

      
})

    
    
    
    document.onkeyup = function(e) {
        if ((e.which == 49 )||( e.which == 97)) {

            answer=ans.innerHTML
          ans.innerHTML=answer+1}
          else if ( (e.shiftKey && e.which == 56)||e.which==106) {
            answer=ans.innerHTML
            console.log("*")
            ans.innerHTML=answer+"*"
          }
          else if ( (e.shiftKey && e.which == 187)||e.which==107) {
            answer=ans.innerHTML
            console.log("+")
            ans.innerHTML=answer+"+"
          }
          else if ( (e.shiftKey && e.which == 54)) {
            answer=ans.innerHTML
            console.log("^")
            ans.innerHTML=answer+"^"
          }
          else if ( (e.which == 189)||e.which==109) {
            answer=ans.innerHTML
            console.log("-")
            ans.innerHTML=answer+"-"
          }
          else if ( (e.which == 191)||e.which==111) {
            answer=ans.innerHTML
            console.log("/")
            ans.innerHTML=answer+"/"
          }
          else if ( (e.shiftKey && e.which == 53)) {
            answer=ans.innerHTML
            console.log("%")
            ans.innerHTML=answer+"%"
          }
          else if ( ( e.which == 8)) {
            answer=ans.innerHTML
            ans.innerHTML=answer.substr(0, answer.length - 1);
          }
          else if ( ( e.which == 46)) {
            answer=ans.innerHTML
            ans.innerHTML=" ";
          }
        else if ((e.which == 50 )||( e.which == 98)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+2}
          else if ((e.which == 51 )||( e.which == 99)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+3}
          else if ((e.which == 52 )||( e.which == 100)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+4}
          else if ((e.which == 53 )||( e.which == 101)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+5}
          else if ((e.which == 54 )||( e.which == 102)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+6}
          else if ((e.which == 55 )||( e.which == 103)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+7}
          else if ((e.which == 56 )||( e.which == 104)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+8} 
          else if ((e.which == 57 )||( e.which == 105)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+9}
          else if ((e.which == 48 )||( e.which == 96)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+0}
          else if ((e.which == 48 )||( e.which == 96)) {
            answer=ans.innerHTML
          ans.innerHTML=answer+0}
          else if ((e.which == 13 )||( e.which == 187)) {
            answer=ans.innerHTML
            que=ans.innerHTML;
            function per(...args){
                console.log(args)
                let sum = 0;
              
                console.log((args[0]/100)*args[1])
                ans.innerHTML=((args[0]/100)*args[1])
            }
           function root(...args){
               console.log(args)
                if (isNaN(args[0])){
                    var root=Math.sqrt(args[1])
                    ans.innerHTML=root;
                    answer=ans.innerHTML;
    
                }
                else{
                    var root=Math.sqrt(args[1])
                    ans.innerHTML=args[0]*root;
                }
           }
            
            answer=ans.innerHTML;
            if (answer.includes("%")){
                answer=answer.split("%");
                console.log(answer)
                var arra=[];
                for(an of answer){
                    console.log(an)
                    
                    a=parseInt(an)
                    console.log(a)
                    arra.push(a)
                    console.log(arra)
                }
                console.log(...arra)
    
                per(...arra)
            }
            else if (answer.includes("^")){
                answer=answer.split("^");
                console.log(answer)
                var arra=[];
                for(an of answer){
                    console.log(an)
                    
                    a=parseInt(an)
                    console.log(a)
                    arra.push(a)
                    console.log(arra)
                }
                console.log(...arra)
                arra=Math.pow(...arra);
                ans.innerHTML=arra;
                ans.innerHTML=arra;
                ans.innerHTML=arra;
               
            }
           else if (answer.includes("√")){
                
                answer=answer.split("√");
            
                console.log(answer)
                var arra=[];
                for(an of answer){
                    console.log(an)
                    
                    a=parseInt(an)
                    console.log(a)
                    arra.push(a)
                    console.log(arra)
                }
            root(...arra)}
        
            else{
            answer=eval(answer);
            ans.innerHTML=answer;
            
            
        }  calc=que+"="+answer
       
        
        recentCalc.push(calc)
        console.log(recentCalc) 
        var recents=document.querySelector(".recents")
        
    
        
        
        var paragraph = document.createElement('div');
        paragraph.classList.add('values');
        var queh1=document.createElement("h2")
        queh1.classList.add("quest")
        
    
        queh1.innerText = recentCalc;
        
        paragraph.appendChild(queh1);
        recents.appendChild(paragraph)
        recentCalc.pop()
          }
          


        // } else if (e.ctrlKey && e.altKey && e.which == 89) {
        //   alert("Ctrl + Alt + Y shortcut combination was pressed");
        // } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        //   alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
        // 
    }