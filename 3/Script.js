var coinFlip;


for (i=1; i<=10; i+=1)
{
    coinFlip = Math.round(Math.random());
    if(coinFlip===1)
    {
        window.console.log("Tails" );
    }
    else {
        window.console.log("Heads");
    }
}