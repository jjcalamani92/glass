import { HeadingPrimary } from '../../layouts/HeadingPrimary'
import { ProductComponent } from './ProductComponent'

interface Props {
    title: string
    category: string
}

export const ProductsPages = ( {title, category}:Props) => {
    return (
        <>
            <HeadingPrimary
                    titleP={title}  
                />
            <section className='product'>
                <ProductComponent
                    category = {category} 
                />
            </section>
        </>
    )
}
