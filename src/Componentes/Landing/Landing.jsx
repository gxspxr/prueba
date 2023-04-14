/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict'

let cats = []
let accessories = []

module.exports = {

  testCats: () => cats,

  testAccessories: () => accessories,

  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    cats = []
    accessories = []
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `controller.js`) =====

  addCat: function (name) {
    // Agrega un nuevo gato, verificando que no exista anteriormente su nombre.
    // Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
    // Debe tener una propiedad <color> que inicialmente es un array vacío.
    // Debe tener una propiedad <accessories> que inicialmente es un array vacío.
    // El gato o gata debe guardarse como un objeto con el siguiente formato:
    // { name, age: '1 year', color: [], accessories: [] }
    // En caso exitoso debe retornar el objeto, osea el gato creado'.
    // En caso de haber un gato existente, no se agrega y debe arrojar el Error ('El gato o gata ya existe') >> ver JS throw Error
    const catExists = cats.find(cat => cat.name === name)
    if (catExists) {
      // Si el gato ya existe, no agregarlo y devolver el objeto del gato existente
      throw new Error('El gato o gata ya existe')
    }
  
    // Si el gato no existe, agregarlo al array cats
    const newCat = {
      name,
      age: '1 year',
      color: [],
      accessories: []
    }
    cats.push(newCat)
  
    // Devolver el objeto del nuevo gato
    return newCat
  },
  listCats: function (age) {
    // Si no se recibe parametro <age> retornar todos los gatos del array 'cats'
    // En caso de recibir el parámetro <age: "1 year">, devuelve sólo los gatos correspondientes a dicho age.
    // Si recibe parámetro <age> pero lo recibe con diferente edad, debe arrojar el Error ('El gato o gata tiene una edad diferente') >> ver JS throw Error

    if (!age) {
      // Si no se recibe parámetro <age>, devolver todos los gatos
      return cats
    }

    // Si se recibe parámetro <age>, filtrar los gatos por edad
    const filteredCats = cats.filter(cat => cat.age === age)
    if (filteredCats.length === 0) {
      // Si no hay gatos con la edad recibida, arrojar un error
      throw new Error('El gato o gata tiene una edad diferente')
    }

    // Si hay gatos con la edad recibida, devolverlos
    return filteredCats
    
  },

  addAccessory: function (obj) {
    // Agrega un nuevo accesorio al catálogo.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <nombre_accesorio> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low'

    // Si el accesorio ya existe, no agregarlo y devolver el objeto del accesorio existente
    const accessoryExists = accessories.find(accessory => accessory.id === obj.id)
    if (accessoryExists) {
      throw new Error(`El accesorio con el id ${obj.id} ya existe`)
    }

    // Si el accesorio no existe, agregarlo al array accessories
//En caso de recibir un parámetro (type, color o ambos), devuelve sólo los accesorios correspondientes

    const newAccessory = {
      ...obj,
      popularity: 'low'
    }
    accessories.push(newAccessory)

    // Devolver el objeto del nuevo accesorio
    return `El accesorio ${obj.type} fue agregado correctamente`


  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo

    if (!type && !color) {
      // Si no se reciben parámetros, devolver todos los accesorios
      return accessories
    }

    if (type ) {
      // Si se recibe parámetro <type>, filtrar los accesorios por tipo
      const filteredAccessories = accessories.filter(accessory => accessory.type === type)
    
      return filteredAccessories
    }
    
    if ( color) {
      // Si se recibe parámetro <color>, filtrar los accesorios por color
      const filteredAccessories = accessories.filter(accessory => accessory.color === color)
      return filteredAccessories
    }
    
    if (type && color) {
      // Si se reciben ambos parámetros, filtrar los accesorios por tipo y color
      const filteredAccessories = accessories.filter(accessory => accessory.type === type && accessory.color === color)
    
      return filteredAccessories
    }

  },

  deleteAccessory: function (id) {

    const index = accessories.findIndex(acc => acc.id === id)
    if (index === -1) {
      throw new Error(`El accesorio con el id ${id} no fue encontrado`)
    }
    //si el objeto viene vacio arrojar un error
    accessories.splice(index, 1)
    return `El accesorio con el id ${id} fue eliminado correctamente`

  },

  modifyAccessory: function (obj) {
  const index = accessories.findIndex(acc => acc.id === obj.id)
    if(index === -1) {
      throw new Error(`No se detectaron cambios a aplicar`) 
    }
    
    const updatedAccessory = { ...accessories[index], ...obj, popularity: accessories[index].popularity }
    accessories.splice(index, 1, updatedAccessory)
    return updatedAccessory
  },

  addCatAccessory: function (catName, catAccessory) {
    // Agrega un accesorio a un gatito
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el gato ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el accesorio fue agregado correctamente retornar un mensaje: 'El accesorio <tipo_accesorio> fue agregado a <nombre_gato> con exito'

    // Si el gato no existe, arrojar un error
    const catExists = cats.find(cat => cat.name === catName)
    if (!catExists) {
      throw new Error(`El gato ${catName} no existe`)
    }

    // Si el gato ya tiene puesto el accesorio, arrojar un error
    const catHasAccessory = catExists.accessories.find(accessory => accessory.id === catAccessory.id)
    if (catHasAccessory) {
      throw new Error(`El gato ${catName} ya tiene el accesorio puesto`)
    }

    // Si el gato no tiene el accesorio, agregarlo
    catExists.accessories.push(catAccessory)


    // Devolver el mensaje de éxito
    return `El accesorio ${catAccessory.type} fue agregado a ${catName} con exito`
  },

  updateAccessoryPopularity: function (accessoryId) {
    // Actualiza la propiedad <popularity> del accesorio,
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3 (o mas), entonces la popularidad del accesorio debe valer 'high'
    // Si se actualizó la popularidad del accesorio, devolver un mensaje que diga 'La popularidad del accesorio <color_accesorio> <tipo_accesorio> fue actualizada a <popularidad>'
    // Si no se actualizó la popularidad del accesorio, devolver un mensaje que diga 'No hubieron cambios en la popularidad del accesorio <color_accesorio> <tipo_accesorio>'
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
  
    // Si el id de accesorio no existe, arrojar un error
    const accessoryExists = accessories.find(accessory => accessory.id === accessoryId)
    if (!accessoryExists) {
      throw new Error(`accesorio no encontrado`)
    }

    // Si el id de accesorio existe, actualizar la popularidad
    const catsWearingAccessory = cats.filter(cat => cat.accessories.find(accessory => accessory.id === accessoryId))
    if (catsWearingAccessory.length === 2) {
      accessoryExists.popularity = 'average'
      return `La popularidad del accesorio ${accessoryExists.color} ${accessoryExists.type} fue actualizada a ${accessoryExists.popularity}`
    }
    if (catsWearingAccessory.length >= 3) {
      accessoryExists.popularity = 'high'
      return `La popularidad del accesorio ${accessoryExists.color} ${accessoryExists.type} fue actualizada a ${accessoryExists.popularity}`
    }
    if (catsWearingAccessory.length < 2) {
      return `No hubieron cambios en la popularidad del accesorio ${accessoryExists.color} ${accessoryExists.type}`
    }
  }
}
