import React from "react";
import Personal from "./Medium";

const Friends = () => {
    const theirBusiness = [

        {name: "Dustin",
        age: "13",
        dateOfBirth: "03/10/2009",
        number: "111-111-1111",
        },

        {name: "Thomas",
        age: "15",
        dateOfBirth: "05/17/2007",
        number: "111-111-1111",
        },

        {name: "Rene",
        age: "16",
        dateOfBirth: "09/25/2006",
        number: "111-111-1111",
        },

        {name: "Lolly",
        age: "29",
        dateOfBirth: "04/16/1993",
        number: "111-111-1111",
        }

    ]; 

    return (
        <div className="List">
            {theirBusiness.map((info) => (
                <Personal 
                    name={info.name} 
                    age={info.age} 
                    dateOfBirth={info.dateOfBirth} 
                    number={info.number} 
                />
            ))}
        </div>
    );
            }