export const inputvalidation=(value,name)=>
{
let error={
    message:"",
    value:true,

};
switch(name){
    case"email":
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
        error.message="";
        error.value=true;
        return error;
    }
    error.message="* invalid Email-Id";
    error.value=false;
    return error;

    case"password":
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value))
     {
      error.message="";
        error.value=true;
        return error; 
     }
     error.message="* invalid password";
        error.value=false;
        return error;

    default:    
    error.message="invalid";
    error.value=false;
    return error;
    
        
}

}

           
