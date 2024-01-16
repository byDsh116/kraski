const React = require('react')


module.exports = function Navbar({ email }) {
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
                            {email ? (
                                <a href="/user/logout" className="navbar-brand ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                    {/* TODO: Добавить подсказку всплывающую "выход" */}
                                    {/* TODO: Этот тернарник не работает, что то с пропсом?' */}

                                </a>

                            )
                                :
                                (<a href="/user/entry" className="navbar-brand ">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg> </a>
                                )}


                        </li>
                    </ul>
                    <form className="">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </div >
        </nav >
    )
}
