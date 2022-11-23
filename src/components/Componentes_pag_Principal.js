import { Link } from 'react-router-dom'
export const BotonesSuperior = () =>{

    return(

    <>
    <div className="top">
    <Link className="buttonSoporte" to="/">Home</Link>
        <Link className="buttonSoporte" to="/Soporte">Soporte</Link>
        <Link className="buttonRestaurante" to="/Iniciar">Restaurante</Link>
        <Link className="buttonEntrar" to="/Entrar">Entrar</Link>       
    </div>

    </>
    )
}



export const Contenedor = () =>{

    return(
        <>
    <div className="contenedor">
    
        <h1>Eatpod</h1>
    
   
    <div>
        <p>
            Comida, cuando no hay nadie más cerca.
        </p>
    </div>
</div>
</>
    )

 }

 export const Grides = () =>{

    return(
        <>
        <div className="parent">

<div className="div1">
    <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjOm6GY7Z75AhX6bTABHdktCJMQPAgI">
        <img src="src/imagenes/fast-food.jpg" />
    </a>
</div>

<div className="div2">
    <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjOm6GY7Z75AhX6bTABHdktCJMQPAgI">
        <img src="src/imagenes/double-burger.jpg" />
    </a>
</div>
<div className="div3">
    <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjOm6GY7Z75AhX6bTABHdktCJMQPAgI">
        <img src="src/imagenes/classic-burger.jpg" />
    </a>
</div>
</div>
        
        </>

    )
 }

export const Unete = () =>{

return (
<>
  <div class="unete1">
        <h1 class="unete">Únete a Eatpod!</h1>

        <div class="parent2">
            <div class="div4">
                <img src="src/imagenes/barista-4841593_960_720.jpg" />
                <h3>Registra tu restaurante</h3>
                <p>Descubre los beneficios que tienen los aliados que ya trabajan con Eatpod.</p>
                <br /><br />
                <a href="RegistroRestaurante.html"
                    class="RegistrarRestaurante">Conocer más</a>
                </div>
                <div class="div5"> <img src="src/imagenes/D7BUIPM5HVBSNNN2VXTGA3SWHI.jpg"/>
                    <h3>¡Únete como repartidor!</h3>
                    <p>Gana dinero extra entregando domicilios, tenemos las mejores tarifas y beneficios..</p>
                    <br /><br />
                    <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjOm6GY7Z75AhX6bTABHdktCJMQPAgI"
                        class="RegistrarRestaurante">Conocer más</a>
                </div>
                <div class="div6"><img src="src/imagenes/speciality-coffee-4568580_960_720.jpg" />
                    <h3>¡Cafe!</h3>
                    <p>No supe que poner aqui pero a nadie le cae mal un cafe...</p>
                    <br /><br />
                    <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjOm6GY7Z75AhX6bTABHdktCJMQPAgI"
                        class="RegistrarRestaurante">Conocer más</a> 
                </div>
                </div>
                </div>




</>
)
}
