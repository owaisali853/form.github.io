function Validate(){
    if(document.myForm.Name.value==""){
        alert("Enter Your First and Last Name");
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.email.value==""){
        alert("Enter Your Email id!");
        document.myForm.email.focus();
        return false;
    }
    var str = document.myForm.email.value;
    var len=str.length;
    var atcount=0;
    var atpos;
    var flag=1;
    
    for(i=0; i<len; i++){
        if(str[i]=='@'){
            atpos=i;
            atcount++;
        }
        if(str[i]==' '){
            alert("Email address doesn't contain space!");
            document.myForm.email.focus();
            return false;
        }
    }
    if(atcount!=1 || str[len-1]=='.'|| str[len-2]=='.' || str[atpos+1]=="."){
        alert("Invalid syntax!");
        document.myForm.email.focus();
        return false;
    }
    for(i=atpos; i<len; i++){
        if(str[i]=="."){
            flag=0;
            break;
        }
    }
    if(flag){
        alert("Invalid syntax!");
        document.myForm.email.focus();
        return false;
    }
    
    if(document.myForm.num.value.length!=11 || isNaN(document.myForm.num.value)){
        alert("Enter 11 digit phone Number");
        document.myForm.num.focus();
        return false;
    }
    if(document.myForm.Zip.value=="" ||document.myForm.Zipcode.value.length !=5){
        alert("Enter 5 digits zipcode");
        document.myForm.Zipcode.focus();
        return false;
    }
    
    alert("submited!");
}
