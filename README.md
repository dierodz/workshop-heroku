<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Henry

## Objetivos del Proyecto

- Construir una App JavaScript desde cero.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Utilizar Metodologías Ágiles.
- Trabajar en equipo.
- Usar y practicar testing.

## Trabajo en Equipo

En este proyecto, van a trabajar en equipo de 4 a 6 personas. Van a trabajar siempre en pares, al terminar una tarea, van a cambiar de pareja para llegar a trabajar con todos los compañeros.
Ninguna tarea debería llevar más de dos días en terminar, si esto sucede contactar con tu PM.

Vamos a usar **GIT** para gestionar el código y **Trello** para gestionar el proyecto y facilitar la colaboración. Recomendamos el siguiente *workflow* para una tarea dada:

- Crear una Card de Trello para una tarea.
- Asignar un equipo de dos para trabajar en la tarea.
- Hacer un `branch` por cada card de trello (incluir el nombre o ID de la card en el nombre de la branch).
- Codear en equipo hasta completar la tarea (con tests).
- Pullear de master a nuestra branch (para mergear código nuevo de master).
- Pushear nuestra Branch a git y hacer un `PR` indicando la Card que cierra.
- Mover la Card de trello a `Review`.
- Asignar a otro equipo de dos para que revise el `PR`.
- Iterar hasta que no haya más comentarios:
    + Si hay un comentario, el equipo original debe codear de nuevo la solución y volver a subir el código a github.
    + Si no hay comentarios, se aprueba el `PR` y se mergea a master
- Mergear el `PR` a master.
- Volver al punto 1 hasta terminar el proyecto.

## Horarios y Fechas

El proyecto dura cuatro semanas. El lunes siguiente al terminar el sprint se realiza una demo donde se muestra al TL el progreso de esa semana. La última semana tiene el `demo final` donde se muestra el proyecto a todo el cohorte.

El horario de trabajo sigue siendo de 9AM a 18PM.
Todos los días a un horario a definir con su TL habrá un STAND UP para revisar las tareas del día, el progreso y si están bloqueados y/o necesitan ayuda.

## Comenzando

Vamos iniciar clonando el repo de Github que se les indicará llamado: `ec-{Cohorte}-{Grupo}`. Donde vamos a invitar a todos colaboradores del proyecto.

