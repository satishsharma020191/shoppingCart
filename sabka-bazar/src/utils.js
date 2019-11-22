export const validator = {
    passwordRules : (value, type)=> {
        if (value && value.length < 6) {
            return {type:type, error:true ,message:`${type} must have 6 characters`};
        }

        if (value && !/\d/.test(value)) {
            return {type:type, error:true ,message:`${type} must have number`};
        }

        return {type:type, error:false ,message:''}
    }
}