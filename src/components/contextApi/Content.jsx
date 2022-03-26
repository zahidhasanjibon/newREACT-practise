import React, { useContext } from 'react';
import MainCounter from '../RenderProps/Counter';
import HoverCounter from '../RenderProps/HoverCounter';
import Context from './ThemeContext';

function Content() {
    const context = useContext(Context);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>this is content</h1>
            <MainCounter>
                {(counter, incrementCounter) => (
                    <HoverCounter
                        count={counter}
                        handleCounter={incrementCounter}
                        theme={theme}
                        themeChanger={switchTheme}
                    />
                )}
            </MainCounter>
        </div>
    );
}

// class Content extends React.Component {
//     componentDidMount() {
//         console.log(this.context);
//     }

//     render() {
//         const { theme: newTheme, switchTheme: newSwitchTheme } = this.context;
//         return (
//             <div>
//                 <h1>this is content</h1>
//                 <MainCounter>
//                     {(counter, incrementCounter) => (
//                         <Context.Consumer>
//                             {({ theme, switchTheme }) => (
//                                 <HoverCounter
//                                     count={counter}
//                                     handleCounter={incrementCounter}
//                                     theme={theme}
//                                     themeChanger={switchTheme}
//                                 />
//                             )}
//                         </Context.Consumer>
//                     )}
//                 </MainCounter>

//                 <MainCounter>
//                     {(counter, incrementCounter) => (
//                         <HoverCounter
//                             count={counter}
//                             handleCounter={incrementCounter}
//                             theme={newTheme}
//                             themeChanger={newSwitchTheme}
//                         />
//                     )}
//                 </MainCounter>
//             </div>
//         );
//     }
// }
// Content.contextType = Context;
export default Content;
