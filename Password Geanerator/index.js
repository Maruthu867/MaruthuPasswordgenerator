const outputElement = document.querySelector('#output');
const btncopy = document.querySelector('#btncopy');
const lengthelement = document.querySelector('#length');
const Numberelement = document.querySelector('#number');
const  Capitalelement = document.querySelector('#capital-letters');
const   Smallelement = document.querySelector('#Small-letters');
const  Symbolselement = document.querySelector('#Symbols');
const  form = document.querySelector('#frm');



btncopy.addEventListener('click',async()=>{
    const pass= outputElement.value;
    if(pass)
    {
        await navigator.clipboard.writeText(pass);
        alert("Password is copied to the clipbord")

    }
    else
    (
        alert("There is no password to copy")
    )
});

// function generateRandomChar(min,max)
// {
//      const limit = max-min+1;
//    return  String.fromCharCode(Math.floor(Math.random()+limit)+min);
// }
function capitalvalue()
{
    const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return capital[Math.floor(Math.random()*capital.length)];
}
function smallValue(){
    const small="abcdefghijklmnopqrstuvwxyz";
    return small[Math.floor(Math.random()*small.length)];
}
function numberValue()
{
    const number="1234567890";
    return number[Math.floor(Math.random()*number.length)];
    
}
function symbolValue()
{
    const symbol="=!@#$%^&*()_,.*<>/";
    return symbol[Math.floor(Math.random()*symbol.length)];

}
const functionArray=[

    {
        element:Numberelement,
        fun:numberValue
    },
    {
        element:Capitalelement,
        fun:capitalvalue
    },
    {
        element:Smallelement,
        fun:smallValue
    },
    {
        element:Symbolselement,
        fun:symbolValue
    }

] ;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const levelValue  = lengthelement.value;


    let generatePassword="";
    const funArray=functionArray.filter(({element})=>element.checked);
    console.log(funArray);
    for(i=0;i<levelValue;i++)
    {
        const index=Math.floor(Math.random()*funArray.length);
      
        const letter=funArray[index].fun();
        generatePassword+=letter;
    }

    outputElement.value=generatePassword;
    
});
