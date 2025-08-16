import Product from "./Product";



function ProductGroup(){
    let styles={
        height:"500px",
        width:"1250px",
        border:"2px solid red",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"black",
        color:"white"
    }
    return (
        <div style={styles}>
            
            <Product Title="VIVO Y 12" Description="8gb ram , 128gb storage" idx={0} />
              <Product Title="REDMI 9" Description="8gb ram , 128gb storage "idx={1}/>
                <Product Title="REALME C 53" Description="8gb ram , 128gb storage," idx={2}/>
            
        </div>
    )
}
export default ProductGroup;
