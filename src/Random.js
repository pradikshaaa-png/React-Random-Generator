import {useState} from "react"

import "./Random.css"
function Random()
{
    var [random,setrandom]=useState(null)
    
    function genran(){
       var newnum=Math.floor(Math.random()*100) + 1
        setrandom(newnum)
    }

    return(
<div class="container">
     <h1>Random Number Generator</h1>
{ random=== null ? <h2>No number generated yet</h2>: <h2>{random}</h2>}
    <button onClick={genran}>Generate Random Number</button>
</div>
    )
}

export default Random