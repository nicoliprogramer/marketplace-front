import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/RouterLayout";
import { FC} from "react";
import { CharacterPage } from "./pages/character";

export const AppRouter: FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>} >
                <Route path="/" element={<HomePage/>}/>
                <Route path="/character/:id" element={<CharacterPage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}