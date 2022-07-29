import type { NextPage } from 'next'
import {defaultTo, path} from "ramda"
import { gql, useQuery } from "@apollo/client";

import client from "../apollo-client";
import Card from '../components/Card'


const PeopleQuery =  gql`
query allPeople{
       allPeople {
         edges {
         node {
           id
           name
           birthYear
           gender
           eyeColor
           hairColor
           species {
             id
             homeworld {
               id
               population
               diameter
               name
             }
           }
         } 
         }
       }
     }
`

interface HomeWorld{
  id: string; 
  population: string ;
  diameter: string ;
  name: string ;
 } 

const Home: NextPage = () => {
  const { data } = useQuery(PeopleQuery,{
    client
  })
  
  const allPeople = defaultTo([],(path(["allPeople","edges"],data) as Array<Object>)).map(personNode=>({
    id:path(["node","id"],personNode) as string,
    name:path(["node","name"],personNode) as string,
    birthYear:path(["node","birthYear"],personNode) as string,
    gender:path(["node","gender"],personNode) as string,
    eyeColor:path(["node","eyeColor"],personNode) as string,
    hairColor:path(["node","hairColor"],personNode) as string,
    homeworld : defaultTo({},path(["node","species","homeworld"],personNode)) as HomeWorld | undefined
  }))


  return (
    <div className="flex flex-row flex-wrap justify-center">
      { allPeople.map((person)=>{
        return(<Card
         {...person}
          />)
      })}
      </div>
  
  )
}

export default Home
