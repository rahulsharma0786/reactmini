import college from "./Images/edu1.jpg"
const Home=()=>{
    return(
        <>
        <div>
            <div class="topimg">
                <img src={college}/>
             <div class="child">
             <h2>Education is the  best  <br/>key success in life</h2>
             <p>Learn about its history, usage, variations and sources, and how to generate realistic Lorem Ipsum onlin</p>
             <button class="bt">Register</button>
             <button class="btn1" >Display</button>
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

export default Home