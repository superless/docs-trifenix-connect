---
title : Authentication
description: trifenix.connect.auth.Authentication
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Authentication
```

## Descripción
Clase de autenticación, implementación de interfaces de trifenix connect.
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor(clientID,tenant,tenantID,validAudiences)
```


Constructor de autenticación
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| clientID | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador de la aplicación en Azure Active directory |
| tenant | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Nombre inquilino en Active Directory |
| tenantID | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Id del inquilino de active directory |
| validAudiences | [System.String[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String[] 'System.String[]') | audiencias válidas (las páginas autorizadas) |

## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
ValidateAccessToken(accessToken)
```


Valida el acceso con un token
### Retorna
Objeto con información de validación
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| accessToken | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador del token |
## Propiedades

no existen propidades

## Constantes
no existen campos

