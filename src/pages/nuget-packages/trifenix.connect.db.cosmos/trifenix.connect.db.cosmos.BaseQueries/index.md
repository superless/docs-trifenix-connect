---
title : BaseQueries
description: trifenix.connect.db.cosmos.BaseQueries
---

# BaseQueries

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
BaseQueries
```

## Descripción
Consultas base para cosmosdb
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor(dbArguments)
```


inicializa base queries con las conexiones a la base de dato
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| dbArguments | [trifenix.connect.arguments.CosmosDbArguments](#T-trifenix-connect-arguments-CosmosDbArguments 'trifenix.connect.arguments.CosmosDbArguments') | argumentos de la base de datos |

## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
SingleQuery\`\`2(query,args)
```


Consulta que regresa solo un elemento de cosmos db
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| query | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | consulta |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | argumentos |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| TDOCUMENT | Tipo de elemento a obtener, debe heredar de documentBase |
| T | Tipo de resultado |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
MultipleQuery\`\`2(query,args)
```


Consulta que retorna multiples elementos de un tipo
### Retorna
Collección de resultados desde cosmosdb
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| query | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | consulta |
| args | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | argumentos |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| TDOCUMENT | documento |
| T | Tipo de Respuesta |
## Propiedades

no existen propidades

## Constantes

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DbArguments
```


DbArguments queda disponible fuera de BaseQueries
