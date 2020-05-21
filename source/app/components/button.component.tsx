// Core
import * as React from 'react';


export interface IProps {
    children?: any;
    block?: boolean;
    type?: 'button' | 'submit' | 'reset';
};


const Button: React.FC<IProps> = ({
    type = 'button',
    children = 'Button',
    block = false,
}) => (
    <button
        type={type}
        children={children}
        className={`button -primary ${block ? '-block' : ''}`}
    />
);


export default Button;