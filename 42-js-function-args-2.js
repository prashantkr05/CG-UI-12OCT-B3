// const functionWithFunctionAsArgument = (argToFunction) => {
//     console.log(`functionWithFunctionAsArgument`);
//     argToFunction();
// }

// const functionToBePassedAsArg = () => {
//     console.log(`functionToBePassedAsArg`);
// }

// functionWithFunctionAsArgument(functionToBePassedAsArg);
const fun1 = (arg) => {
    console.log(`fun1`)
    arg(); // callback 
}
//fun2 is a callback function
const fun2 = () => {
    console.log(`fun2`)
}

fun1(fun2);

fun1(() => { console.log(`funX`) });
//calback is a function passed as an argument to another function