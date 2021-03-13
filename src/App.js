import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <div className='w-full h-full top-0 bg-custom-black m-0 p-0'>
                <Main />
            </div>
        </BrowserRouter>
    );
};

export default App;
