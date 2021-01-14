---
title : Implements_T
description: trifenix.connect.search_mdl.Implements`1
---

# Implements<T>

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Implements<T>
```

## Descripción
Para generar un entitySearch desde un objeto de una clase, usamos interfaces que permitirán
implementar el modelo en diferentes bases de datos.
En el modelo existe una entidad y sus propiedades,
sus propiedades pueden ser de valor o de referencia,
los de referencia, vinculan otros entitySearch.
y los de valor agruparan los distintos tipos de datos que un motor de busqueda soporta (str, int, enums, etc), incluso geo.
por cada tipo existe una interface.
Dado que debemos generar un objeto de tipo IEntitySearch desde un objeto de una clase
es obligatorio conocer el tipo al que se convertirá cada una de las propiedades.
## Constructores

no existen constructores


## Funciones

no existen funciones

## Propiedades


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
GeoObjetoToGeoSearch
```


Transforma o Castea el objeto geo que tendría un objeto de una clase 
al objeto geo que usa el modelo entitySearch.
el objeto geo es el único no primitivo (bool, date, string, dbl, etc).
## Constantes
no existen campos

