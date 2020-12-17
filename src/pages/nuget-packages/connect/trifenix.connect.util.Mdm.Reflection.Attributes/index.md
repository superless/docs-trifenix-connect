---
title : Attributes
description: trifenix.connect.util.Mdm.Reflection.Attributes
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Attributes
```

## Descripción
Métodos estáticos útiles para el modelo de atributos del
/// Metadata-Model de trifenix.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetAttributes\`\`1(type)
```


Obtiene un array de atributos del tipo que se le indique
### Retorna
Colección de atributos solicitados
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| type | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | tipo de dato en el que se buscará la propiedad. |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de atributo |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetAttribute\`\`1(propInfo)
```


Obtiene un Atributo de una propiedad
### Retorna
atributo
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| propInfo | [System.Reflection.PropertyInfo](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Reflection.PropertyInfo 'System.Reflection.PropertyInfo') | metadata de la propiedad |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de atributo a obtener |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropertiesByAttribute(Obj)
```


obtiene un diccionario con propiedades que deben ser mapeadas al metadata model de trifenix.
Los elementos que son mapeados son agrupados con la propiedad que tiene la metadata 
y el valor que tiene esa propiedad en el objeto de entrada
### Retorna
diccionario que por cada propiedad de la clase que implemente el metadata model de trifenix, tendrá la metadata y su valor
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| Obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto que se le extraerá la metadata y sus valores |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropertiesByAttributeWithValue(Obj)
```


Obtiene desde un objeto, solo las propiedades y su valor que no sean nulos o en el caso de las colecciones no estén vacias.
### Retorna
diccionario que por cada propiedad de la clase que implemente el metadata model de trifenix, tendrá la metadata y su valor
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| Obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto que se le extraerá la metadata y sus valores |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropertiesWithoutAttribute(Obj)
```


Obtiene una colección de objetos de cada propiedad de ub objeto de una clase  que no tengan el atributo que origina la metadata,
en el modelo puede suceder que una propiedad no asigne el atributo, pero el tipo de dato de la propiedad
puede tener estos atributos.
esto aplica para para referencias locales, que son aquellas  referencias a clases que no tienen un identificador en una base documental y que el mdm si lo considera (lo considera para todas las entidades).
### Retorna
colección de objetos de propiedades que no tienen asignados atributos de metadata
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| Obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto donde se obtendrá la colección de valores que no tienen atributos de metadata. |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetPropertiesWithoutAttributeWithValues(Obj)
```


Obtiene una colección de objetos correspondiente a cada propiedad de una clase que no tengo asigando un atributo mdm y que no sea nulo o una colección vacia.
### Retorna
colección de objetos  correspondiente a cada propiedad de una clase que no tengo asigando un atributo mdm y que no sea nulo o una colección vacia.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| Obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto del que se obtendrán los valores |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetAttributeList\`\`1(type,visited)
```


Obtiene todos las propiedades de un tipo,
esta revisa los objetos interiores
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| type | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') |  |
| visited | [System.Collections.Generic.HashSet{System.Type}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.HashSet 'System.Collections.Generic.HashSet{System.Type}') |  |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T |  |
## Propiedades

no existen propidades

## Constantes
no existen campos

