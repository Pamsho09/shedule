import React from 'react'
import styled from 'styled-components'
const ItemCard = styled.div`
display:grid;
grid-template-columns:30% 70%;
gap:1em;
width:95%;
margin-bottom:1em;

.hour,.name,.nameFree{
    display:flex;
    justify-content:center;
    align-items:center;
    
}
a{
text-decoration-line:none;


}
.hour{
height:4em;
font-family: 'Poppins', sans-serif; 
    background: rgba(127, 254, 246, 0.76);
    border-radius:11px;
}
.nameFree{
    font-family: 'Poppins', sans-serif; 
height:4em;
background: #65B5EE;
color:#fff;
    border-radius:11px;
}
.name{
    font-family: 'Poppins', sans-serif; 
height:4em;
background: #5AF084;
color:#fff;
    border-radius:11px;
}
`
function Cards({ hours, nameUser }) {
    let free="Free hour"
  return (
      
   
      

            <ItemCard>
                {nameUser ==='Free hour' 
                ?<>
                <div className="hour">{hours}:00</div>
                <div className="nameFree"> {nameUser}</div>
               </> :
                <>
                <div className="hour">{hours}:00</div>
                <a href={`https://www.twitch.tv/${nameUser}`}><div className="name"> {nameUser}</div></a>
           </> }
               
            </ItemCard>
        
  
    )

}

export default Cards
