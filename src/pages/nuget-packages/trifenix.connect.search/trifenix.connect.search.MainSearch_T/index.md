---
title : MainSearch<T>
description: trifenix.connect.search.MainSearch`1
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
MainSearch<T>
```

## Descripción
Encargada de hacer operaciones CRUD sobre azure search.
Esta clase no debiera ser testeada
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
OperationElements\`\`1(elements,operationType)
```


Añade o elimina items dentro de azure search.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elements | [System.Collections.Generic.List{\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{``0}') | elementos a guardar dentro del search |
| operationType | [trifenix.connect.mdm.enums.SearchOperation](#T-trifenix-connect-mdm-enums-SearchOperation 'trifenix.connect.mdm.enums.SearchOperation') | Tipo de operación Añadir o borrar |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | El tipo solo puede ser una entidad soportada dentro de azure search, se validará que cumpla |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
AddElements(elements)
```


Añade elementos al search.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elements | [System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{\`0}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{`0}}') |  |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Esto debería ser EntitySearch |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
AddElement(elements)
```


Añade un elemento al search.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elements | [trifenix.connect.mdm.entity_model.IEntitySearch{\`0}](#T-trifenix-connect-mdm-entity_model-IEntitySearch{`0} 'trifenix.connect.mdm.entity_model.IEntitySearch{`0}') |  |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Esto debería ser EntitySearch |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DeleteElements(elements)
```


Borra elementos desde el search.
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| elements | [System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{\`0}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{trifenix.connect.mdm.entity_model.IEntitySearch{`0}}') | entidades a eliminar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
FilterElements(filter)
```


filtra elementos del search de acuerdo a una conuslta
### Retorna
Entidades encontradas
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| filter | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | filtro de azure (Odata) |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
EmptyIndex()
```


Vacía el índice.
### Parametetros
Este method no tiene parámetros.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateOrUpdateIndex()
```


Crea o actualiza el índice en el azure search.
### Parametetros
Este method no tiene parámetros.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DeleteElements(query)
```


Borrar elementos de azure search de acuerdo auna consulta
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| query | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | consulta de elementos a eliminar |
## Propiedades

no existen propidades

## Constantes
no existen campos

