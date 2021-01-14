---
title : IHashSearchHelper
description: trifenix.connect.interfaces.hash.IHashSearchHelper
---

# IHashSearchHelper

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
IHashSearchHelper
```

## Descripción
Esta interface obliga a asignar un hash para el header, es decir lograr un hash desde el diccionario
e un entitySearch, es decir cuales son los nombres de los indices.
Esto permitirá saber si los índices han cambiado.
También existe un hash generado por el json de un elemento de base de datos de persistencia,
esto permitirá validar que el entitySearch sea un elemento de la base de datos.
## Constructores

no existen constructores


## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
HashModel(obj)
```


Convierte un objeto en un hash
esto se usa para asignar un hash a un entitySearch.
De esta manera si el resultado de un hash de un elemento entitySearch
es distinto al que se espera, el objeto habrá sido corrompido.
### Retorna
hash
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| obj | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | modelo a hashear |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
HashHeader()
```


Obtiene un hash de las cabeceras
toma las enumeraciones existentes, las convierte en un hash
con esto todas las colecciones tendrán un único hash.
Si llegase a modificar los índices de las cabeceras, el hash sería diferente al resto.
### Retorna
Hash de cabeceras
### Parametetros
Este method no tiene parámetros.
## Propiedades

no existen propidades

## Constantes
no existen campos

