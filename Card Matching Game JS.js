var hard = true;
var easy = false;
var oneClicked = false;
var twoClicked = false;
var cardOne = 0;
var cardOneNum = 0;
var cardTwo = 0;
var cardTwoNum = 0;
var firstIndex = 99;
var randomOne = [];
var randomTwo = [];
var rowOne = [];
var rowTwo = [];
var rowThree = [];
var rowFour = [];
var points = 0;

//Cards and stuff starts here
var boxArray = [
    {
        activated: false, 
        number: 0
    },

    {
        activated: false, 
        number: 1
    },

    {
        activated: false, 
        number: 2
    },

    {
        activated: false, 
        number: 3
    },

    {
        activated: false, 
        number: 0
    },

    {
        activated: false, 
        number: 1
    },

    {
        activated: false, 
        number: 2
    },

    {
        activated: false, 
        number: 3
    },

    {
        activated: false, 
        number: 0
    },

    {
        activated: false, 
        number: 1
    },

    {
        activated: false, 
        number: 2
    },

    {
        activated: false, 
        number: 3
    },

    {
        activated: false, 
        number: 0
    },

    {
        activated: false, 
        number: 1
    },

    {
        activated: false, 
        number: 2
    },

    {
        activated: false, 
        number: 3
    }
]

//Cards and stuff ends here

hardDif()

function reset() {
    oneClicked = false;
    twoClicked = false;
    cardOneNum = 0;
    cardTwoNum = 0;

    $("#Bar").css("backgroundColor","#f5b942");
    $("#Title").css("color","#f5b942");
    $("#Title").text("The Card Matching Game");
    $(".box").off();

    for (var i = 0; i < 8; i++) {
        randomOne.pop();
        randomTwo.pop();
    }
    if (hard === true) {
        $(".box").css("color","#f5b942");
        $(".box").css("backgroundColor","#f5b942");
        $("#Easy").css("backgroundColor", "#f5b942");
        $("#Hard").css("backgroundColor", "pink");
        giveContentHard();
        points = 16;
        $("#points").text(points);
    }
    else if (easy === true) {
        $(".box").css("color","#f5b942");
        $(".box").css("backgroundColor","#f5b942");
        $(".hard").css("color", "white");
        $(".hard").css("backgroundColor", "white");
        $(".hard").off();
        $("#Hard").css("backgroundColor", "#f5b942");
        $("#Easy").css("backgroundColor", "pink");
        points = 8;
        $("#points").text(points);
        giveContentEasy();
    }
}
;

$("#startOver").on("click", function() {
    if (hard === true) {
        hardDif();
    } else {
        easyDif();
    }
    reset();
});

//Hard Difficulty starts

function hardDif() {
    hard = true;
    easy = false;
    reset();
    randomNumHard(randomOne);
    randomNumHard(randomTwo);
    firstHalf(rowOne,randomTwo);
    firstHalf(rowFour, randomOne);
    secondHalf(rowTwo, randomTwo);
    secondHalf(rowThree,randomOne);
    setNumb(1);
    setNumb(2);
    setNumb(3);
    setNumb(4);
    giveContentHard();
}

//Hard Difficulty ends

//Hard Difficulty starts

function easyDif() {
    hard = false;
    easy = true;
    reset()
    randomNumEasy(randomOne);
    randomNumEasy(randomTwo);
    firstHalf(rowOne, randomTwo);
    firstHalf(rowTwo, randomOne);
    setNumb(1);
    setNumb(2);
    giveContentEasy();
}

//Hard Difficulty ends

//Specific buttons start here

$("#Easy").on("click", function() {
    $("#Easy").css("backgroundColor", "pink");
    $("#Hard").css("backgroundColor", "#f5b942");
    hard = false;
    easy = true;
    easyDif();
    reset();
    $(".hard").off();
})

$("#Hard").on("click", function() {
    $("#Hard").css("backgroundColor", "pink");
    $("#Easy").css("backgroundColor", "#f5b942");
    hard = true;
    easy = false;
    hardDif();
    reset();
})

$("#Hard").on("mouseenter", function() {
    $("#Hard").css("backgroundColor", "pink")
})

$("#Easy").on("mouseenter", function() {
    $("#Easy").css("backgroundColor", "pink")
})

$("#startOver").on("mouseenter", function() {
    $("#startOver").css("backgroundColor", "pink")
})

$("#startOver").on("mouseleave", function() {
    $("#startOver").css("backgroundColor", "#f5b942")
})

$("#Easy").on("mouseleave", function() {
    if (easy  === true) {
        $("#Easy").css("backgroundColor", "pink");
    } else {
        $("#Easy").css("backgroundColor", "#f5b942");
    }
     
})

$("#Hard").on("mouseleave", function() {
    if (hard  === true) {
        $("#Hard").css("backgroundColor", "pink");
    } else {
        $("#Hard").css("backgroundColor", "#f5b942");
    }  
})

//specific buttons end here




//  8 Random Number generator starts
function randomNumHard(x) {
    while(x.length < 8){
        var r = Math.floor(Math.random() * 8) + 1;
        if(x.indexOf(r) === -1) x.push(r);
    }
} 

// 8 Random Number generator ends

