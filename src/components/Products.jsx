/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-undef */
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../store/cartSlice';
// import { fetchProduct, STATUSES } from '../store/productSlice';

// function Products() {
//     const { data, status } = useSelector((state) => state.product);
//     const dispatch = useDispatch();

//     // const [products, setProducts] = useState([]);
//     useEffect(() => {
//         dispatch(fetchProduct());
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         // async function getData() {
//         //     const res = await fetch('https://fakestoreapi.com/products');
//         //     const data = await res.json();
//         //     setProducts(data);
//         // }
//         // getData();
//     }, []);
//     const handleAdd = (product) => {
//         dispatch(add(product));
//     };

//     if (status === STATUSES.LOADING) {
//         return <h2>LOADING ....</h2>;
//     }
//     if (status === STATUSES.ERROR) {
//         return <h2>Error Occurs...</h2>;
//     }

//     return (
//         <div className="productsWrapper">
//             {data.map((pdt) => (
//                 <div className="card" key={pdt.id}>
//                     <div className="product-cont">
//                         <img src={pdt.image} alt="" />
//                         <h3>{pdt.title}</h3>
//                         <h4>{pdt.price}</h4>
//                     </div>

//                     <button onClick={() => handleAdd(pdt)} className="btn" type="button">
//                         Add to Cart
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Products;

import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../store/cartSlice';
import { fetchProducts, STATUSES } from '../store/productSlice';

function Products() {
    const history = useNavigate();
    const { data: products, status } = useSelector((state) => state.products);

    let allProducts = [];
    if (products) {
        allProducts = _.cloneDeep(products);
        console.log(allProducts);
        allProducts.map((elm) => {
            elm.quantity = 1;

            return elm;
        });
    }
    console.log(allProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
        history('/cart');
    };

    if (status === STATUSES.LOADING) {
        return <h2>LOADING ......</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2>ERROR OCCURS</h2>;
    }
    return (
        <div className="productsWrapper">
            {allProducts.map((pdt) => (
                <div className="card" key={pdt.id}>
                    <div className="product-cont">
                        <img src={pdt.image} alt="" />
                        <h3>{pdt.title}</h3>
                        <h4>{pdt.price}</h4>
                    </div>

                    <button onClick={() => handleAdd(pdt)} className="btn" type="button">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
