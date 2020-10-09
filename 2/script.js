var coinFlip;
var choice;

choice = window.prompt("Heads or Tails (H/T)?");
coinFlip = Math.floor(Math.random() * 10);

Heads = Boolean(coinFlip <= 5);
Tails = Boolean(coinFlip > 5);
userChoosehead = Boolean(choice.toUpperCase() === "H");
userChooseTails = Boolean(choice.toUpperCase() === "T");

if (Heads && userChoosehead )
{
 window.alert("The Flip was Heads and you choose Heads....you WIN!");
}
 else if(Heads && !userChoosehead) 
 {
        window.alert("The Flip was heads and you choose Tails....you loose!");
    }

if (Tails && userChooseTails)
{
        window.alert("The Flip was Tails and you choose Tails....you WIN!");
    } else if (Tails && !userChooseTails)
    {
        window.alert("The Flip was Tails and you choose Heads....you loose!");
    }
