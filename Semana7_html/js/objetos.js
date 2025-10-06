/*Un sistema requiere administrar libros. Cada libro tiene atributos básicos:
• Título
• Autor
• Año
Se trabajará en dos partes: arreglos de objetos y pila de objetos.*/
/*--------Registrar libros en un arreglo-----------*/
    let libros=[
        {titulo: "Cien años de soledad", autor: "Gabriel", anio: 1967},
        {titulo: "1984", autor: "George", anio: 1949},
        {titulo: "El principito", autor: "Antoine", anio: 1943},                  // 2.  datos datos
        {titulo: "Matar a un ruiseñor", autor: "Harper", anio: 1960},
        {titulo: "Crimen y castigo", autor: "Fiódor", anio: 1866},
    ]
    //let libros = []   //2.
function administrarLibros (){
/*entrada: Ingresa el número de libros
proceso: de acuerdo al número de libros pedirá "titulo , autor y años"*/
    let n = parseFloat(prompt(`Ingrese el número de libros a ingresar`))
    let libro ={}
    for(let c=0; c<n; c++){
        libro ={titulo: prompt(`Ingrese el título del libro ${c+1}`), 
                autor: prompt(`Ingrese el autor del libro ${c+1}`), 
                anio: prompt(`Ingrese el año del libro ${c+1}`)}
        libros.push(libro)
    }}
/*Crear un arreglo con n libros, cada uno con título, autor y año.
o Ejemplo entrada:
o [
o {titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967},
o {titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605}
o ]
o Salida esperada: mostrar la lista completa de libros
1------------------------------------------------------------------------------------------------*/
function mostrarLibros (){
    /*entrada: Ingresa el número de libros
    proceso: de acuerdo al número de libros pedirá "titulo , autor y años"
    salida: mostrar todos los libros*/
    administrarLibros()
    console.log(libros)
}
    //debugger
    //mostrarLibros()
/*2----------------------------------------------------------------------------------------------
Buscar un libro por título
Pedir al usuario un título y verificar si existe en el arreglo de libros.*/
function buscarlibro(){
    /*entrada: segun el libro ingresado
    proceso: se buscará en el administrarLibros
    salida: verificará si existe o no */
    let libro={}, cc=0, //libros=[]
    titulo =prompt(`Ingrese el título del libro a buscar`)
    for(let c=0; c<libros.length; c++){
        libro=libros[c]
        if(libro.titulo===titulo){
            cc++;
        }
    }
    console.log(`El libro existe ${cc} veces`)
}
    //debugger
    //administrarLibros()
    //buscarlibro()
/*3----------------------------------------------------------------------------------------------
Contar libros publicados después del año 2000
Recorrer el arreglo y mostrar cuántos cumplen esa condición.*/
function contarLibrospublicados(){
    /*entrada: segun n libros ingresados
    proceso: recorrer cada objeto e ir al año. si es > 2000 contar cuantos son
    salida: el numero de libros despues del 2000*/
    let libro=0, ca=0
    for(let c=0; c<libros.length;c++){
        libro = libros[c].anio
        if(libro>2000){
            ca++
        }
    }
    console.log(`Los libros después de los 2000 años son: ${ca}`)
}
    //debugger
    //administrarLibros()
    //contarLibrospublicados()
/*4------------------------------------------------------------------------------------------------
Concatenar todos los títulos en una sola cadena
Mostrar en un texto: “Cien años de soledad – Don Quijote – El Principito …”*/
function conectarTitulos(){
    /*entrada: segun los títulos ingresados
    proceso: se uniran en una sola línea
    salida: los títulos de los libros con un "-" de separación*/
    let tema ="", resul="";
    for(let c=0;c<libros.length; c++){
        tema = libros[c].titulo
        resul += tema + " - "
    }
    console.log(`${resul}.`)
}
    //debugger
    //administrarLibros()
    //conectarTitulos()
