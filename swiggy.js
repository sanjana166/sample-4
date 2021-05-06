
stud=[{"usn":"01fe18bcs179","pwd":"ruta"},
         {"usn":"01fe18bcs129","pwd":"nidhi"},
         {"usn":"01fe18bcs191","pwd":"sanji"},
         {"usn":"01fe18bcs047","pwd":"arpita"},
         {"usn":"01fe18bcs043","pwd":"anusha"}]


function login()
{
         
    username=document.getElementById("username-field").value
    password=document.getElementById("pass-field").value
         
         
    var found=0
    for (let index = 0; index < stud.length; index++) {
         
    if (stud[index].usn == username & stud[index].pwd==password){
             found=1
        }
    }
         
    if(found){
        alert("Login Successfull!!!")
            window.location.replace("menu.html");
        }
    else{
        alert("Access Denied. ")
        }
         
             
         
}         

function register()
{
    username=document.getElementById("username-field").value
    password=document.getElementById("pass-field").value

    alert("You have signed up. Now log in")

    stud.push({"usn":username, "pwd":password})
    
}



var bill=0
function addBurgar()
{
    bill=bill+50
}
function addPizza()
{
    bill=bill+90
}
function addFrenchFires()
{
    bill=bill+70
}
function addGarlicBread()
{
    bill=bill+60
}


function GenerateBill()
{
    if(bill>1500){
        bill=bill-bill*0.10
    }


  

    document.getElementById("bill-amt").innerHTML="Bill: "+bill
    

}
