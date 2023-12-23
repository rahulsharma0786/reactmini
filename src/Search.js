import { useState } from "react"
import axios from "axios"
import Studentdisplay from "./Studisplay"

const Search=()=>{
    const [rollno,setRollno]=useState("")
    const [stuData,setstuData]=useState([])

 const handleinput=()=>{
    axios.post("https://nodeapps-qbei.onrender.com/stusearch", {rollno:rollno}).then((res)=>{
    setstuData(res.data)
    document.getElementById("seachdata").style.display="block"

    })
 }

 const myData=stuData.map((key)=>
    <Studentdisplay
rno={key.rollno}
nm={key.name}
ct={key.city}
fs={key.fess}

/>)
 



return(
    <>
   <div className="srerch">
    <div className="main">
    <h1 style={{color:"blue"}}>Student Search</h1>
    <label>Enter rollno</label> : <input type="text" name="rollno" onChange={(e)=>{setRollno(e.target.value)}}/>
    <button style={{marginTop:"8px"}} onClick={handleinput}>Search</button>

    <div id="seachdata">
    <table border="1" width="500px" >
<tr style={{backgroundColor:"blue",fontSize:"25px",color:"white" }}>
<td>RollNo</td>
<td>Name</td>
<td>City</td>
<td>Fess</td>
</tr>
{myData}
</table>
</div>
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

export default Search