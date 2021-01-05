---
title : Mdm
description: trifenix.connect.util.Mdm
---

# Mdm

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Mdm
```

## Descripción
Todos los métodos relacionados con la obtención de metadata y valores desde el modelo de clases y la conversión de esta 
al modelo de metada de trifenix y viceversa.
sus subclases son clases estáticas usadas en Reflection.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateDynamicList(Obj)
```


Convierte un objeto individual o colección, en una colección
### Retorna
si el objeto es una colección deveulve una colección, si no una colección con un solo valor
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| Obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | bjeto a convertir |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntityFromSearch\`\`1(entitySearch,anyElementInAssembly,nms)
```


Retorna un objeto desde un entitySearch, el tipo del objeto de retorno será del tipo que utilice el atributo EntityIndexAttribute .
para esto buscará todas las clases que tnengan el atributo EntityIndexAttribute que vincula la clase con el índice
del entitySearch, una vez encontrada hará lo mismo con los atributos de cada propiedad para finalmente crear un objeto tipado con todos los valores del entitySearch.
### Retorna
objeto de una clase que representa una entidad
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| entitySearch | [trifenix.connect.mdm.entity_model.IEntitySearch{\`\`0}](#T-trifenix-connect-mdm-entity_model-IEntitySearch{``0} 'trifenix.connect.mdm.entity_model.IEntitySearch{``0}') | entitySearch a convertir |
| anyElementInAssembly | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | assembly donde buscar la clase que sea del tipo de la entidad |
| nms | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | namespace donde se encuentra la clase que sea del tipo de entidad |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Las entidades tienen un tipo de dato geo, que depende de la base de datos a usar. |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetValues\`\`1(entitySearch,isEntity,typeRelated,indexProperty,geoConvert,anyElementInAssembly,nms,sEntity)
```


Retorna el valor de una propiedad de un objeto, desde un entitySearch indicando cual es la propiedad.
### Retorna
valor de una propiedad
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| entitySearch | [trifenix.connect.mdm.entity_model.IEntitySearch{\`\`0}](#T-trifenix-connect-mdm-entity_model-IEntitySearch{``0} 'trifenix.connect.mdm.entity_model.IEntitySearch{``0}') | Entidad a convertir |
| isEntity | [System.Boolean](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Boolean 'System.Boolean') | Determina si la propiedad que se desea obtener es de tipo entidad o es una propiedad primitiva (DateTime, número, etc.) |
| typeRelated | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | identificador del tipo de valor a obtener, para el caso de las propiedades sería KindProperty y para entidades KindEntityProperty |
| indexProperty | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice de la propiedad |
| geoConvert | [System.Func{\`\`0,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0,System.Object}') | convierte el tipo geo del entitySearch a el objeto de la instancia de la clase a obtener |
| anyElementInAssembly | [trifenix.connect.interfaces.hash.IHashSearchHelper](#T-trifenix-connect-interfaces-hash-IHashSearchHelper 'trifenix.connect.interfaces.hash.IHashSearchHelper') | Tipo de un objeto que se encuentre en el assembly donde está la clase con la metadata |
| nms | [trifenix.connect.search_mdl.ISearchEntity{\`\`0}](#T-trifenix-connect-search_mdl-ISearchEntity{``0} 'trifenix.connect.search_mdl.ISearchEntity{``0}') | namespace donde se encuentra la clase con la metadata |
| sEntity | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Interface para obtener un entitySearch desde una clase local |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de valor a entregar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropValues\`\`1(props,index)
```


retorna los valores desde una colección de propiedades.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| props | [trifenix.connect.mdm.entity_model.IProperty{\`\`0}[]](#T-trifenix-connect-mdm-entity_model-IProperty{``0}[] 'trifenix.connect.mdm.entity_model.IProperty{``0}[]') | propiedades que serán usadas para retornar los valores |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice de la propiedad |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CheckImplementsIRelatedId(typeToCheck)
```


Verifica si un tipo es una propiedad de tipo entidad (IRelatedId)
### Retorna
true, si implementa IRelatedId
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| typeToCheck | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | tipo a verificar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntityProperty(index,value,typeToCast)
```


Un EntitySearch se compone de propiedades que relacionan otros EntitySearch
estas propiedades tienen el índice que identifica el tipo de entidad (Persona, Producto o cualquier tipo de agrupación) y el id que identifica un elemento dentro de una base de datos.
este método crea una propiedad de este tipo
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice del tipo de entidad |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | identificador de la entidad |
| typeToCast | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Tipo al que debe ser convertido (debe implementar IRelatedId) |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetArrayOfElements\`\`1(attribute,typeToCast)
```


Obtiene un array de propiedades de acuerdo al índice y tipo de dato que tenga la metadata del atributo
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| attribute | [System.Collections.Generic.KeyValuePair{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.KeyValuePair 'System.Collections.Generic.KeyValuePair{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | tupla con el atributo de la propiedad y el valor de la instancia |
| typeToCast | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Tipo de dato a convertir |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de valor de la propiedad que será retornada |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropertiesObjects\`\`2(related,elements,castGeoToSearch)
```


Obtiene todas las propiedades del tipo que se le indique para un objeto
estos tipos son de valor (str,num32, enum, geo, etc.)
Desde esta se especializan otro métodos
las propiedades conformar un entitySearch, base del modelo MDM.
### Retorna
listado de propiedades de un tipo
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| related | [trifenix.connect.mdm.enums.KindProperty](#T-trifenix-connect-mdm-enums-KindProperty 'trifenix.connect.mdm.enums.KindProperty') | Tipo de propiedad |
| elements | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | metadata y datos de un objeto |
| castGeoToSearch | [System.Func{System.Object,\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.Object,``0}') | Función para convertir el elemento geo de la clase a la de la entidad de busqueda |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de valor la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetReferences(elements,typeToCast)
```


Obtiene referencias de una entidad (no locales), desde el listado de metadata y valores de un objeto.
si encuentra atributos de tipo related, ontendrá el índice y el valor para formar una propiedad de tipo IRelatedId
### Retorna
array de clase indicada que implementa IRelatdId
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elements | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |
| typeToCast | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Tipo a convertir que implemente IRelatedId |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetNumProps\`\`1(values)
```


Obtiene las propiedades de tipo double encontradas en un objeto
Obtiene las propiedades de tipo entero 
base del entitySearch
### Retorna
array de clase indicada que implementa INum32Property
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetDblProps\`\`1(values)
```


Obtiene las propiedades de tipo double encontradas en un objeto
base del entitySearch
### Retorna
array de clase indicada que implementa IDblProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetDtProps\`\`1(values)
```


Obtiene las propiedades de tipo fecha encontradas en un objeto
base del entitySearch
### Retorna
array de clase indicada que implementa IDtProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEnumProps\`\`1(values)
```


Obtiene las propiedades de tipo enum encontradas en un objeto.
base del entitySearch
### Retorna
array de clase indicada que implementa IEnumProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetBoolProps\`\`1(values)
```


Obtiene las propiedades de tipo entero
base del entitySearch
### Retorna
array de clase indicada que implementa IBoolProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetGeoProps\`\`2(castGeoToSearch,values)
```


Obtiene las propiedades de tipo geo base de un entitySearch encontradas en un objeto.
el caso de geo, depende de la base de datos, ya que cada db puede tener un formato distinto para el tipo geo.
por eso, este método incorpora un método de entrada, para convertir un tipo geo de la clase del objeto al que corresponda de la base de datos
que usa un entitySearch
### Retorna
retorna un array de clase indicada que implementa IBoolProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| castGeoToSearch | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Convierte el objeto geo de una instancia de una clase al entitySearch. |
| values | [System.Func{System.Object,\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{System.Object,``0}') | Diccionario con la metadata y valor de la propiedad. |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de dato de la propiedad geo de una entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetNum64Props\`\`1(values)
```


Obtiene las propiedades de tipo long encontradas en un objeto
base del entitySearch
### Retorna
retorna una array de propiedades de tipo  long que implemente INum64Property
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetStrProps\`\`1(values)
```


Obtiene las propiedades de tipo string encontradas en un objeto
base del entitySearch
### Retorna
retorna una array de propiedades de tipo string que implemente IStrProperty
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetSugProps\`\`1(values)
```


Obtiene las propiedades de tipo string encontradas en un objeto, pero que indiquen que la propiedad es de tipo suggest.
las propiedades de tipo suggest indican que tendrán mayor indexación.
base del entitySearch
### Retorna
retorna una array de propiedades de tipo string que implemente IStrProperty, de propiedades que consideren suggest en su atributo mdm
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| values | [System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{trifenix.connect.mdm_attributes.BaseIndexAttribute,System.Object}') | Diccionario con la metadata y valor de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetSimpleEntity\`\`1(implements,obj,index)
```


obtiene una nueva entidad con sus propiedaes, sin asignar el id y sin referencias locales.
### Retorna
retorna un nuevo entitySearch desde un objeto, instancia de una clase.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| implements | [trifenix.connect.search_mdl.Implements{\`\`0}](#T-trifenix-connect-search_mdl-Implements{``0} 'trifenix.connect.search_mdl.Implements{``0}') | objeto que mantiene todos los tipos a los que cada propiedad debe ser convertido |
| obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto desde el que se obtendrán los atributos |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice de la entidad a crear, el índice se encuentra en el atributo mdm de la clase |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de dato de la propiedad geo de una entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntityBaseSearch\`\`1(entity)
```


Obtiene un entitySearch desde un objeto, asignando las propiedades que corresponden, si el objeto no implementa las propiedades de IEntitySearch lanzará error,
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| entity | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto a convertir |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de dato Geo, dependerá de la implementación |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetIndex(type)
```


obitene el índice de un tipo.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| type | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | tipo de una propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntitySearch\`\`1(implements,obj,hash,collection,parent)
```


Obtiene una colección de EntitySearch desde un objeto
### Retorna
Colección de entitySearch que representan un model
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| implements | [trifenix.connect.search_mdl.Implements{\`\`0}](#T-trifenix-connect-search_mdl-Implements{``0} 'trifenix.connect.search_mdl.Implements{``0}') | retorna los tipos de datos para los elementos de un entity |
| obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto a convertir |
| hash | [trifenix.connect.interfaces.hash.IHashSearchHelper](#T-trifenix-connect-interfaces-hash-IHashSearchHelper 'trifenix.connect.interfaces.hash.IHashSearchHelper') | clase que permite convertir un objeto en un hash y también convertir la cabecera de un entitySearch |
| collection | [System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{\`\`0}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{``0}}') | usado como recursivo, para obtener los entitySearch internos |
| parent | [trifenix.connect.mdm.entity_model.IEntitySearch{\`\`0}](#T-trifenix-connect-mdm-entity_model-IEntitySearch{``0} 'trifenix.connect.mdm.entity_model.IEntitySearch{``0}') | EntitySearch padre, usado para la recursividad |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo del dato geo que tiene la entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
PreLoadedDictionary()
```


Retorna todos los índices de cada una de las colecciones de propiedades para un entitySearch
de un tipo de dato, generalmente un objeto de base de datos.
si no encuentra atributos del modelo de metadatos, devolverá nulo.
### Retorna
índices agrupados por colección (como entitySearch) de una clase
### Parametetros
Este method no tiene parámetros.
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T2 | Clase de la que obtendrá los índices |
## Propiedades

no existen propidades

## Constantes
no existen campos

