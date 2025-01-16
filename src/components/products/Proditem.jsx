const Proditem=(props)=>{
    const {single,key}=props
    return(
        <div key={key}>
        <h5>{single}</h5>
        <button>click</button>
        </div>
    )
}

export default Proditem