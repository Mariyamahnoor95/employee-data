var readline = require("readline");
var takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

var obj = {
    Name: "Mariyam mahnoor",
    Account_no: "78123863837",
    balance_Amount: 2000,
}
var balance = 2000;
function get_balance() {
    console.log("your balance is " + balance)
    atm_1();
};

function make_deposit() {
    takeInput.question('How much would you like to deposit?', function (deposit) {
        deposit = parseInt(deposit);
        if (isNaN(deposit) || deposit === '') {
            console.log('Error: please enter a number!');
            make_deposit();
        }
        else {
            balance += deposit;
            get_balance();
        }
       

    })
    atm_1();
};

function make_withdrawal() {
    takeInput.question('How much would you like to withdrawal?', function (deposit) {
        deposit = parseInt(deposit);
        if (isNaN(deposit) || deposit === '') {
            console.log('Error: please enter a number!');
            make_deposit();
        }
        else {
            balance -= deposit;
            get_balance();
        }   

    })
    atm_1();

};

function EXIT_1(){
    takeInput.close();
}

 function atm_1(){


takeInput.question('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit', function (choice) {
    choice = parseInt(choice);
    if (choice === 1) {
        console.log("Balance")
        get_balance();
    }
    else if (choice === 2) {
        make_deposit();
    }
    else if (choice === 3) {
        make_withdrawal();
    }
    else {
        EXIT_1();
    }
    // takeInput.close();

});
}
function atm () {
takeInput.question("enter your name: ??/", function (name) {
    if (name == "Mariyam Mahnoor") {
        console.log(obj)
    }
    atm_1();
    
});}

atm();