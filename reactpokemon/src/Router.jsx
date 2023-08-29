import { Routes, Route} from 'react-router-dom'
import { Home} from './pages/Home'
import { Pokedex } from './pages/Pokedex';
import { Lendarios } from './pages/Lendarios';
import { DefautLayout } from './layouts/DefautLayout';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefautLayout />}>
            <Route path="/" element={ <Home /> }/>
            <Route path="/pokedex" element={ <Pokedex /> }/>
            <Route path="/lendarios" element={ <Lendarios /> }/>
            </Route>
        </Routes>
    );
}