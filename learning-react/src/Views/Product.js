import React  {useState, useEffect } from 'react'
import axios from 'axios'

function Product(){
    const url = 'https://복붙한값"
    const [product, setProduct] =useState(null)
    axios.get(url)
	.them(response => {
		setProduct(response.data)
	})
    return(
        <div>
            <h1>The product page</h1>
        </div>
    );
}

export default Product