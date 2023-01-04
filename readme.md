# Buscador de autos - JavaScritp
Este es un simple buscador de autos que funciona unicamente por filtros, el html y el css son una plantilla web, el archipo importante es el `app.js`, tambien hay un `db.js`  pero ese archivo solo almacena los objetos de la "base de datos", es decir, los vehiculos.

La fucion que muestra los autos de la base de datos esperara a que todo el contenido del DOM carge antes de mostrar los vehiculos.

## Variables y funcionamiento
1. **const resultado**: Selecciona una etiqueta h1 con el id resultado en la linea 101, dentro de esta etiqueta es donde se mostratan los resultados de la busqueda.
2. **const { }**: Destructuring sobre todos los metadatos del objeto auto.
3. **const autoHTML**: crea una etiqueta `p` sobre cada objeto dentro de `db.js` y los introduce en `const resultado` de manera ordenada.
4. **const year**: Selecciona una etiqueta `select` con el id *year*.
5. **const max**: Esta variable tiene un metodo que toma el año actual.
6. **const min**: Esta variable toma la variable `max` y le resta 15.
7. **const opcion**: Al ejecutarse la funcion `llenarselect()`. Esta variable toma el valor del año en cada iteracion para agregarlo al HTML.
8. **const datosBusqueda**: Este es un objeto que agrupa todos los parametros de busqueda.
9. **const marca**:  Selecciona una etiqueta `select` con el id *marca*.
10. **const minimo**:  Selecciona una etiqueta `select` con el id *minimo*.
11. **const maximo**:  Selecciona una etiqueta `select` con el id *maximo*.
12. **const puertas**:  Selecciona una etiqueta `select` con el id *puertas*.
13. **const transmision**:  Selecciona una etiqueta `select` con el id *transmision*.
14. **const color**:  Selecciona una etiqueta `select` con el id *color*.

## Funciones y ejecucion 
1. **mostrarAutos()**: Esta funcion toma los datos de la "base de datos" y los muestra mediante la variable `const resultado`. La funcion contiene un iterador `.forEach` que revisa cada elemento, luego crea una etiqueta `P` con los datos del vehiculo y los introduce en la variable seleccionada.
2. **llenarSelet()**: Esta funcion itera sobre dos variables `min` y `max` para crear un rango de años y despues llevarlo al campo de seleccion del html.
3. **filtrarAuto()**: Esta funcion encadena todos los filtros en una unica variable para que se ejecuten segun lo que se seleccione.
4. **filtrarMarca()**: Filtra los autos por Marca.
5. **filtrarYear()**: Filtra los autos por año.
6. **filtrarMaximo()**: Filtra los autos por precio Maximo.
7. **filtrarMinimo()**: Filtra los autos por precio Minimo.
8. **filtrarPuertas()**: Filtra los autos por numero de puertas.
9. **filtrarTransmision()**: Filtra los autos por tipo de Transmision.
10. **filtrarColor()**: Filtra los autos por color.