//  4 Random Number generator starts
function randomNumEasy(x) {
    while(x.length < 4){
        var j = Math.floor(Math.random() * 4) + 1;
        if(x.indexOf(j) === -1) x.push(j);
    }
} 

// 4 Random Number generator ends

//Inserting into row arrays starts
function firstHalf(inputee, inputer) {
    for (var i = 0; i < 4; i++) {
        inputee[i] = inputer[i];
    }
}

function secondHalf(inputee, inputer) {
    for (var i = 4; i < 8; i++) {
        inputee[i-4] = inputer[i];
    }
}
//Inserting into row arrays ends

//Inserting into box array starts
function setNumb(x) {
    if (x === 1) {
        for (var i = 0; i < 4; i++) {
            boxArray[i].number = rowOne[i];
        }
    }
    if (x === 2) {
        for (var i = 0; i < 4; i++) {
            boxArray[i + 4].number = rowTwo[i];
        }
    }
    if (x === 3) {
        for (var i = 0; i < 4; i++) {
            boxArray[i + 8].number = rowThree[i];
        }
    }
    if (x === 4) {
        for (var i = 0; i < 4; i++) {
            boxArray[i + 12].number = rowFour[i];
        }
    }
}

//Inserting into box array ends

//Giving the text content to the boxes starts

function giveContentHard() {
    $(".box").on("click", function() {
        var r = $(this).attr("id");
        if (r.length === 4) {
            var k = r[3];
            boxArray[k-1].activated = true;
            $(this).text(boxArray[k-1].number);
            if (twoClicked === false && oneClicked === false) {
                $(this).css("color", "navy");
                oneClicked = true;
                cardOneNum = boxArray[k-1].number;
                firstIndex = k-1;
            } else if (twoClicked === false && oneClicked === true) {
                if (firstIndex !== k-1) {
                    $(this).css("color", "navy");
                    cardTwoNum = boxArray[k-1].number;
                    twoClicked = true;
                    sameNumber(firstIndex + 1, k);
                }    
            }
        } else {
            var k = r[3] + r[4];
            boxArray[k-1].activated = true;
            $(this).text(boxArray[k-1].number);
            if (twoClicked === false && oneClicked === false) {
                $(this).css("color", "navy");
                oneClicked = true;
                cardOneNum = boxArray[k-1].number;
                firstIndex = k-1;
            } else if (twoClicked === false && oneClicked === true) {
                if (firstIndex !== k-1) {
                    $(this).css("color", "navy");
                    cardTwoNum = boxArray[k-1].number;
                    twoClicked = true;
                    sameNumber(firstIndex + 1, k);
                }
            }
        }
    })
}

function giveContentEasy() {
    $(".box").on("click", function() {
        var r = $(this).attr("id");
        var k = r[3];
        $(this).text(boxArray[k-1].number);
        if (twoClicked === false && oneClicked === false) {
            $(this).css("color", "navy");
            oneClicked = true;
            cardOneNum = boxArray[k-1].number;
            firstIndex = k-1;
        } else if (twoClicked === false && oneClicked === true) {
            if (firstIndex !== k-1) {
                $(this).css("color", "navy");
                cardTwoNum = boxArray[k-1].number;
                twoClicked = true;
                sameNumber(firstIndex + 1, k);
            }
        }
    })
}

//Giving the text content to the boxes ends

//Same number function 

function sameNumber(k1, k2){
    var cardName1 = "#box" + k1;
    var cardName2 = "#box" + k2;
    if (boxArray[k1-1].number === boxArray[k2-1].number) {
        $(cardName1).css("color", "navy");
        $(cardName2).css("color", "navy");
        $(cardName1).off();
        $(cardName2).off();
        oneClicked = false;
        twoClicked = false;
        firstIndex = 0;
        cardOneNum = 0;
        cardTwoNum = 0;
        $("#continue").text("Correct");
        points-=2;
        $("#points").text(points);
    } else {
        setTimeout(function () {
                $(cardName1).css("color", "#f5b942");
            $(cardName2).css("color", "#f5b942");
            oneClicked = false;
            twoClicked = false;
            firstIndex = 0;
            cardOneNum = 0;
            cardTwoNum = 0;
            $("#continue").text("Incorrect");    
        }, 600)
    }
    if (points === 0) {
        if (hard === true) {
            $("#Title").text("Congratulations!");
            $("#Title").css("color", "red");
            $(".box").css("backgroundColor", "red");
            $(".box").css("color", "red");        
            $("#Bar").css("backgroundColor", "red");
            $("#startOver").css("backgroundColor", "red");
            $("#Hard").css("backgroundColor", "red");
            $("#Easy").css("backgroundColor", "red");
        } else {
            $("#Title").text("Congratulations!");
            $("#Title").css("color", "red");
            $(".box").css("backgroundColor", "red");
            $(".box").css("color", "red");
            $(".hard").css("color", "white");
            $(".hard").css("color", "white");
            $("#Bar").css("backgroundColor", "red");
            $("#startOver").css("backgroundColor", "red");
            $("#Hard").css("backgroundColor", "red");
            $("#Easy").css("backgroundColor", "red");
        }

    }
};

