import { HeadingTertiary } from "../../layouts/HeadingTertiary"
import { ProductCard } from "./ProductCard"
import { useSelector } from 'react-redux';
import { getProductByCategory } from "../../../selectors/getProductByCategory";

interface Props {
    category: any
};
interface State {
    Product: any
};
export const ProductComponent = ( { category }:Props ) => {
    const { products } = useSelector( (state: State) => state.Product );
    const product = getProductByCategory ( products, category );

    return (
        <>
            <HeadingTertiary
                title='Monofocales'
            />
            <div className="box-container">
                {
                    product.map((data:any) => (
                        <ProductCard 
                            key={data.id}
                            {...data}
                        />
                    ))
                }

            </div>
        </>
        
    )
}
