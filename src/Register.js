import stu from "./Images/stureg.jpg"
import axios from "axios"
import {  useState } from "react"



const Register=()=>{

const[input,setInput]=useState({})



const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))


}

const inputsave=()=>{
    window.location.reload(false); 
axios.post("https://nodeapps-qbei.onrender.com/stusave",input).then(()=>{
    console.log("data save")
    
})
}



    return(
        <>
<div className="stureg"> 
<img src={stu}/>       
<div id="record">
<h1 style={{color:"red"}}>Student Records</h1>    
<label>RollNo</label>
<input type="text" name="rollno" value={input.rollno}  onChange={Handleinput} placeholder="Eneter RollNo"></input>
<label>Name</label>
<input type="text" name="name" value={input.name}  onChange={Handleinput} placeholder="Eneter Name"></input>
<label>City</label>
<input type="text" name="city" value={input.city} onChange={Handleinput} placeholder="Eneter City"></input>
<label>Fess</label>
<input type="text" name="fess" value={input.fess} onChange={Handleinput} placeholder="Eneter Fess"></input>

<button style={{marginTop:"8px"}} onClick={inputsave}>Submit</button>

</div>
  
</div>


<div className="topfooter">
<div className="footer">
 <div className="footchild">
<h2 style={{color:"blueviolet",fontSize:"28px"}}>Directory</h2>  
<hr style={{height:"1px solid gey",width:"150px"}}/>  
<h2>Campus Map</h2>
<h2>Request Information</h2>
<h2>Library</h2>
<h2>Title IX</h2>
<h2>Compliance</h2>


</div> 

<div className="footchild1">
<h2 style={{color:"blueviolet",fontSize:"28px"}}>Admission</h2>
<hr style={{height:"1px solid gey",width:"150px"}}/> 
<h2>Academics</h2>
<h2>Research</h2>    
<h2>Arts</h2>
<h2>Campus Life</h2>
<h2>Athletics</h2>
</div> 

<div className="footchild2">
<h2 style={{color:"blueviolet",fontSize:"28px"}}>About Hope</h2>
<hr style={{height:"1px solid gey",width:"170px"}}/> 
<h2>Visit</h2>
<h2>Apply</h2>
<h2>News</h2>
<h2>Calender</h2>
<h2>Jobs</h2>
<h2>Give to Hope</h2>


</div> 

<div className="footchild3">
<h2 style={{color:"blueviolet",fontSize:"28px"}}>Contact</h2> 
<hr style={{height:"1px solid gey",width:"130px"}}/> 
<h2>Rahul sharma</h2>
<h2>+919630169487 </h2>
<h2>rkumar45650@gmail.com </h2>   

</div> 
</div>
</div>

        </>
    )
    
    }
export default Register


