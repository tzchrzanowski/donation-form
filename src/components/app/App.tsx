import React, {useState} from 'react';
import './App.css';
import TopHeader from "../top-header/TopHeader";
import Form from "../form/Form";

function App() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
    <div className={"App flex justify-center flex-column"}>
        {windowWidth > 768 && <TopHeader />}
        <div className={"page-content-container flex justify-center"}>
            <Form windowWidth={windowWidth} />
        </div>
    </div>
  );
}

export default App;
