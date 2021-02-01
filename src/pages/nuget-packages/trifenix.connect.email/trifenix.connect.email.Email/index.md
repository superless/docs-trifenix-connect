---
title : Email
description: trifenix.connect.email.Email
---

# Email

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
Email
```

## Descripción
Clase email, encargada de la emisión de correos.
## Constructores


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
#ctor(sender,password)
```


Constructor del correo
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| sender | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | emisor |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | clave |

## Funciones


<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
InitSMTPServer(sender,password)
```


Envía correo, ojo, debería ser parámetrizado
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| sender | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | emisor |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | clave |

<CodeBlock slots = 'heading, code' repeat = '1' languages = 'C#' />

#### Clase
```
SendEmail(mails,subject,htmlBody)
```


Envío de email
### Parametros
| Nombre | Tipo | Descripción |
| ------ | ---- | ----------- |
| mails | [System.Collections.Generic.List{System.String}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Collections.Generic.List 'System.Collections.Generic.List{System.String}') | correo |
| subject | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | sujeto |
| htmlBody | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | cuerpo |
## Propiedades

no existen propidades

## Constantes
no existen campos

