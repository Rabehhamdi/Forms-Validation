


function  a(){
    var nom = document.getElementById('nom').value;
    var Prenom = document.getElementById('Prenom').value;
    var Address = document.getElementById('Address').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var Comments = document.getElementById('Comments').value;
    let ok = true
    if( nom === "")
        {
            alert("le nom est vide");
            ok = false
        }
        else
        
        if (nom.length < 3)
        {
            alert("min de nom 3 est caractère"); ok = false
        } 
    

    if (Prenom === "")
    {
        alert("le Prenom est vide"); ok = false;
    }
        else
        if (Prenom.length < 3)
        {  
            alert("min de Prenom 3 est caractère"); ok = false
        }
        

    if (Address === "")
    {
        alert("le Address est vide"); ok = false
    }
        else
        if (Address.length < 8)
        {
            alert("min de Address 8 est caractère"); ok = false;
       
        }

    if (mail === "")
    {
        alert("le mail est vide"); ok = false
    }
        else
        {
        if (mail.length < 3)
        {
            alert("min de mail 3 est caractère"); ok = false
        }
            else
            if (!(mail.includes("@")))
            {
                alert("obligatoire de @"); ok = false;
            }
        }

    if (password === "")
    {
        alert("le password est vide"); ok = false;
    }
        else
        {
            if (password.length < 8)
            {
                alert("min de password 8 est caractère"); ok = false
            }
            else
            {
                var regex = /^.*(?=.{10,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/ ;
                if (!regex.test(password))
                { 
                    alert("password regex"); ok = false
                }       
            }
        }
        

    if (Comments === "")
    {
        alert("le Comments est vide"); ok = false;
    } 
        else
        {
            if (Comments.length < 8)
            { 
                alert("min de Comments 8 est caractère"); ok = false
            }
        } 
    
        if (ok === true) {
            document.getElementById('nom').value = "";
            document.getElementById('Prenom').value = "";
            document.getElementById('Address').value = "";
            document.getElementById('mail').value = "";
            document.getElementById('password').value = "";
            document.getElementById('Comments').value = "";
            alert("validation") 
        }
        
     
};


 

 