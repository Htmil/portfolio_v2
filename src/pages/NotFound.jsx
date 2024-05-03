import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <>
        <h1 className="mainTitle text-9xl py-2">404</h1>
        <h1 className="mainTitle text-7xl py-2">Page Not Found</h1>
        <br></br>
        <p className="text-3xl py-5 font-semibold">The page you are looking for does not exist</p>
        <p className="text-3xl font-semibold">Click <Link to="/" className="underline text-blue-600">here</Link> to go back to the homepage!</p>
        </>
    )
}