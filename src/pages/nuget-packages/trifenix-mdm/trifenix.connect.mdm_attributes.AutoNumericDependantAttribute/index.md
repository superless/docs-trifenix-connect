---
title : AutoNumericDependantAttribute
description: trifenix.connect.mdm_attributes.AutoNumericDependantAttribute
---



<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
AutoNumericDependantAttribute
```

## Descripción
Atributo que determina que un campo es autonumérico
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor()
```


inicializa el index como string,
este campo no pude ser de otro tipo.
### Parametetros
Este constructor no tiene parámetros.

## Funciones

no existen funciones

## Propiedades


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Dependant
```


la autonumeneración puede depender de otra entidad, para comenzar desde el principio,
por ejemplo, una dosis tendrá un autonumérico que depende de producto,
el producto 1, tendría  la dosis 1, 2 y 3
y el producto 2, tendría la dosis 1 y 2.
## Constantes
no existen campos

