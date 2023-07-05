'use client'
import {useState, useEffect} from 'react';

const page = async(props) => {
    const [productos,setProductos] = useState([]);
	const url = `https://dummyjson.com/products/${props.params.id}`;
	const cargarDatos = async (urlApi : string) => {
		try{
			const respuesta = await fetch(urlApi);
			const datos = await respuesta.json();
			console.log(datos);
			setProductos(datos);
		}
		catch (error){
			console.error(error);
		}
	}
	
	useEffect(()=>{
		cargarDatos(url);
		console.log(props.params.id);
	},[])
  
	
    return (
        <div>Hola soy yo otra vez el numero: {props.params.id} </div>
  )
}

export default page