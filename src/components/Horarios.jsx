import React from 'react'

import styled from 'styled-components'
const Hours =styled.div`
display:flex;
text-transform:capitalize;
align-items:flex-start;
flex-direction:column;
width:95%;
margin:auto;
 `
function Horarios({children,day}) {
    return (
        <Hours>
             <h1>{day}</h1>
             {children}
        </Hours>
    )
}

export default Horarios
