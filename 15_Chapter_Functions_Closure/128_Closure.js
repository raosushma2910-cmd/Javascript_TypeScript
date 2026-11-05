function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

//example -2
function makeScoreTracker(){
let score= 0;

return function (){
score = score+10;
console.log(score);
}
}
const tracker = makeScoreTracker();
tracker();
tracker();