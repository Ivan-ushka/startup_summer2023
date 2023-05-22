import './App.css';
import SearchVacancies from "./pages/searchJob/searchVacancies";
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
                        <Route path="/" element={<SearchVacancies />}/>
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
