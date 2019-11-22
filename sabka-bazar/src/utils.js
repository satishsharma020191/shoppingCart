export const validator = {
    passwordRules : (value, type)=> {
        if (value && value.length < 6) {
            return {type:type, error:true ,message:`${type} must have 6 characters`};
        }

        if (value && !/\d/.test(value)) {
            return {type:type, error:true ,message:`${type} must have number.`};
        }

        return {type:type, error:false ,message:''}
    },
    emailRules : (value, type)=> {
        if(value){
            return {type:type, error:true, message:`${type} is invalid.`}
        }
        return {type:type, error:false, message:''}
    },
    requiredRule : (value, type)=> {
        if(!value){
            return {type:type, error:true, message:`${type} is required.`}
        }
        return {type:type, error:false, message:''}
    },
    validateForm : (e, type)=> {
        let val = e.target.value;
        let validateResponse = '';

        validateResponse = validator.requiredRule(val, type);
        if(type=='password' || type=='confirmPassword'){
            validateResponse = validator.passwordRules(val, type);
        }

        if(type=='email'){
            validateResponse = validator.emailRules(val, type);
        }

        return validateResponse;

    }
}