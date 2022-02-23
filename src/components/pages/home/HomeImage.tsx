import { useSelector } from "react-redux";
import { home } from "../../../data/home"

interface State {
    Home: any
};

export const HomeImage = () => {
    const { sliders } = useSelector( (state: State) => state.Home );
    return (
        <section className="banner">
            { sliders.map((data:any,i:number) => (
                <div className="box" key={i}>
                    <img src={`${data.image}`} alt=""/>
                    <div className="content">
                        <span>oferta especial</span>
                        <h3>{data.content}</h3>
                        <a href="#" className="btn">comprar ahora</a>
                    </div>
                </div>
            ))}
        </section>
    )
}
