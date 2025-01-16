import Proditem from "./proditem"

const RenderProduct =(props)=>{
    const {listofprod}=props
    return(
        <>
            <h5>Render prod</h5>
            
                {listofprod.map((item,index)=>{
                    return(
                        // <Proditem single={item} key={index}/>
                        <li key={index}>{item}</li>
                    )
                })}
            
        </>
    )
}

export default RenderProduct