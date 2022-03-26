/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';

function Posts() {
    // const { params } = props.match;

    return (
        <div>
            <h1>
                {/* This is {params.category} / {params.topic} page */}
                this is post page
                <ul>
                    <li>
                        <NavLink to="/posts/1">post 1</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/posts/2">post 2</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/posts/3"> post 3 </NavLink>
                    </li>
                </ul>
            </h1>
        </div>
    );
}

export default Posts;
