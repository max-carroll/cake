import { TextField } from '@material-ui/core'
import * as React from 'react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ProductDto } from '../models/ProductDto'
import { CustomerDto } from '../models/CustomerDto'

export interface CustomerChooserProps {
    customers: Array<CustomerDto>
    selected?: CustomerDto
    setSelected: Dispatch<SetStateAction<CustomerDto| undefined>> 
}

export const CustomerChooser = ({customers, selected, setSelected} : CustomerChooserProps)=> {

    


    return (
    <>
        {customers.map(c=> <h2>{c.name}</h2>)}
    </> 
    )
}