// Core
import * as React from 'react';

// Hooks
import useField from '../hooks/field.hook';


export interface IProps {
    type?: 'hidden' | 'text' | 'number' | 'date' | 'color';
    [key: string]: any;
};


const Input: React.FC<IProps> = ({
    name,
    type = 'text',
    ...rest
}) => {
    const field = useField(name);

    const handleChange = React.useCallback(
        event => field.handleChange(event.target.value),
        [],
    );

    return (
        <input
            {...rest}
            name={name}
            id={name}
            ref={field.reference}
            onChange={handleChange}
            className="input"
            type={type}
        />
    );
};


export default Input;