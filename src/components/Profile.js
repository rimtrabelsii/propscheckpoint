import React from 'react'

function Profile(props) {
   console.log(props)
  return (
    <div style={{lineHeight:1.2, color:"white"}}>
        {/* return informations about me sous forme de différents titres à partir de app.js*/}
        <h1 style={{marginLeft:"50px"}} > {props.me.fullname}</h1>
        <h2 style={{marginLeft:"55px"}}>{props.me.profession}</h2> 
        <h3 style={{marginLeft:"60px"}}>{props.me.bio}</h3>
        {/* appel de l image à partir app.js  */}
        <div  >
            {props.children}
        </div>
        
    <button style={{backgroundColor:"#e3ce5a",padding:"5px",border:"white" ,marginTop:"5px", marginLeft:"51px"}} onClick={()=>props.handleName()}>click here to show the name of the profile user</button>
    
    </div>
    
  )
}

export default Profile