const VERSION = "0.7";
const VERSIONDATE = "2023-12-20";
const YEAR = "2023";
const COMPANY = "VSK1 GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}
