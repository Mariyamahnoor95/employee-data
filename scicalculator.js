
const { mainModule } = require("process");
var readline = require("readline");
const { callbackify } = require("util");
var takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

function squareroot(x){
    console.log("---Math.sqrt()---")
    console.log(Math.sqrt ( x ));
    
}
function cuberoot(x){
    console.log("---Math.cbrt()---")
    console.log(Math.cbrt ( x ));
    
}
function exponential(x){
    console.log("---Math.exp()---")
    console.log(Math.exp ( x ));
    
}
function exponential_1(x){
    console.log("---Math.expm1()---")
    console.log(Math.expm1 ( x ));
    
}
function loge(x){
    console.log("---Math.log()---")
    console.log(Math.log ( x ));
    
}
function logebase10(x){
    console.log("---Math.logbase10()---")
    console.log(Math.log10 ( x ));
    
}
function logebase2(x){
    console.log("---Math.logbase2()---")
    console.log(Math.log2 ( x ));
    
}
function loge1plus(x){
    console.log("---Math.log1p()---")
    console.log(Math.log1p ( x ));
    
}
function absolute(x){
    console.log("---Math.abs()---")
    console.log(Math.abs ( x ));
    
}
function Sign(x){
    console.log("---Math.sign()---")
    console.log(Math.sign ( x ));
    
}
function Ceil(x){
    console.log("---Math.ceil()---")
    console.log(Math.ceil ( x ));
    
}
function Floor(x){
    console.log("---Math.floor()---")
    console.log(Math.floor ( x ));
    
}
function trunc(x){
    console.log("---Math.trunc()---")
    console.log(Math.trunc ( x ));
    
}
function Round(x){
    console.log("---Math.Round()---")
    console.log(Math.round ( x ));
    scientificMath();
    
}
function Sin(x){
    console.log("Math.sin(Math.PI/4): ")
    
    console.log(Math.sin ( x ));
    scientificMath();
    
}
function Cos(x){
    console.log("Math.cos(Math.PI/4): ")
    
    console.log(Math.cos( x ));
    scientificMath();
}
function Tan(x){
    console.log("Math.tan(Math.PI/4): ")
    
    console.log(Math.tan( x ));
    
}










function hypotenuse(a,b){
    console.log("---Math.hypot()---")
    console.log(Math.hypot(a,b))
}
function power(num,por) {
    console.log(Math.pow(num,por))
        let sqr = (Math.pow(num,por))
        console.log(Math.sqrt(sqr))
        simpleMath();
     
    
};
function add(a,b) {
    console.log(a +b)
       
    simpleMath();
    
};
function sub(a,b) {
    console.log(a - b)
    simpleMath();
    
};
function Mul(a,b) {
    console.log(a *b)
    simpleMath();
    
};
function div(a,b) {
    console.log(a /b)
    simpleMath();
       
    
};
function square(x) {
    console.log(x*x)
        takeInput.close()
    
};
function EXIT_1(){
    takeInput.close();
}
function scientificMath(){
takeInput.question('enter another of the number?', function (x) {
    takeInput.question('Select a choice 1.) Squre root 2.)cuberoot \n 3.) Exponential 4.) Exponential minus 1 \n  5.) log 6.) log 1+x \n 7.) SIN  8.)COS \n 9.) TAN() ' ,function (choice) {
        choice = parseInt(choice);
        if (choice === 1) {
            squareroot(x);
           
        }
        else if (choice === 2) {
            cuberoot(x);
        }
        else if (choice === 3) {
            exponential(x);
        }
        else if (choice === 4) {
            exponential_1(x);
        }
        else if (choice === 5) {
            loge(x);
        }
        else if (choice === 6) {
            loge1plus(x);
        }
        else if (choice === 7) {
         Sin();
        }
        else if (choice === 8) {
           Cos();
        }
        else if (choice === 9) {
            Tan();
        }
        else {
            EXIT_1();
        }
        // takeInput.close();
    
    });
    
    
})};
function simpleMath(){
takeInput.question('enter a number', function (a) {
    takeInput.question('enter another of the number?', function (b) {
        takeInput.question('Select a choice 1.) add 2.)Divide \n 3.) Sub 4.) Multiply \n  5.) power 6.) hypotenuse ' ,function (choice) {
            choice = parseInt(choice);
            if (choice === 1) {
                console.log("Addition")
                add(a,b);
            }
            else if (choice === 2) {
                div(a,b);
            }
            else if (choice === 3) {
                sub(a,b);
            }
            else if (choice === 4) {
                Mul(a,b);
            }
            else if (choice === 5) {
                power(a,b);
            }
            else if (choice === 6) {
                hypotenuse(a,b);
            }
            
            else {
                EXIT_1();
            }
            // takeInput.close();
        
        });
        
        
    })
   })
};

function cal(){
takeInput.question('Select a choice 1.) Simple Math 2.)scientific Math \n  ' ,function (choice) {
    choice = parseInt(choice);
    if (choice === 1) {
        simpleMath();
    }
    else if (choice === 2) {
        scientificMath();
    }
   

    else {
        EXIT_1();
    }
    // takeInput.close();

})
};
cal();