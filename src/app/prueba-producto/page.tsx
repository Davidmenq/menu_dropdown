'use client'

import {useState, useEffect} from 'react';
import Link from 'next/link';

const Productos = () =>{
	
	const [productos,setProductos] = useState([]);
	const url = 'https://dummyjson.com/products';
	const cargarDatos = async (direccion : string) => {
		try{
			const respuesta = await fetch(direccion);
			const datos = await respuesta.json();
			//console.log(datos.products)
			setProductos(datos.products);
		}
		catch (error){
			console.error(error);
		}
	}
	
	useEffect(()=>{
		cargarDatos(url);
	},[])

	return (
        <section className='flex justify-center items-center h-screen'>
           <ul>
					 		{productos.map((item, index)=>(
									<li key={index}>
										<Link href={`${item.id}`}>
											{item.title}
										</Link>
									</li>
							))}
					 	</ul>
						<button className='p-10 bg-gray-700 hover:bg-sky-500 text-white border-solid border-orange-600 rounded-md'>
							Ir a detalle
						</button>
        </section>
        
    )
}

export default Productos;