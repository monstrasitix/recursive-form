// Core
import * as React from 'react';
import { useForm, FormContext } from 'react-hook-form';


export interface IProps {
    onSubmit?: any;
    defaultValues?: any;
    validationSchema?: any;
};


const Form: React.FC<IProps> = ({
    children = null,
    defaultValues = {},
    validationSchema = {},
    onSubmit = () => {},
}) => {
    const methods = useForm({
        mode: 'onBlur',
        defaultValues,
        validationSchema,
    });

    return (
        <FormContext {...methods}>
            <form
                children={children}
                onSubmit={methods.handleSubmit(onSubmit)}
            />
        </FormContext>
    );
};


export default Form;