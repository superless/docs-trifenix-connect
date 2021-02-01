---
title : CommonDbOperations_T
description: trifenix.connect.db.cosmos.CommonDbOperations`1
---

# CommonDbOperations<T>

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CommonDbOperations<T>
```

## Descripción
Operaciones comunes de cosmosdb,
Estas operaciones son debido a que cosmonaut usa un método estático
para transformar un IQueryable a una lista o colección de elementos
este método no es posible testearlo, 
para poder hacerlo se ha creado esta clase.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
FirstOrDefaultAsync(list,predicate)
```


Retorna el primer elemento de acuerdo a la consulta
### Retorna
Usa el método estático de Cosmonaut para retornar la lista implementada
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | listado obtenido desde Cosmonaut |
| predicate | [System.Linq.Expressions.Expression{System.Func{\`0,System.Boolean}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.Expressions.Expression 'System.Linq.Expressions.Expression{System.Func{`0,System.Boolean}}') | predicado para filtrar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
TolistAsync(list)
```


Retorna una colección de elementos de acuerdo a la consulta
### Retorna
Usa el método estático de Cosmonaut para retornar la lista implementada
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | listado obtenido desde Cosmonaut |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
WithPagination(list,page,totalElementsOnPage)
```


Retorna una colección de elementos de acuerdo a la consulta
y retorna de manera páginada
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| list | [System.Linq.IQueryable{\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Linq.IQueryable 'System.Linq.IQueryable{`0}') | listado obtenido desde Cosmonaut |
| page | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | página a retornar |
| totalElementsOnPage | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | total de elementos por página |
## Propiedades

no existen propidades

## Constantes
no existen campos

