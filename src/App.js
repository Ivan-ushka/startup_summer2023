import './App.css';
import SearchJob from "./pages/searchJob/searchJob";
import {MantineProvider} from '@mantine/core';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Vacancy from "./pages/vacancy/vacancy";
import Favourites from "./pages/favorities/favourites";
import EmptyPage from "./pages/emptyPage/emptyPage";

function App() {
    return (
        <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<SearchJob />}/>
                        <Route path="/vacancy/:id" element={<Vacancy />}/>
                        <Route path="/favourites" element={<Favourites />}/>
                        <Route path="/emptypage" element={<EmptyPage />}/>
                    </Routes>
                </div>
            </MantineProvider>
        </BrowserRouter>
    );
}

export default App;
