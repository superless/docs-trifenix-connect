---
title : IMainGenericDb<T>
description: trifenix.connect.interfaces.db.cosmos.IMainGenericDb`1
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
IMainGenericDb<T>
```

## Descripción
Operaciones básicas para base de datos de persistencia
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateUpdate(entity)
```


añade o actualiza un elemento en la base de datos.
### Retorna
identificador de la entidad
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| entity | [\`0](#T-`0 '`0') | entidad a añadir o actualizar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntity(uniqueId)
```


Obtiene la entidad desde un id
### Retorna
Retorna el elemento
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| uniqueId | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador del elemento |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DeleteEntity(id)
```


Borra una entidad
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identidicador de la entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
SingleQuery\`\`1(query,args)
```


Ejecuta consulta en la base de datos, asignando un tipo de valor esperado,
esto puede ser un int, un string, un bool o incluso una entidad como Persona.
las consultas deben obedecer al tipo de dato esperado.
### Retorna
elemento de tipo T2
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| query | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | consulta a la base de datos |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | parámetros de la consulta |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T2 | Tipo de valor esperado |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
MultipleQuery\`\`1(query,args)
```


Ejecuta una consulta en la base de datos que retornará multiples elementos de tipo T2
donde T2 puede ser cualquier tipo que puediera devolver la base de datos,
obedeciendo a la consulta como parámetro.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| query | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | consulta |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | argumentos de esa consulta |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T2 | Tipo a retornar, puede ser string, int u una entidad como Persona |
## Propiedades

no existen propidades

## Constantes
no existen campos

