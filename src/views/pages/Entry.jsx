const React = require('react')
const Layout = require('../Layout')

module.exports = function Entry() {
    return (
        <Layout>
            <link rel="stylesheet" href="../css/style.css" />
            {/* <div className='entry-container'> */}
            <div className='entry-container'>
                {/* <p className='adres'>Адрес шоурума: Москва, Пятницкая 54 стр 1</p> */}
                <a href='/user/reg' className="entry-link"> <span className="topbar-work-time">Зарегестрироваться</span></a>
                <a href="/user/login" className="entry-link"> <span>Войти</span></a>
            </div>

        </Layout >

    )
}