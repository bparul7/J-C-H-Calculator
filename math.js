//first take input
var input = "";
var ans1, ans2;
var op = "";

let takeInput0 = function() {
    input = input.concat("0");
    console.log (input);
    print(input);
}

let takeInput1 = function() {
    input = input.concat("1");
    console.log (input);
    print(input);
}

let print = function(prnt) {
    let v = document.querySelector("#res");
  //  console.log (input);
    v.textContent = prnt;
    //console.log (v.textContent); 
}

let clear1 = function () {
   // console.log ("enter");
    input = "";
    print(input);
}

let collect1 = function() {
    collect("+");
}

let collect2 = function() {
    collect("-");
}

let collect3 = function() {
    collect("*");
}

let collect4 = function() {
    collect("/");
}

let collect = function(value) {
//    console.log (value);
    let v = document.querySelector("#res");
    ans1 = v.textContent;
    op = value;
    console.log (ans1);
    input += value;
    print(input);
}

let equality = function() {
    let value = document.querySelector("#res");
   // console.log (value);
    let v1 = value.textContent;
    //console.log (v1);
    ans2 = "";
    v1 = v1.split("");
    //console.log (v1.length);
    for (let i=v1.length-1; ((v1[i]=='0' || v1[i] == '1')&&i>=0) ; i--) {
        ans2 = ans2.concat(String(v1[i]));
    }
   // console.log (ans2);
    ans2 = ans2.split("").reverse().join("");
    //console.log (ans2);
    doOperation();
    input = value.textContent;
}

let binToDec = function(val) {
    let p = 1;
    let ans = 0;
    val = val.split("");
    for (let i = val.length-1; i>=0; i--) {
        ans += ((+(val[i]))*p);
        p = p*2;
    }
    return ans;
}

let decToBin = function(val) {
    let ans = "";
    while (val != 0) {
        if (val&1)
            ans = ans.concat("1");
        else
            ans = ans.concat("0");
        val = parseInt(val/2);
    }
    ans = ans.split("").reverse().join("");
    if (ans === "")
        ans = "0";
    return ans;
}

let add = function(v1, v2) {
    v1 = binToDec (v1);
    v2 = binToDec (v2);
    v1 = v1 + v2;
    let ans = decToBin (v1);
    return ans;
}

let sub = function(v1, v2) {
    v1 = binToDec (v1);
    v2 = binToDec (v2);
    v1 = v1 - v2;
    let ans = decToBin (v1);
    return ans;
}

let mul = function(v1, v2) {
    v1 = binToDec (v1);
    v2 = binToDec (v2);
    v1 = v1 * v2;
    let ans = decToBin (v1);
    return ans;
}

let div = function(v1, v2) {
    v1 = binToDec (v1);
    v2 = binToDec (v2);
    v1 = parseInt(v1 / v2);
    let ans = decToBin (v1);
    return ans;
}

let doOperation = function () {
    //alert("enteres");
   // console.log (op);
  //  console.log (`ans1 = ${ans1}, ans2 = ${ans2}`);
    if (op == "+") {
        print( add(ans1, ans2) );
    }
    else if (op == '-') {
        print( sub(ans1, ans2) );
    }
    else if (op == '*') {
        print( mul(ans1, ans2) );
    }
    else if (op == '/') {
        print( div(ans1, ans2) );
    }
}