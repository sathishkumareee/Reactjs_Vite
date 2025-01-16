import RenderProduct from "./RenderProducts"

const products=['apple','orange','pine apple']
const Productlist =()=>{
    return(
        <>
        <h4>Product list</h4>
        {/* passing as props key name is userdefine  */}
        <RenderProduct listofprod={products}/>
        </>
    )
}

export default Productlist