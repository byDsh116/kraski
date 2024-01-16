const React = require('react')
const Layout = require('../Layout')
const Footer = require('../components/Footer')
const Map = require('../components/Map')

module.exports = function Main({ email }) {
    return (
        <Layout email={email}>
            <div className='home'>
                <img className='main-img' src="https://static.insales-cdn.com/r/t21-TEJs4Rs/rs:fit:1300:1300:1/plain/files/1/4316/30601436/original/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%B0%D0%B9%D1%82-10.png@webp" alt="" />

            </div>
            <h1>{email}</h1>
            <Footer />
            <Map />
        </Layout>

    )
}