// Core
import * as React from 'react';


// Hooks
import useField from '../hooks/field.hook';


export interface IProps {
    name: string;
};


const Message: React.FC<IProps> = ({ name }) => {
    const { error } = useField(name);
    return (
        error ? <div className="message" children={error} /> : null
    );
}


export default Message;