// Core
import * as React from 'react';


// Hooks
import useField from '../hooks/field.hook';


export interface IProps {
    name?: any;
    children?: any;
};


const Label: React.FC<IProps> = ({
    name,
    children,
}) => (
    <label htmlFor={name} className="label" children={children} />
);


export default Label;