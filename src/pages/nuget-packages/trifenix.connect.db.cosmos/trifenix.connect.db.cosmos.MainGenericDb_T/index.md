---
title : MainGenericDb<T>
description: trifenix.connect.db.cosmos.MainGenericDb`1
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
MainGenericDb<T>
```

## Descripción
Implementación de operaciones de base de datos cosmosDb
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor(args)
```


Implementación de operaciones de base de datos para cosmosDb
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| args | [trifenix.connect.arguments.CosmosDbArguments](#T-trifenix-connect-arguments-CosmosDbArguments 'trifenix.connect.arguments.CosmosDbArguments') | identificaciones de cosmosDb |

## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CreateUpdate(entity)
```


Crea o actualiza una entidad 
Upsert, Añade o actualiza
### Retorna
identificador de la entidad a aguardar
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| entity | [\`0](#T-`0 '`0') | entidad a guardar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GetEntity(id)
```


Obtiene una entidad desde el store
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador de la entidad |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
DeleteEntity(id)
```


Elimina una entidad de la base de datos.
### Retorna

### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador de la entidad a eliminar |
## Propiedades


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Store
```


Store de Cosmonaut
## Constantes
no existen campos

