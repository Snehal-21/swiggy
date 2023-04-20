function register(event){
    event.preventDefault();
    // alert("working")

    var name=document.getElementById("sname").value;
    var email=document.getElementById("semail").value;
    var password=document.getElementById("spassword").value;
    var confirmpassword=document.getElementById("sconfirmpassword").value;

    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password == confirmpassword){
                var sarray=JSON.parse(localStorage.getItem("swiggyusers")) || []
                var flag=false;
                for(var i=0;i<sarray.length;i++){
                    if(sarray[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==true){
                    alert("Email already exist.")
                }
                else{
                    var swiggy={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                    sarray.push(swiggy);
                    localStorage.setItem("swiggyusers",JSON.stringify(sarray));
                    alert("signed up successfully");
                    document.getElementById("sname").value=''
                    document.getElementById("semail").value=''
                    document.getElementById("spassword").value=''
                    document.getElementById("sconfirmpassword").value=''
                    window.location.href="./login.html"
                }
            }
            else{
                console.log("password not matched.")
            }

        }
        else{
            console.log("password should be minimum 8 digits.")
        }

    }
    else{
        console.log("all fields are required.")
    }
    
}






function login(event){
    event.preventDefault();

    var lemail=document.getElementById("lemail").value;
    var lpassword=document.getElementById("lpassword").value;
    var swiggyuser={}

    if(lemail && lpassword){
        var swiggya=JSON.parse(localStorage.getItem("swiggyusers"))
        var flag=false;
        for(var i=0;i<swiggya.length;i++){
            if(swiggya[i].uemail==lemail && swiggya[i].upassword==lpassword){
                flag=true;
            }
        }
        if(flag==true){
            swiggya[i]=swiggyuser;
            swiggya.push(swiggyuser);
            // console.log(swiggya)
            localStorage.setItem("swiggylogin",JSON.stringify(swiggya))
            document.getElementById("lemail").value=''
            document.getElementById("lpassword").value=''
            alert("User log in successfully")
            // window.location.href="./location.html"
        }
        else{
            alert("credentials not matched.")
           
        }
    }
    else{
        console.log("both fields are required")
    }
}