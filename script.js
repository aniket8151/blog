// root node
console.log(document.documentElement)
console.log(document.body)
console.log(document.head)

// children node
console.log(document.body.childNode)
console.log(document.body.firstchild)
console.log(document.body.firstElementChild)
for(node of document.body.children){
    console.log(node);
}
const chidlrenofbody=Array.from(document.body.children)
const ultag=document.body.children[0]
//dom manipulation
const tabletag=document.body.chidren[1]
console.log(tableTag.tbodies[0].rows[0].cells[1].style= "background-color: green")

// access by id and class

// getelement by id

console.log(element.style.background="red")
const utag= document.getElementById("element")
utag.style.backgroundColor="red";
// getClassName, gettagName
