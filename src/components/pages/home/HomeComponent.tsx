import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

interface State {
    Home: any
};

export const HomeComponent = () => {
    const { sliders } = useSelector( (state: State) => state.Home );
    return (
        <section className="home">
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
        >
            { sliders.map((data:any,i:number) => (
                <SwiperSlide
                    style={{ 
                        background: `url(${data.image})`,
                        backgroundRepeat: 'no-repeat'
                    }}
                    className='slide'
                    key={i}
                    >
                        <div className="content">
                            <span>{data.title}</span>
                            <h3>{data.content}</h3>
                            <a href="#" className="btn">comprar ahora</a>
                        </div>     
                </SwiperSlide>
            ))}
        </Swiper>

        </section>
    )
}
