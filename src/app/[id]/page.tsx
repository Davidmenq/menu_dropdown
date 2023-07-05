'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const page = (props:any) => {
    //recuperando parametros pasados por el navegador
	const recuperarDeRuta = useSearchParams();
	const imagenRecuperada= recuperarDeRuta.get('imagen1')
	const titleRecuperado= recuperarDeRuta.get('title1')
	
	
	//otra forma de pasar datos, se recupera el parametro 
	//id y se hace la peticion a la API con la informacion de ese parametro
	const [productos,setProductos] = useState([]);
	const url = `https://dummyjson.com/products/${props.params.id}`;
	const cargarDatos = async (urlApi : string) => {
		try{
			const respuesta = await fetch(urlApi);
			const datos = await respuesta.json();
			//console.log(datos);
			setProductos(datos);
		}
		catch (error){
			console.error(error);
		}
	}
	
	useEffect(()=>{
		cargarDatos(url);
		//console.log(props.params.id);
		console.log(props.searchParams);
		console.log(recuperarDeRuta);
		console.log(imagenRecuperada);
		console.log(titleRecuperado);
	},[])
  
	//
	
    return (
        <div>
			<h1>Hola soy yo otra vez el numero: {props.params.id} </h1>
			<p>
				{productos.title}
			</p>
			{/* utilizando props pasadas por parametros del navegador */}
			<img src={props.searchParams.imagen1} alt={props.searchParams.title1} width={300} height={500} className='rounded-md shadow-md m-10' />
			
			{/* mediante hook useSearchParams, funciona en App router de nextjs*/}
			<img src={imagenRecuperada} alt={titleRecuperado} width={300} height={500} className='rounded-md shadow-md m-10' />
		</div>
  )
}

export default page