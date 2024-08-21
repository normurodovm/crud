import { ProductsData } from "./products-data"
import { create } from 'zustand'
import { useCount } from "./zustand"

export const Products = () => {
    const {count,plus,minus,reset,price} = useCount()
    return<>
        <h1>{count}</h1>
        {ProductsData.map((item)=>
        <div><h2>{item.name}</h2>
            <p>{item.price}</p>
            <h1>{count}</h1>
            {price=item.price}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>

        </div>)}
    </>
}