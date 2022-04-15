import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Next.js</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/items">
                <a className="nav-link" aria-current="page" >Items</a>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar