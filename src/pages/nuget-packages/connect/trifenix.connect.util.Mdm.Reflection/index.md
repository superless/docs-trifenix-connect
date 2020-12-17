---
title : Reflection
description: trifenix.connect.util.Mdm.Reflection
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Reflection
```

## Descripción
mdm reflections
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
InvokeDynamicGeneric(ClassContainer,MethodName,GenericType,Parameters,genericProp)
```


Invoca método genérico dinámicamente (Los tipo de datos se determinan en tiempo de ejecución).
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| ClassContainer | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Clase que contiene el método genérico |
| MethodName | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Nombre del método genérico |
| GenericType | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Tipo de dato usado como genérico |
| Parameters | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Conjunto de parámetros utilizados por el método genérico |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetDescription(GenericEnum)
```


Entrega la descripción de un item de una enumeración.
### Retorna
Texto en al atributo descripción
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| GenericEnum | [System.Enum](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Enum 'System.Enum') | elemento de una enumeración |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetDescription(type)
```


A partir de una enumeración entrega un diccionario con el indice y
la descripción, esta es obtenida desde el atributo description que lleva cada elemento de la enumeración.
si no tiene el atributo simplemente convertirá a string el elemento.
### Retorna
Diccionario con el índice y la descripción
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| type | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Enumeración |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
HasValue(value)
```


verifica que un elemento no sea nulo y si es una lista, no esté vacia.
### Retorna
true, si es un valor y no es nulo o es una colección con al menos un valor.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| value | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto a evaluar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
IsEnumerable(element)
```


Verifica si un objeto es una colección (implementa IEnumerable).
### Retorna
true si es una colección.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| element | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto a comprobar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
IsEnumerableProperty(propertyInfo)
```


Comprueba si una propiedad de una clase es una enumeración.
### Retorna
true si la propiedad es una colección.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| propertyInfo | [System.Reflection.PropertyInfo](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Reflection.PropertyInfo 'System.Reflection.PropertyInfo') | metadata de la propiedad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetLoadableTypes(assembly)
```


Gets all types that can be loaded from an assembly.
Source: http://stackoverflow.com/questions/11915389/assembly-gettypes-throwing-an-exception
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| assembly | [System.Reflection.Assembly](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Reflection.Assembly 'System.Reflection.Assembly') |  |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
NotNull(obj,argumentName)
```


Envía excepción si el assembly es nulo.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | assembly |
| argumentName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | un argumento importante de mencionar en la excepción. |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntityType(index,typeOfAssembly,nms)
```


obtiene el tipo de la clase de acuerdo al índice
el índice identifica un entitySearch.
por ejemplo, un entitySearch con indice 1  sería igual  a la clase Persona,
este vínculo se logra a través de un atributo indicado en la clase (Metadata).
este método busca en el assembly  y el namespace indicado, la clase que tenga el atributo BaseIndexAttribute,
y dentro de ese atributo tenga el índice indicado.
### Retorna
la clase que tiene el atributo BaseIndexAttribute y el índice indicado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice de una entidad del metadata model de trifenix. |
| typeOfAssembly | [System.Type](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Type 'System.Type') | Cualquier tipo que esté contenido en el mismo assembly en el que esta la clase que tiene el atributo que indica que es una entidad |
| nms | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | namespace donde se encuentra la clase que corresponde a la entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntityType(index,assembly,nms)
```


obtiene el tipo de la clase de acuerdo al índice
el índice identifica un entitySearch.
por ejemplo, un entitySearch con indice 1  sería igual  a la clase Persona,
este vínculo se logra a través de un atributo indicado en la clase (Metadata).
este método busca en el assembly  y el namespace indicado, la clase que tenga el atributo BaseIndexAttribute,
y dentro de ese atributo tenga el índice indicado.
### Retorna
la clase que tiene el atributo BaseIndexAttribute y el índice indicado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| index | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | índice de una entidad del metadata model de trifenix. |
| assembly | [System.Reflection.Assembly](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Reflection.Assembly 'System.Reflection.Assembly') | assembly en el que esta la clase que tiene el atributo que indica que es una entidad |
| nms | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | namespace donde se encuentra la clase que corresponde a la entidad |
## Propiedades

no existen propidades

## Constantes
no existen campos