/*5---------------------------------------------------------------------------------------------------
Actualizar el año de publicación de un libro
Pedir el título y un nuevo año, recorrer el arreglo y modificar ese objeto.*/
function actualizarAnio(){
    /*entrada: pedir el titulo del liebro
    proceso: recorrer cada objeto buscando el titulo, una vez entontradao 
    salida: ingresar el año*/
    let f=0;
    let titulo =prompt(`Ingrese el título de libro que va a actualizar el año`)
    for(let c=0;c<libros.length;c++){
        if(titulo===libros[c].titulo){
            libros[c].anio=prompt(`Ingrese el nuevo año del libro`)
            console.log(libros[c])
        }else{
            f++
        }
    }
    if(f===libros.length){
        console.log(`No se encontro el libro`)
        }
    }
    //debugger
    //administrarLibros()
    //actualizarAnio()
/*6---------------------------------------------------------------------------------------------------*/
let pila =[]
function convertirPilaLibros(){
    /*entrada: se ingresa una pila de n libros
    proceso: se ingresa 3 libros 
    salida: el ultimo libro ingresado sale primero*/
    //administrarLibros()
    for(let c=libros.length-1; 0<=c;c--){
        pila.push(libros[c])
    }
}
/*Implementar una pila de libros (push)
Crear una pila vacía e ir agregando libros con push().
o Entrada: Insertar 3 libros.
o Salida: pila con los 3 libros almacenados.*/
function pilaLibros(){
    /*entrada: se ingresa una pila de n libros
    proceso: se ingresa 3 libros 
    salida: el ultimo libro ingresado sale primero*/
    convertirPilaLibros()
    console.log(pila)
}
    //debugger
    //pilaLibros()
/*7-----------------------------------------------------------------------------------------------
Eliminar el último libro ingresado (pop)
Aplicar pop() a la pila y mostrar el libro eliminado.*/
function elinimarUltimoIngresado(){
    /*entrada: segun los libros ingresados
    proseco: eliminar el ultimo libro
    salida: mostrar el libro eliminado*/
    convertirPilaLibros()
    if(pila.length>0){
        let eliminaLibro = pila.pop()
        console.log(`Se elimino el ultimo libro `, eliminaLibro)
        console.log(`Lo libros actuales son: `, pila)
    }else{
        console.log(`La estantería está vacía`)
    }
}
    //debugger
    //elinimarUltimoIngresado()
/*8-------------------------------------------------------------------------------------------------
Ver el libro en la cima de la pila (peek)
Mostrar el último libro ingresado sin eliminarlo.*/
function mostrarUltimoIngresado(){
    /*entrada: segun los libro ingresados
    proceso: escojer al primer libro de la pila
    salida: mostrarlo sin eliminar*/
    let primerlibro=""
    convertirPilaLibros()
    primerlibro=pila[0]
    console.log(primerlibro)
}
    //debugger
    //mostrarUltimoIngresado()
/*9--------------------------------------------------------------------------------------------
Verificar si la pila está vacía (isEmpty)
Mostrar un mensaje según corresponda: “La pila está vacía” o “La pila tiene X libros”*/
function varificarpilaVacia(){
    /*entrada: recorrer la pila
    proceso: verificar si esta vacía
    salida: Mostrar un mensaje según corresponda: “La pila está vacía” o “La pila tiene X libros”.*/
    convertirPilaLibros()
    if(pila.length>0){
        console.log(`La pila tiene ${pila.length} libros`)
    }else{
        console.log(`La pila está vacía`)
    }
}
    //debugger
    //varificarpilaVacia()
/*10------------------------------------------------------------------------------------------------
Vaciar completamente la pila
Aplicar pop() en un ciclo hasta que la pila quede vacía. Mostrar mensaje: “La pila se ha
vaciado completamente”.*/
function vaciarPila(){
    /*entrada: sugun los libros ingresados
    porceso: vaciar la pila
    salida: mostrar un mensaje que se a vaciado*/
    let vaciarP=0;
    convertirPilaLibros()
    let t=pila.length
    for(let c=pila.length;0<c;c--){
        vaciarP=pila.pop()
        t--
    }
        if(t===0){
        console.log(`La pila se ha vaciado completamente`)
    }
}
    debugger
    vaciarPila()
