const contenedor = document.getElementById('contenedor')
const entrada = document.querySelector('#entrada')
const titulo = document.getElementById('titulo')
const parrafos = document.querySelectorAll('#parrafos')
const lista = document.querySelectorAll('#lista')
const listaBis = document.querySelectorAll("#listaBis")

//getAttribute

contenedor.getAttribute('class')


//setAttribute 
entrada.setAttribute('type', 'number')


//anadir , reemplazar y borrar classes

entrada.classList.add('orange', 'purple')

entrada.classList.remove('purple')

entrada.classList.replace('orange', 'rainbow')

//textContent vs innerHTML

titulo.textContent = "Hello World !!!"

titulo.innerHTML = " Hello World !!!<span> Probando</span> !!!"

//iteracion y eventos , forEach y for of funcionan, map habria q hacer un array.from para tratarlo como array 

parrafos.forEach((i)=> {
	i.addEventListener('dblclick', ()=> {
		i.classList.add('yellow')
	})
	
})

lista.forEach((i)=> {
	i.style.color = "green"
})

const listaBisArray = Array.from(listaBis)

listaBisArray.map((i)=> {
	i.addEventListener('click', ()=> {
		i.classList.add('orange')
	})
	
	
})

//agregar elementos HTML 

//1ero seleccionar al padre
const listaPadre = document.querySelector("#listaPadre")

//2do guardo en una constante el elemento a crear con document.createElement('elemento')
const itemLista = document.createElement('li')
itemLista.textContent = "Soy el item1 de esta lista" 

//3ero inyecto en el PADRE a los hijos recien creados
listaPadre.appendChild(itemLista)

// agregar/ inyectar elementos HTML desde el padre, con interacion agregar varios 

//1ero selecciono al padre
const patter = document.getElementById('patter')

//2do ubico los elementos q quiero agregar , guardados en una constante estos estan ya creados

const array = [1,2,3,4,5]

//3ero itero sobre el array o el elemento q quiero agregar, se lo inyecto al padre en una <li> por eso innerHTML con suma iterativa

for(let i of array) {
	patter.innerHTML += `<li>${i}</li>`
	//patter.innerHTML = patter.innerHTML + `<li>${i}</li>`
}

const cajaPatter = document.querySelector('#cajaPatter')

const myArray = ["baby", "blue"]

for(let i of myArray) {
	
	cajaPatter.innerHTML += `<div>${i}</div>`
	
}


//agregar elementos con fragment para consumir menos recursos y evitar una iteracion en cada hijo 
const nuevo = document.getElementById('nuevo')

const sweet = ["candy", "chupetines", "caramelos"]

const fragment = document.createDocumentFragment()

for(const i of sweet) {
	const items= document.createElement('div')
	items.textContent = i
	fragment.appendChild(items)
	
}

nuevo.appendChild(fragment)















































