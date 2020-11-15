import { TextField } from '@material-ui/core'
import * as React from 'react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ProductDto } from '../models/ProductDto'

export interface ProductProps {
    product: ProductDto
    setProduct: Dispatch<SetStateAction<ProductDto>>
}

export const Product = ({product, setProduct} : ProductProps)=> {

    const handleChange = (name : string) => (event: ChangeEvent<HTMLTextAreaElement>) => setProduct(old => ({
        ...old,
        [name] : event.target.value
    }))


    return (
    <>
    <TextField value={product.name} onChange={handleChange('name')}></TextField>
    <TextField value={product.salePrice} onChange={handleChange('salePrice')}></TextField>
    <TextField value={product.productionCost} onChange={handleChange('productionCost')}></TextField>
    </> 
    )
}