import { Routes, Route } from "react-router-dom";
import { CharactersPage } from "./pages/characters";
import { LoginPage } from "./pages/login";
import { RouterLayout } from "./common/RouterLayout";
import { FC} from "react";
import { CharacterPage } from "./pages/specificCharacter";
import { HomePage } from "./pages/home";
import { RegisterPage } from "./pages/register";
import { StorePage } from "./pages/store";
import { ShoppingCartProvider } from "./context/shoppingCart.context";


export const AppRouter: FC<{}> = () => {


    return (
        <ShoppingCartProvider>
        <Routes>
            <Route path="/" element={<RouterLayout/>} >
                <Route path="/" element={<HomePage/>}/>
                <Route path="/characters" element={<CharactersPage/>}/>
                <Route path="/character/:id" element={<CharacterPage/>}/>
                <Route path="/store" element={<StorePage/>}/>
            </Route>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        </ShoppingCartProvider>
    )
}