import { Route, Routes } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>This is About page</h1>
            <Routes>
                <Route path="myself" element={<p>my name is jibon</p>} />
            </Routes>
        </div>
    );
}

export default About;
