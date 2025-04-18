import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";


export function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}
// Note that Outlets are used to render the child routes, which correspond to each page.