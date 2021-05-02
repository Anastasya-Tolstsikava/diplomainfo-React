import React from 'react';

const Social = ({href = '', role = "button", icon}) => {
    return(
        <a
            href={href}
            className="btn btn-primary m-1"
            role={role}
        >
            {icon}
        </a>
    );
}

export default Social;
