const React = require('react')


module.exports = function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a href="/" className='img-a'><img className='logo-img' src="https://static.insales-cdn.com/assets/1/3348/1772820/1702821916/logo.png" alt="" /></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-brand" href="/delivery">Доставка</a>
                            <a className="navbar-brand" href="/catalog">Каталог</a>
                            <a className="navbar-brand" href="/contacts">Контакты</a>
                            <a className="navbar-brand" href="/vacancies">Вакансии</a>
                            <a className="navbar-brand" href="/blog">Блог</a>

                            <a href="/reg/user" className="navbar-brand"> lk</a>

                        </li>
                    </ul>
                    <form className="">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </div>
        </nav>
    )
}
