
import React, {useEffect, useState} from "react";


    

  const Example = (props) => {
   

    const [pokemons, setPokemon] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            <button  onClick={useEffect}> Fetch Pokemons</button>
            <ul>
            {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return (
                <div key={index}>
                   <li >
                        {pokemon.name}</li>
                    </div>)
            })}
             </ul>
        </div>
    );
        }
export default Example;
