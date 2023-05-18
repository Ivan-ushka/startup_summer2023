import './App.css';
import SearchJob from "./pages/searchJob/searchJob";
import {MantineProvider} from '@mantine/core';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vacancy from "./pages/vacancy/vacancy";
import Favourites from "./pages/favorities/favourites";

function App() {
    return (
        <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<SearchJob />}/>
                        <Route path="/vacancy" element={<Vacancy />}/>
                        <Route path="/favourites" element={<Favourites />}/>
                    </Routes>
                </div>
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
