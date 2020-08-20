import React from 'react'

import styled from 'styled-components'
const Hours =styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
width:95%;
margin:auto;
 `
function Horarios({children}) {
    return (
        <Hours>
             <h1>Monday</h1>
             {children}
        </Hours>
    )
}

export default Horarios
