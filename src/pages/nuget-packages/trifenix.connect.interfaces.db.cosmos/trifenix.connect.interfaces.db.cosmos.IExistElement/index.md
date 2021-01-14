---
title : IExistElement
description: trifenix.connect.interfaces.db.cosmos.IExistElement
---

# IExistElement

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
IExistElement
```

## Descripción
Interface para mantener todas las consultas a una base de datos o colección que determinen 
la existencia de un elemento.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
ExistsById\`\`1(id)
```


Devuelve true si el elemento ya existe.
### Retorna
true si existe
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador a buscar |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de Clase que debe ir a buscar |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
ExistsWithPropertyValue\`\`1(namePropCheck,valueCheck,id)
```


Determina si existe un elemento con cierta propiedad, asignando el nombre de la propiedad y el valor que debe chequear.
si incluye el id, el método debería buscar en toda la base de datos, excepto el elemento con el id ingresado,
si no verificará si existe en todos los elementos.
El foco de este método es verificar.
### Retorna
True si existe
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| namePropCheck | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | nombre de la propiedad |
| valueCheck | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | valor de la propiedad |
| id | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | identificador del elemento, que no debe ser incluido |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Tipo de clase a buscar |
## Propiedades

no existen propidades

## Constantes
no existen campos

