// The input to sum35While is a number.
// The function outputs the sum of all multiples of 3 and 5 that are less than that number.

function sum35While(N) {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let i = 1;
    while (i < N) {
        if (i % 3 == 0) {
            a = a + 1;
            c = c + i;
        }
        else if (i % 5 == 0) {
            b = b + 1;
            d = d + i;
        }
        i += 1;
    }
    const e = a + b;
    console.log('There are ' + e + ' multiples of 3 and 5 that are less than ' + N + '.');
    const f = c + d;
    console.log('Their sum is ' + f + '.');
}

//Try out your function here.
sum35While(6);
sum35While(20);
sum35While(1000);
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
sum35While(N);
printme('\nTesting...');
printme(`\t did you print the proper number of multiples?\t ${out[0] == 'There are 13 multiples of 3 and 5 that are less than 30.'} `);
printme(`\t did you print the proper sum?\t ${out[1] == 'Their sum is 195.'} `);
