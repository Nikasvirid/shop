function Buttons ({Filtered}) {
    return(
        <div className="cont">
<button className="change" onClick={()=>Filtered("dress")}> Dresses</button>
<button className="change" onClick={()=>Filtered("pants")}> Pants</button>
<button className="change" onClick={()=>Filtered("skirt")}> Skirts</button>
<button className="change" onClick={()=>Filtered("shoes")}> Shoes</button>
<button className="change" onClick={()=>Filtered("shirt")}> Shirts</button>
        </div>
    )
}
export default Buttons;