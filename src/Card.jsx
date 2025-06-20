import React, {useState} from 'react'
function Card(){
    const [ color , setColor ] = useState("#ffffff")
    const updateColor = (e) => setColor(e.target.value)
    return(
        <div className="color-pic">
            <div className="color">
                <h1>COLOR PICKER</h1>
                <div className="color-picker" >
                <p>SELECTED COLOR : {color}</p>
                </div>
                <label>SELECT A COLOR</label>
                <input type="color" value={color} onChange={updateColor} />


            </div>
         </div>



    )


}
export default Card