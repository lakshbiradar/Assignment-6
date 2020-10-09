var entry;
var num;
entry = window.prompt("Enter number for count down");
num= parseFloat(entry,10);
for(i=num; i>=0; i-=1)
{
    window.console.log(i);
}