Nosotros te vamos a dar un `boilerplate` con los modelos de Usuario y el flow de autenticación funcionando. Sobre este código vas a branchear para empezar a agregar tus propias features.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` vas a tener que crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Tenés que reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado por github, ya que contiene información sensible (las credenciales).

El contenido de `client` fue creado usando: Create React App.

### Requerimientos

La aplicación del e-commerce va a contar con los siguientes requerimientos:

### Usuarios no Autenticados

Un Visitante anónimo debería poder navegar tu e-commerce, ver y buscar productos.

###### Como un Guest yo quiero...

- PRODUCTOS:
    + ...ver la lista completa de productos (catálogo), para ver todo lo disponible para comprar.
    + ...refinar el listado por categorías, para poder ver los items en los que estoy interesado.
    + ...buscas productos, para poder encontrar rápido los productos que quiero comprar.
    + ...ver los detalles de un producto individual (incluida las fotos, descripciones, reviews, etc...), asi puede determinar si quiero ese producto o no.

- CARRITO:
    + ...poder agregar items a mi carrito de compras desde el listado o desde a página de detalles de un producto, para poder comprarlos despues.
    + ...sacar items de mi carrito, en caso que decida no quererlos.
    + ...editar cantidades de los items de mi carrito, en caso que quiera mas o menos cantidad de un item en particular.
    + ...refrescar la página, o irme y volver, y todavía tener mi carrito de compras (sin haberme creado una cuenta). (Podés usar sessionStorage, localStorage, cookies, o JWT).
    + ...poder crearme una cuenta, loguearme y seguir editando ese mismo carrito, asi no pierdo los items seleccionados.
- CHECKOUT:
    + ...poder comprar todos los items de un mi carrito.
    + ...especificar una dirección de envio y un email cuando hago el checkout, asi me envien la compra a lugar que dije.
    + ...recibir un email de confirmación que hice la compra.
    + ...recibir un email de notificación cuando la orden fue despachada.
- GESTION DE CUENTA:
    + ...poder crear una cuenta, asi puede hacer otras cosas como dejar un review.
    + ...poder logearme usando Google o Github, para no tener que acordarme de un password nuevo.

### Usuarios Autenticados

Los usuarios que hayan creado su cuenta, podrán hacer todo lo que puede hacer un usuario guest y además:

###### Como un Usuario Autenticado yo quiero...

- GESTION DE CUENTA:
    + ...poder desloguearme, asi nadie más pueda usar mi sesión.
    + ...ver el historial de ordenes previas, asi puede reever las ordenes que hice en el pasado.
    + ...ver los detalles de una orden que hice en el pasado, incluyendo:
        * Los items comprados, con sus cantidades.
        * Links a la página del producto comprado.
        * Fecha y hora de la compra.
- REVIEWS:
    + ...poder dejar reviews a los productos, que incluyan texto y un sistema de cinco estrellas.

### Admin

Los usuarios administradores pueden manejar el sitio, los productos que se listan y los items que están disponibles.

###### Como un administrador yo quiero...

- GESTION DE PRODUCTOS:
    + ...poder crear y editar productos, con nombre, descripción, precio y uno o más fotos, tal que los visitantes puedan ver la última información de lo que se vende.
    + ...poder crear categorías, para que los usuarios puedan filtrar los items.
    + ...poder agregar o sacar categorías de los items (los items deben poder aceptar múltiples categorías).
    + ...gestionar la disponibilidad de un item. (un item que no esta disponible, no deberá estar listado en la página, pero su detalle debe seguir siendo accesible desde el historial de compras o con su URL, pero debe mencionar que el item no está disponible).

- GESTION DE ORDENES:
    + ...poder ver una lista de todas las ordenes, para poder ver y revisar las ordener.
    + ...poder filtrar as ordenes por su estado (creada, procesando, cancelada, completa).
    + ver los detalles de una orden específica, asi puedo revisarla y actualizar su estado.
    + ...poder cambiar el estado de una orden (creada => procesando, procesando => cancelada || completa).

- GESTION DE USUARIOS:
    + ...poder hacer que un usuario se convierta en admin.
    + ...borrar a un usuario, asi no puedan logearse más.
    + ...forzar una password reset para un usuario.

### Validación de Datos

Cuando crees los modelos, debes considerar los tipos de datos que vas a recibir, qué cosas van a ser requeridas y cómo vas a devolver los errores a los usuarios.
Algunas constrains qué deberás implementar:

- Productos:
    + Deben tener `titulo`, `descripcion`, `precio`, `cantidad`
    + Deben pertenecer a por lo menos una categoría.
    + Deben tener una foto, si no tienen una foto, deben tener un placeholder de foto por defecto.
- Usuarios:
    + Deben tener una dirección de mail válida.
    + Su email debe ser único.
- Ordenes:
    + Una orden debe pertenecer a un usuario o a un guest (autenticado vs no autenticado).
    + Las ordenes deben tener línea de orden que contiene el `precio`, `productId`, y `cantidad`.
    + Si un usuario completa una orden, esa orden debe mantener el precio del item al momento de la compra, sin importar que el precio del producto cambie después.
- Reviews:
    + Todas las reviews deben pertenecer a un producto.
    + Todas las reviews deben pertenecer a un usuario.
    + Todas las reviews deben tener por lo menos x caractéres.

### Milestones

Este proyecto tiene muchas tareas para realizar, asi que es fácil sentirse abrumado. Estas son las features que esperamos que muestres en cada demo:

- Demo **1**: Catálogo de productos
    + Los usuarios pueden ver los productos y filtrar por categoría.
    + Los administradores pueden editar y agregar productos
- Demo **2**:
    + Los usuarios pueden buscar productos en el catálogo.
    + El catálogo está paginado.
    + Los usuarios tienen un carrito al que pueden agregar productos.
- Demo **3**:
    + Los usuarios pueden ver su historial de compras.
    + Los usuarios tienen su carrito en cualquier device al que se logueen.
- Demo **Final**:
    + Los usuarios pueden hacer el checkout.
    + Los admins pueden ver las ordenes pendientes.
    + Los usuarios reciben mails de notificaciones.
