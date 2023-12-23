import axios from "axios"
import { useEffect, useState } from "react"
import myimg from "./Images/reddel.jpg"
import myimg1 from "./Images/editblue.png"


const Display=()=>{
const [studata,setStudata]=useState([])
const [mydata,setMydata]=useState({})

const loadData=()=>{
axios.get("https://nodeapps-qbei.onrender.com/studisplay").then((res)=>{
setStudata(res.data)
})    
}

useEffect(()=>{
    loadData()
},[])





const mydel=(id)=>{
    axios.get(`https://nodeapps-qbei.onrender.com/studeleted/${id}`).then((data)=>{
        loadData(data)
    })
    
}


const myedit=(id)=>{
    axios.get(`https://nodeapps-qbei.onrender.com/stuedit/${id}`).then((res)=>{
        setMydata(res.data)
document.getElementById("editrec").style.display="block"
       
    })
    
}

const handleinput=(e)=>{
    let name=e.target.name
    let value=e.target.value
setMydata(values=>({...values, [name]:value}))

}

const editsave=()=>{
axios.post(`https://nodeapps-qbei.onrender.com/editsave/${mydata._id}`,mydata).then((res)=>{
    loadData()
    document.getElementById("editrec").style.display="none"
    
    alert("your data sucessfully update")
    
})

}



const myData=studata.map((key)=>{
return(
    <>
    <tr style={{backgroundColor:"blueviolet",fontSize:"18px"}}>
  <td style={{color:"white"}}>{key.rollno}</td>
  <td style={{color:"white"}}>{key.name}</td>
  <td style={{color:"white"}}>{key.city}</td>
  <td style={{color:"white"}}>{key.fess}</td>
  <td>
<a href="#" onClick={()=>{mydel(key._id)}}>
<img src={myimg} width="25px" height="20px"/>
</a>
</td>
<td>
<a href="#" onClick={()=>{myedit(key._id)}}>
<img src={myimg1} width="30px" height="20px"/>
</a>
</td>

    </tr>
    
    </>
    
)
})



return(
    <>
    <div className="display">
    
<table>
<tr>
<td>RollNo</td>
<td>Name</td>
<td>City</td>
<td>Fess</td>
<td style={{width:"50px"}}>Del</td>
<td style={{width:"50px"}}>Edit</td>
</tr>

{myData}

</table>


<div id="editrec">
<h2 style={{color:"red"}}>Edit Student Record</h2>
<label>Edit Rollno</label>    
 <input type="text" value={mydata.rollno} name="rollno" onChange={handleinput}/>
 <label>Edit Name</label>
<input type="text" value={mydata.name} name="name" onChange={handleinput}/>
<label>Edit City</label>
<input type="text" value={mydata.city} name="city" onChange={handleinput}/>
<label>Edit Fess</label>
<input type="text" value={mydata.fess} name="fess" onChange={handleinput}/>
<button style={{marginTop:"8px"}} onClick={editsave}>Submit</button>
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





export default Display