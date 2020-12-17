---
title : ICommonDbOperations<T>
description: trifenix.connect.interfaces.db.cosmos.ICommonDbOperations`1
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
ICommonDbOperations<T>
```

## Descripción
CosmosDb usa un método static que transforma el resultado como IQueryable, en una lista con resultados.
Para poder testearlo usamos esta interface, lo que permite obviar el iqueriable y retornar el resultado que deseemos
o leer lo que deseemos del IQueriable formado por CosmosDb.
Esta implementación deberá estar presente en otras bases de datos, incluso aunque tengan que pasarla a ToList.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
TolistAsync(list)
```


Retorna una lista de elementos desde un IQueryable.
### Retorna
Listado de elementos
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | IQueryable a convertir |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
FirstOrDefaultAsync(list,predicate)
```


El primer elemento que encuentre desde una lista filtrada por el parámetro de entrada (predicate).
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | IQueryable a convertir |
| predicate | [System.Linq.Expressions.Expression{System.Func{\`0,System.Boolean}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.Expressions.Expression 'System.Linq.Expressions.Expression{System.Func{`0,System.Boolean}}') | filtro de busqueda |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
WithPagination(list,page,totalElementsOnPage)
```


Este método usa un IQueriable y lo convierte en un resultado determinado por la página que determine y que es cálculado
de acuerdo a el número total de elentos que se perniten en cada página.
este método es bastante dependiente de Cosmonaut, dado que este usa un Iqueriable para convertir en una colección páginada.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | IQueriable a consultar |
| page | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | página a buscar |
| totalElementsOnPage | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | total de elementos en página |
## Propiedades

no existen propidades

## Constantes
no existen campos

