/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate, useParams } from 'react-router-dom';

function Post() {
    const params = useParams();

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/posts', {
            replace: true,
        });
        // navigate(-1)  back 1 step
    };
    return (
        <div>
            <h1>this is post page </h1>
            <p>post id is {params.id}</p>
            <button type="button" onClick={goBack}>
                go to posts
            </button>
        </div>
    );
}

export default Post;
