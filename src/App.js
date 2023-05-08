import './App.css';
import SearchJob from "./pages/searchJob";
import {MantineProvider} from '@mantine/core';

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div className="App">
                <SearchJob/>
            </div>
        </MantineProvider>
    );
}

export default App;
