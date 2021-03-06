import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className='h-10'>
            <Link
                style={{
                    backgroundColor: match ? "rgb(225 29 72) " : "",
                    color: match ? "white " : "white",
                    border: match ? "" : "1px solid lightgray"
                }
                }
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;