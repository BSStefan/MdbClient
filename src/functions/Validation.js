export const Validation = (name, value) =>{
    switch(name){
        case "first_name":
            if(value.length<3 || value.length>30){
                return ([false, "Name must have between 3 and 30 characters."]);
            }
            else {
                return ([true, '']);
            }
        case "last_name":
            if(value.length<3 || value.length>30){
                return ([false, "Last name must have between 3 and 30 characters."]);
            }
            else {
                return ([true, '']);
            }
        case "email":
            let passArray=value.split("@");
            if(passArray.length === 2){
                if(passArray[1] !== ''){
                    let passSecond = passArray[1].split(".");
                    if(passSecond.length >= 2){
                        if(passSecond[1] !== ''){
                            return ([true, '']);
                        }
                    }
                }
            }
            return ([false, "Email has to be type of email."]);
        case "password":
            if(value.length<6){
                return ([false, "Password must have at least 6 characters!"]);
            }
            else {
                return ([true, '']);
            }
        default:
            return ([true, '']);
    }
};
