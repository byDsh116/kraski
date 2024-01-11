const React = require('react')
const Layout = require('../Layout')

module.exports = function Entry() {
    return (
        <Layout>
            <link rel="stylesheet" href="../css/style.css" />
            <div className='entry-container'>
                <div className='entry-raw'>

                    <h1>Вам нужно зарегестрироваться или войти :)</h1>
                    <a href='/user/reg'>  <button type="button" className="btn btn-outline-primary">Registration</button></a>
                    <a href='/user/login'>  <button type="button" className="btn btn-outline-primary">Login</button></a>
                </div>

            </div>

        </Layout>

    )
}