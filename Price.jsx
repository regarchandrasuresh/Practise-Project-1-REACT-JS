   function Price({oldprice,newprice}){
    let styles={
       textDecoration:"line-Through"
    }
    return(
        <>
        <span style={styles}>{oldprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{newprice}</span>
        </>
    )
}
     export default Price; 
