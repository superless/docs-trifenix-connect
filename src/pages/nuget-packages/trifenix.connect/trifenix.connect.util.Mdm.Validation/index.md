---
title : Validation
description: trifenix.connect.util.Mdm.Validation
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Validation
```

## Descripción
Validación de módelods IMd
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CompareModel(input,model,bind)
```


Compara un input model con un modelo, para validar si los datos que están en el input coinciden con el del modelo.
### Retorna
true, si los campos coinciden
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| input | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | objeto input de ingreso |
| model | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | modelo a validar |
| bind | [System.Collections.Generic.Dictionary{System.Type,System.Func{System.Object,System.Collections.Generic.IEnumerable{System.Object}}}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.Dictionary 'System.Collections.Generic.Dictionary{System.Type,System.Func{System.Object,System.Collections.Generic.IEnumerable{System.Object}}}') | Colección de funciones, que tomar un input y devuelven una colección de posibles valores que puedan coincidir, es un prefiltro. el método los seleccionará y verá si alguno tiene los mismos valores, si la función no devuelve al menos un modelo correspondiente al input fallará |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
CompareValueContainer\`\`1(input,model)
```


Compara dos contenedores de valores.
### Retorna
true, si los valores coinciden
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| input | [trifenix.connect.util.Mdm.ValueContainer{\`\`0}](#T-trifenix-connect-util-Mdm-ValueContainer{``0} 'trifenix.connect.util.Mdm.ValueContainer{``0}') | colección de propiedades y valores de un objeto input |
| model | [trifenix.connect.util.Mdm.ValueContainer{\`\`0}](#T-trifenix-connect-util-Mdm-ValueContainer{``0} 'trifenix.connect.util.Mdm.ValueContainer{``0}') | colección de propiedades y valores de un objeto model |
### Tipos genéricos
| Name | Description |
| ---- | ----------- |
| T | Las colecciones serán del tipo que se indique |
## Propiedades

no existen propidades

## Constantes
no existen campos

