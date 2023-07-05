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
			console.log(datos.products)
			setProductos(datos.products);
		}
		catch (error){
			console.error(error);
		}
	}
	
	useEffect(()=>{
		cargarDatos(url);
	},[])

	const slug='nuevaPagina';

	return (
        <section className='flex justify-center items-center h-screen'>
           <ul>
					 		{productos.map((item, index)=>(
									<li key={index}>
										<Link href={`${item.id}`} className='text-pink-500'>
											{item.title}
										</Link>
										<p>  </p>
										<Link href={`${slug}?imagen1=${item.images[0]}&title1=${item.title}`} className='text-teal-900'>
											Link con parametros adicionales
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