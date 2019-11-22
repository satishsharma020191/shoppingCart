export const validator = {
    passwordRules : (password)=> {
        if (password.length < 6) {
            return {type:'password', error:true ,message:'password must have 6 characters'};
        }

        if (!/\d/.test(password)) {
            return {type:'password', error:true ,message:'password must have number'};
        }

        return {type:'password', error:false ,message:''}
    }
}