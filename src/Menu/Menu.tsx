import React from 'react';

interface Props {
    addAtoms: any
    subtractAtoms: any
}

const menu: React.FC<Props> = (props) => {
    return (
        <div>
            <button onClick={props.addAtoms}>More Atoms</button>
    <button onClick={props.subtractAtoms}>Less Atoms</button>
    </div>
)
}

export default menu;