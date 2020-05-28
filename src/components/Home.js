import React from 'react'
import {Link} from 'react-router-dom'
import 'bulma/css/bulma.css'

const Home = () =>{
    return(
        <div className='container'>
            Aquí será donde va la pagina de inicio<br/>
            <Link to='/guia'>Guía de compra</Link>
        </div>
    )
}

export default Home;