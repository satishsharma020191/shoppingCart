export const validator = {
    passwordRules: (value, type) => {
        if (value && value.length < 6) {
            return { type: type, error: true, message: `${type} must have 6 characters` };
        }
        if (value && !/\d/.test(value)) {
            return { type: type, error: true, message: `${type} must have number.` };
        }
        if (value && !/[a-zA-Z]/.test(value)) {
            return { type: type, error: true, message: `${type} must have alphabet` };
        }
        if (value && /\s/g.test(value)) {
            return { type: type, error: true, message: `${type} must not have space` };
        }

        return { type: type, error: false, message: '' }
    },
    emailRules: (value, type) => {
        if (value) {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!value.match(mailformat)) {
                return { type: type, error: true, message: `${type} is invalid.` }
            }
        }
        return { type: type, error: false, message: '' }
    },
    requiredRule: (value, type) => {
        if (!value) {
            return { type: type, error: true, message: `${type} is required.` }
        }
        return { type: type, error: false, message: '' }
    },
    validateForm: (val, type) => {
        let validateResponse = '';

        validateResponse = validator.requiredRule(val, type);
        if (validateResponse.error) return validateResponse;

        if (type === 'password' || type === 'confirmPassword') {
            validateResponse = validator.passwordRules(val, type);
        }

        if (type === 'email') {
            validateResponse = validator.emailRules(val, type);
        }

        return validateResponse;

    }
}