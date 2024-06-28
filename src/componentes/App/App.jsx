import {useState} from 'react';
import PersonCard from '../Estudiante/PersonCard';

const App  = () => {
  const estudiantesIniciales=[{
    lastName:"Doe,",
    firstName: "Jane",
    age: 45,
    hairColor:"Black"
},
{
  lastName:"Smith",
  firstName: "John",
  age: 88,
  hairColor:"Brown"
},
{
  lastName:"Fillmore",
  firstName: "Millard",
  age: 50,
  hairColor:"Brown" 
},
{
  lastName:"Smith",
  firstName: "Maria",
  age: 62,
  hairColor:"Brown" 
}];

const [listaEstudiantes, setListaEstudiantes]= useState(estudiantesIniciales);
    return(
       <>
       {
        listaEstudiantes.map((estudiante)=>{
          return(<PersonCard lastName={estudiante.lastName}
                            firstName={estudiante.firstName}
                            age={estudiante.age}
                            hairColor={estudiante.hairColor}/>)
        })
       }
       </>
    

    );
  }


 

export default App;
