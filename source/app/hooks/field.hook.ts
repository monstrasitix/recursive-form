// Core
import { useFormContext } from 'react-hook-form';


const useField = (name) => {
    const { setValue, register, errors } = useFormContext();

    return {
        reference: register,
        handleChange: value => setValue(name, value),
        error: errors[name]?.message,
    };
};


export default useField;