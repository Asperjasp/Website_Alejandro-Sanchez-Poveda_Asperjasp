import { Link } from "react-router-dom";

export function Navbar(){


    return(
    <>
        <Link to="/"> <button> <h3> Alejandro Sánchez Poveda </h3> </button> </Link>
        <Link to="/Biography"> <button className="Nav-Bar-Button"> <h3> Biography </h3> </button> </Link>
        <Link to="/Portfolio"><button className="Nav-Bar-Button"> <h3> Projects </h3> </button> </Link>
        <Link to="/Publications"> <button className="Nav-Bar-Button"> <h3>Publications </h3> </button> </Link>
        <Link to="/Contact"> <button className="Nav-Bar-Button"> <h3> Contact </h3> </button> </Link>
    </>
    )
}