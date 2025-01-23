import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import All from "../pages/All";
import Active from "../pages/Active";
import Completed from "../pages/Completed";
import Main from "../components/Main/Main";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Main />}>
        <Route index element={<Navigate to={'all'} replace />} />
        <Route path="all" element={<All />} />
        <Route path="active" element={<Active />} />
        <Route path="completed" element={<Completed />} />
    </Route>
))

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router;