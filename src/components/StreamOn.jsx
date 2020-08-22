import React from "react";
import styled from "styled-components";
const Card = styled.div`
  background-color: #5af084;
  margin: auto;
  width: 95%;
  height: 7em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 70% 30%;
  h1,
  h3,
  span {
    font-family: "Poppins", sans-serif;
    text-transform:capitalize;
  }
  h1,
  h3 {
    color: #fff;
  }
  h1 {
    height: 0.5em;
  }
  h3 {
  }
  .botom {
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    grid-row: 1/3;
    grid-column: 2/3;
    height: 7em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a{
      text-decoration-line:none;
  }
`;
export default function StreamOn(props) {
  console.log(props);
  
  return (
    <>
      <Card>
    
        {props.user ||props.user.nameUser==="Free hours"  ? (
          <>
            <h1 className="nameUser">{props.user.nameUser}</h1>
            <h3>Esta en directo</h3>
            <a
              className="botom"
              href={
                
                `https://www.twitch.tv/${props.user.nameUser}`}>
              <span>View</span>
            </a>
          </>
        ) : (
          <>
<h1 className="nameUser">Free Hours</h1>
            <h3>Esta en directo</h3>
            <div className="botom">
              <span>View</span>
            </div>

            
          </>
        )}
      </Card>
    </>
  );
}
