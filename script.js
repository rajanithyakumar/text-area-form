function addStudent(){

    var name=document.getElementById("name").value
    var age=document.getElementById("age").value
    var course=document.getElementById("course").value
    var email=document.getElementById("email").value
    
    var gender=document.querySelector('input[name="gender"]:checked').value
    
    var table=document.getElementById("studentTable")
    
    var row=table.insertRow()
    
    row.insertCell(0).innerHTML=name
    row.insertCell(1).innerHTML=age
    row.insertCell(2).innerHTML=course
    row.insertCell(3).innerHTML=gender
    row.insertCell(4).innerHTML=email
    
    var action=row.insertCell(5)
    
    action.innerHTML="<button onclick='deleteRow(this)'>Delete</button>"
    
    }
    
    function deleteRow(button){
    
    var row=button.parentNode.parentNode
    row.remove()
    
    }
    