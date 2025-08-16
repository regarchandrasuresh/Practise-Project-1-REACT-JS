import Price from "./Price";


function Product({Title,Description,idx}){
    let styles={
        border:"2px solid red",
        height:"450px",
        width:"150px",
      textAlign:"center"
       
        
    }
      let oldprice = ["3000","4000","7000"];
      let newprice = ["2000","5000","1000"];
    return (
      <div style={styles}>
      <h2>{Title}</h2>
      <h4>{Description}</h4>
          <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
      <button style={{color:"white",backgroundColor:"red"}}>Order Now</button>
      </div>

    )
}
export default Product;
