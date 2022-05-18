if (localStorage.getItem('pres')!=null){
    var presentations=JSON.parse(localStorage.getItem('pres'));
} else {
    var presentations = [];
}
let tableparse = JSON.parse(localStorage.getItem('pres'))
function submit(){
        if(tableparse != null){
            if(tableparse[0][5]==null){
            i=0;
            } else{
            i=tableparse.length;
            }
        }else {
        i=0
        }
        i++
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let title = document.getElementById('title').value;
        let mail = document.getElementById('mail').value;
        let presURL = document.getElementById('url').value;
        let presentation = [firstName,lastName,title,mail,presURL,i]
        presentations.push(presentation);
        localStorage.setItem('pres',JSON.stringify(presentations));
}
function writeTable(){
    if(localStorage.getItem('pres')!=null){
    let tableContent = JSON.parse(localStorage.getItem('pres'));
    document.getElementById('tbody').innerHTML = ''
    tableContent.forEach(e=>{
    document.getElementById('tbody').innerHTML+=`
    <tr>
    <td>${e[0]}</td>
    <td>${e[1]}</td>
    <td>${e[2]}</td>
    <td>${e[3]}</td>
    <td><a href="${e[4]}" target="_blank">${e[4]}</a></td>
    </tr>`


})
}else if (localStorage.getItem('pres')==null){
    document.getElementById('tbody').innerHTML = ''
}
}

function deleteElement(a){
    tableparse = JSON.parse(localStorage.getItem('pres'))
    if (tableparse.length>1){
    tableparse.splice(a-1,1);
    localStorage.setItem('pres',JSON.stringify(tableparse))
    writeTable();
    }else if(tableparse.length==1){
        tableparse = null;
        localStorage.clear()
        writeTable();
    }
}


// deleteElement(1);
writeTable();
document.getElementById('submit').addEventListener('click',submit);
document.getElementById('submit').addEventListener('click',writeTable);
document.getElementById('suppression').addEventListener('click',function(){
    a=Number(document.getElementById('rowValue').value);
    deleteElement(a);
    writeTable()
})
// document.querySelector('.btn-danger').addEventListener('click',deleteElement(1))

