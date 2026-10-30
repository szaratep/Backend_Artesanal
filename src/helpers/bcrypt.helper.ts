import { genSaltSync, hashSync, compareSync } from 'bcrypt';

const encryptedPassword = (orinalPassword: string): string | null => {
    try{
        const salt = genSaltSync(10);

        return hashSync(orinalPassword, salt);
        
    }catch(error){
        console.error(error);
        return null;
    }
}

const validatePassword = (originalPassword: string, hasPassword: string) : boolean | null => {
    try {
        return compareSync(originalPassword, hasPassword);
    }catch(error){
        console.log(error);
        return null;
    }
}

export {
    encryptedPassword,
    validatePassword
};