import React, { useEffect, useState } from 'react'
import StreamOn from '../components/StreamOn'
import Horarios from '../components/Horarios'
import styled from 'styled-components'
import Cards from '../components/Cards'
const Card = styled.div`
padding:2em;
justify-content:center;
align-content:center;
flex-direction:column;
display:flex;
margin:auto;
`
function Home() {
    var week = ['Sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'Saturday']
    var dayNew = new Date().getDay()
    console.log(dayNew)
    var day = week[dayNew]
    console.log(day)

    var hours = new Date().getHours()
    console.log(hours)
   
   
 





    const [user, setUser] = useState([])
    useEffect(() => {
        async function users() {
            const data = await fetch("https://gist.githubusercontent.com/Pamsho09/670b6d0d70e0734a520cc7a368a0de1e/raw/503e03c90f0eed12c9972ded612da128d18dbb36/horario.json")
            const response = await data.json()
            console.log(response)
            setUser(response[day])
        };
        users()
    }, [])

    console.log(user)
    var userItem = false;
    user.forEach(item => {
        if (item.hours === hours) {
            userItem = item
            return userItem
        }
    })
    // })
    return (
        <>
            <Card>
                {


                    <StreamOn user={userItem} />

                }


                <Horarios day={day}>
                    {
                        user && user ?
                            user.map(e => {
                                return <Cards key={e.id}  {...e} />
                            })
                            :
                            console.log('no hay')


                    }



                </Horarios>
            </Card>
        </>

    )
}

export default Home