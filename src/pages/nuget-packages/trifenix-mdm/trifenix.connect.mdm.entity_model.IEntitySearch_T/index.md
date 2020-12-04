---
title : IEntitySearch_T
description: trifenix.connect.mdm.entity_model.IEntitySearch`1
---



# IEntitySearch_T

## Descripción
Entidad base de fenix-mdm
esta estructura permite guardar todas las entidades en agrupaciones por tipo de dato.
el objetivo es generar este tipo de entidades desde el modelo de clases y viceversa,
Puedo generar un entity search desde cualquier tabla o clase, la diferencia es que para poder convertir desde
el entity search, necesito la metadata, es decir, el diccionario que relaciona los índices de este modelo con los nombres
de clases y propiedades.
Este modelo permite a componentes webs, móviles o desktop realizar consultas a este modelo,
pudiendo generar una sólida arquitectura de componentes.
el tipo de datos corresponde al tipo geo, que dependerá de la base de datos.
`T`
## Constructores

no existen constructores


## Funciones

no existen funciones

## Propiedades

### id
Identificador único de cualquier entidad del modelo, generalmente un guid.
### created
Fecha de creación del elemento
### index
El índice que identifica la entidad, por ejemplo 1 = Persona.
### bl
diccionario de valores de tipo booleano.
### dbl
diccionario de valores de tipo double.
### dt
diccionario de valor de tipo date
### enm
diccionario de valores de tipo enum.
### num32
diccionario de valores de tipo número
### num64
diccionario de valores de tipo long
### rel
diccionario de valores de tipo relación
en elemento se podrá relacionar 1 a 1 o 1 a muchos a través de esta propiedad.
### str
diccionario de valores tipo string.
### sug
diccionario de valores de tipo string que serán usados para autocompletar o sugerencias mientras busca.
### geo
Identifica una propiedad de tipo geo, la cual podrá determinar la ubicación geográfica de un elemento
El tipo será según el motor de busqueda.
### hm
hash de la base de datos que representa el modelo.
### hh
hash de la cabecera.
## Constantes
no existen campos

