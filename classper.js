let hindi = 79;
let english = 65;
let science = 45;
let maths = 50;
let social_science = 23;
let total = hindi + english + science + social_science + maths;
console.log(total);


let per = total / 500 * 100;
console.log(per);


if (per < 33)
    console.log("pass with third division");
else if (per > 33 && per < 70)
    console.log("pass with second division");
else if (per > 70 && per < 100)
    console.log("pass with first division");
else if (per > 33)
    console.log("fail");


