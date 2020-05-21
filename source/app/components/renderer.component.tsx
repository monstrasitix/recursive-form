// Core
import * as React from 'react';


export interface IProps {
    list: any;
};


const nestedChildren = (children, renderer) => {
    if (typeof children == 'string') {
        return children;
    }

    if (children && children.length > 0) {
        return renderer({ list: children });
    }

    return children;
};


const Renderer: (any) => React.FC<IProps> = (components) => {
    const renderer = ({ list }) => (
        list.map(({ type, attributes, children }, index) => (
            components[type] && React.createElement(
                components[type],
                { ...attributes, key: `${type}.${index}` },
                nestedChildren(children, renderer),
            )
        ))
    );
    return renderer;
};



export default Renderer;