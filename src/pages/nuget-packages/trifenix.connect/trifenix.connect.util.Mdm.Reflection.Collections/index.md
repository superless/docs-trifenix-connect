---
title : Collections
description: trifenix.connect.util.Mdm.Reflection.Collections
---

# Collections

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Collections
```

## Descripción
Operaciones reflection para colecciones.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CastToGenericArray(genericParameterType,list)
```


Convierte una lista de objetos a un array tipado (T[]) de manera dinámica,
asignandole el tipo y la lista de objetos a castear.
### Retorna
objeto que puede ser casteado a un array tipado (T[])
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| genericParameterType | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Tipo al que se convertirá |
| list | [System.Collections.Generic.IEnumerable{System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.IEnumerable 'System.Collections.Generic.IEnumerable{System.Object}') | listado de objetos a convertir. |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CastToArray\`\`1(list)
```


Convierte un listado de objetos a un array tipado.
### Retorna
array tipado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Collections.Generic.IEnumerable{System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.IEnumerable 'System.Collections.Generic.IEnumerable{System.Object}') | lista de objetos a convertir |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | el tipo a convertir |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateInstance\`\`1()
```


Crea una instancia de una clase dinámicamente
### Retorna
nueva instancia de un objeto del tipo indicado
### Parametetros
Este method no tiene parámetros.
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de la instancia de objeto a crear |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateEntityInstance(genericParameterType)
```


Crea una instancia tipada, indicandole el tipo, esta puede se puede convertir en el tipo indicado dinámicamente.
### Retorna
nueva instancia de un objeto del tipo indicado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| genericParameterType | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Tipo de la nueva instancia |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
FormatValues(prop,values)
```


Retorna un valor o colección tipada, de acuerdo a la metadata de la propiedad
si la propiedad no es una colección, retornará el primer valor de la lista.
si es una colección la casteará a un array o lista del tipo de dato que indica la metadata de la propiedad.
### Retorna
valor casteado al tipo que indica la metadata.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| prop | [System.Reflection.PropertyInfo](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Reflection.PropertyInfo 'System.Reflection.PropertyInfo') | metadata de la propiedad |
| values | [System.Collections.Generic.List{System.Object}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{System.Object}') | valor a convertir al tipo que indica la metadata |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DeleteElementInCollection\`\`1(itemId,prev)
```


Elimina un elemento de una colección
si este no existe lanzará excepción.
si existe lo eliminará
retornará la lista con el resultado
### Retorna
lista con el elemento eliminado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| itemId | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | id del elemento a eliminar |
| prev | [\`\`0[]](#T-``0[] '``0[]') | lista donde se hará la operación |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | elemento de una base de datos |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
UpsertToCollection\`\`1(item,prev)
```


Añade un elemento a una colección si el elemento no existe,
elimina y añade un elemento a una colección, si el elemento ya existe
esto determinado por DocumentDb y su id.
### Retorna
lista de nuevos elementos para reemplazar a prev
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| item | [\`\`0](#T-``0 '``0') | item a actualizar o añadir |
| prev | [\`\`0[]](#T-``0[] '``0[]') | lista donde realizará la operación |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Elemento de base de datos |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetId(elementWithId)
```


obtiene el valor de la propiedad id
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elementWithId | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetProp(elementWithId)
```


obtiene el valor de la propiedad de acuerdo al nombre de la propiedad indicado en el argumento.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elementWithId | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') |  |
## Propiedades

no existen propidades

## Constantes
no existen campos

