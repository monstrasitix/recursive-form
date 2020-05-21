// Core
import * as React from 'react';



export interface IProps {
    children?: any;
    flex?: boolean;
};


const Field: React.FC<IProps> = ({ children = null, flex = false }) => (
    <div className={`field ${flex ? '-flex' : ''}`} children={children} />
);


export default Field;