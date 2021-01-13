---
title : EntitySearch
description: trifenix.connect.mdm.search.model.EntitySearch
---

# EntitySearch

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
EntitySearch
```

## Descripción
Implementación de azure search de modelo de entidades 
de fenix mdm.
Esta implementación añade metadata que permitirá optimizar las busquedas 
según el tipo de propiedad.
esta entidad es un contenedor de valores de una clase. 
donde con un diccionario es posible identificar los valores que encuentran en estos contenedores.
a través de un modelo de atributos, originamos una metadata que permite poder crear 
una estructura de elementos indexados para lecturas de alta velocidad
y que permite crear una arquitectura de componentes tanto para web o móvil, que 
consulten a este modelo sin necesidad de conocer el negocio en el que será implementado.
esta clase busca mantener arrays por cada tipo de dato para poder mejorar las busquedas.
ocupar poco espacio, por eso los nombres cortos.
sin embargo, incluso al guardar una entidad vacia, se generarán los arrays vacios, que ocupan espacio.
por otro lado, los valores nulos no son incluidos en este modelo.
si se identifica una entidad con el índice de una clase, las propiedades que no tengan valores en este modelo
se entenderán como nulas.
## Constructores

no existen constructores


## Funciones

no existen funciones

## Propiedades


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
id
```


Identificador de la entidad. 
aquí asignarémos por regla general un guid que identifique a la entidad

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
index
```


índice que será usado con un diccionario para identificar el elemento.
por ejemplo, 
si un elemento es una persona, el índice será igual a 1, que es el índice que el diccionario tiene para persona.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
created
```


Fecha de creación, esto no está siendo utilizado aún,
se tiene la idea de usarlo como ttl, pero hay que investigar acerca de la 
metadata propia de azure, la cual podría tener un timestamp para hacer operaciones de este tipo.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
rel
```


propiedad que referencia otras entidades, 
estas entidades son identificados por su índice y su valor.
esta propiedad relaciona entidades, como una profesor y sus salas o
una especie de una fruta a sus variedades.
esta propiedad implementa facet por lo que permite agrupación de busquedas.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
sug
```


todas las propiedades que sean asignadas como suggest,
serán utilizadas para autocompletado o sugerencias de busqueda
esto permite mejorar las busquedas, pero también aumentará el tamaño de la base de datos.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
str
```


colección de valores de tipo cadena de texto.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
enm
```


colección de valores de tipo enumeración,
este tipo de propiedad es de tipo facetable por tanto se puede agrupar por valor de la enumeración.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
num32
```


colección de propiedades de tipo entero.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
num64
```


colección de propiedades de tipo long.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
dbl
```


colección de propiedades de tipo doble.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
dt
```


colección de propiedades de tipo fecha.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
geo
```


colección de propiedades de tipo geo.

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
bl
```


colección de propiedades de tipo bool.
## Constantes
no existen campos

