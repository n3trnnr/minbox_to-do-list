import ContextProvider from "../../Context/TodosContext";
import Router from "../../Router/Router";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <ContextProvider>
                <Router />
            </ContextProvider>
        </>
    );
}

export default Layout;