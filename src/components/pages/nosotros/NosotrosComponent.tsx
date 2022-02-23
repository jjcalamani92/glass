import React from 'react'
import { HeadingTertiary } from '../../layouts/HeadingTertiary'

export const NosotrosComponent = () => {
    return (
        <>
            <HeadingTertiary
                title='por qué elegirnos'
            />
            <section className="about">
                <div className="row">
                    <div className="image">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194760/glass/about/about-img_h8thb8.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <h3>Los Mejores Vendedores De Anteojos</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In assumenda ut nisi suscipit voluptatum, hic perspiciatis fugit quae quasi quod laudantium doloremque repellat, incidunt minus architecto dolore vero, molestiae quaerat?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis necessitatibus exercitationem quam tempore recusandae iure qui, nobis ut aliquam.</p>
                        <a href="#" className="btn">leer más</a>
                    </div>
                    
                </div>

                <div className="icons-container">

                    <div className="icons">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194763/glass/about/icon-1_su3cpj.png" alt=""/>
                        <h3>todos los tamaños</h3>
                    </div>

                    <div className="icons">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194763/glass/about/icon-2_bef8r7.png" alt=""/>
                        <h3>entrega gratis</h3>
                    </div>

                    <div className="icons">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194763/glass/about/icon-3_v7pxhm.png" alt=""/>
                        <h3>devoluciones faciles</h3>
                    </div>

                    <div className="icons">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/about/icon-4_q9rcpe.png" alt=""/>
                        <h3>pagos faciles</h3>
                    </div>

                    <div className="icons">
                        <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/about/icon-5_t5zhfi.png" alt=""/>
                        <h3>soporte 24/7</h3>
                    </div>

                </div>

                </section>
        </>
    )
}
