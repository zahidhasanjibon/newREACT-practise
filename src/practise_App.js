import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/router/About';
import DashBoard from './components/router/DashBoard';
import Home from './components/router/Home';
import Login from './components/router/Login';
import Navbar from './components/router/Navbar';
import NotFound from './components/router/NotFound';
import Post from './components/router/Post';
import Posts from './components/router/Posts';
import PrivateRoute from './components/router/PrivateRoute';
import Services from './components/router/Services';

function App() {
    // const isLogged = true;
    // return (
    //     <Router>
    //         <Navbar />
    //         <Switch>
    //             <Route exact path="/" component={Home} />
    //             <Route exact path="/about" component={About} />
    //             <Route exact path="/dashboard" component={DashBoard} />
    //             <Route exact path="/services">
    //                 <Services service="web development" />
    //             </Route>
    //             <Route exact path="/post/:category/:topic" component={Post} />

    //             <Route exact path="/login">
    //                 {isLogged ? <Redirect to="/dashboard" /> : <Home />}
    //             </Route>

    //             <Route component={NotFound} />
    //         </Switch>
    //     </Router>
    // );
    // const isLogged = true;
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/*" element={<About />} />
                {/* <Route path="/dashboard" element={<DashBoard />} /> */}
                <Route path="/services" element={<Services service="web development" />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/login" element={<Login />} />

                {/* <Route path="/login">{isLogged ? <Navigate to="/dashboard" /> : <Home />}</Route> */}
                {/* <Route path="/login" element={isLogged ? <Navigate to="/dashboard" /> : <Home />} /> */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashBoard />
                        </PrivateRoute>
                    }
                />

                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
}
export default App;
