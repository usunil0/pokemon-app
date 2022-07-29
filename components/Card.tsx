import React, { useState } from "react";

const Title=({title}:{title:string})=>(
  <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2">{title}</h5>
)

const KeyAndValue=(props:{keyName:string,value:string})=>{
  const {keyName,value}=props

  return <div className="mb-2"><span className="text-gray-900 font-bold mb-2">{keyName}</span> : <span className="text-gray-700 font-medium ">{value}</span></div>
}

interface CardProps{
  name:string
  birthYear:string
  gender:string
  eyeColor:string
  hairColor:string
  homeworld?:{
    id:string
    population:string
    diameter:string
    name:string
  }

}



const Card = (props:CardProps)=>{
  const {
    name,
    birthYear,
    gender,
    eyeColor,
    hairColor,
    homeworld
  } = props

  const isHomeWorldDisabled = !homeworld?.id
 
  const [isButtonActive,setIsButtonActive]=useState(false)

  return  (
  <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center mx-4 my-3" style={{minWidth:250}}>
    <div className="py-3 px-6 border-b border-gray-300">
      <Title title={name}/>
    </div>
    <div className="p-6">
      <KeyAndValue keyName="Birth Year" value={birthYear}/>
      <KeyAndValue keyName="Gender" value={gender}/>
      <KeyAndValue keyName="Eye Color" value={eyeColor}/>
      <KeyAndValue keyName="Hair Color" value={hairColor}/>

      <button disabled={isHomeWorldDisabled} onClick={()=>{setIsButtonActive(!isButtonActive)}} type="button" className={`inline-block relative px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out ${isHomeWorldDisabled?"bg-red-600 hover:bg-red-700  focus:bg-red-700 active:bg-red-800":"bg-blue-600 hover:bg-blue-700  focus:bg-blue-700 active:bg-blue-800"}`}>{isHomeWorldDisabled?"homeWorld not available":"view HomeWorld"}</button>
      {!isHomeWorldDisabled && isButtonActive && 
      <div className="block absolute z-10 rounded-lg shadow-lg bg-white max-w-sm text-center" style={{minWidth:250}}>
        <KeyAndValue keyName="Name" value={homeworld.name}/>
        <KeyAndValue keyName="population" value={homeworld.population}/>
        <KeyAndValue keyName="diameter" value={homeworld.diameter}/>
        </div>
      }
    </div>
    
  </div>
)
}

export default Card