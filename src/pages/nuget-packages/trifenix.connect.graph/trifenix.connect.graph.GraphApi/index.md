---
title : GraphApi
description: trifenix.connect.graph.GraphApi
---

# GraphApi

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GraphApi
```

## Descripción
Operaciones de Microsoft Graph
para active directory
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor(arguments)
```


utiliza los argumentos de active de cosmosdb
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| arguments | [trifenix.connect.arguments.CosmosDbArguments](#T-trifenix-connect-arguments-CosmosDbArguments 'trifenix.connect.arguments.CosmosDbArguments') | ? no se porque se utiliza |

## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateUserIntoActiveDirectory(name,email)
```


Crea un usuario en active directory
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | nombre del usuario |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | email del usuario |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetObjectIdFromEmail(email)
```


Obtiene el id de active directory desde el email
### Retorna
identificador de AAD
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | correo del usuario |
## Propiedades

no existen propidades

## Constantes
no existen campos

