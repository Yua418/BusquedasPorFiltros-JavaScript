# Buscador de autos - JavaScritp
``  
Este es un simple buscador de autos que funciona unicamente por filtros, el html y el css son una plantilla web, el archipo importante es el `app.js`, tambien hay un `db.js`  pero ese archivo solo almacena los objetos de la "base de datos", es decir, los vehiculos.

La fucion que muestra los autos de la base de datos esperara a que todo el contenido del DOM carge antes de mostrar los vehiculos.

## Variables y funcionamiento
1. **const resultado**: Selecciona una etiqueta h1 con el id resultado en la linea 101, dentro de esta etiqueta es donde se mostratan los resultados de la busqueda.
2. **const { }**: Destructuring sobre todos los metadatos del objeto auto.
3. **const autoHTML**: crea una etiqueta `p` sobre cada objeto dentro de `db.js` y los introduce en `const resultado` de manera ordenada.
4. **const year**: 


## Funciones y ejecucion 
1. **mostrarAutos()**: Esta funcion toma los datos de la "base de datos" y los muestra mediante la variable `const resultado`. La funcion contiene un iterador `.forEach` que revisa cada elemento, luego crea una etiqueta `P` con los datos del vehiculo y los introduce en la variable seleccionada.