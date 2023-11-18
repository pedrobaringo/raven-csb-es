![Fondo Tutorial Kids on Bikes](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/cc01b23d-0e75-4d58-96fe-232523b7f4f4)
# Fichas para Raven en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un Personaje Corvus](#crear-un-personaje-corvus)
  - [Pestaña de Personalidad y Acciones](#pestaña-de-personalidad-y-acciones)
  - [Pestaña de Magia y Secuelas](#pestaña-de-magia-y-secuelas)
  - [Pestaña de Caminos y Círculos](#pestaña-de-caminos-y-círculos)
- [Crear un Personaje No Corvus](#crear-un-personaje-no-corvus)
- [Hacer tiradas](#hacer-tiradas)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Raven en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace:

[![Video del tutorial](http://img.youtube.com/vi/vsIx_xzhEPo/0.jpg)](http://www.youtube.com/watch?v=vsIx_xzhEPo "Tutorial Foundry-Kids on Bikes")


## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: https://github.com/pedrobaringo/raven-csb-es/releases/latest/download/module.json

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/b6fc5441-35aa-4ac5-ae84-bba2bee85c0c)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás: "Actores".
Es importante que al importar mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/0bf4b259-76db-455f-99cc-e40c732f4bd6)

## Añadir estilos CSS
Para que el estilo de las fichas y mensajes sean más parecidos al libro debemos ir a Configurar Ajustes --> Custom System Builder y allí rellenar el campo CSS Style file con "modules/raven-csb-es/assets/Raven.css", sin las comillas. Y ya que estamos en este menú, si queremos que nos aparezca un icono de dados al lado de los campos que se pueden tirar, en Roll Icons podemos poner "dice" (tambien sin comillas). En iniciativa no es necesario poner nada.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/edb881a8-a658-4112-b384-d6d6fad9fbf4)

Para que tenga efecto debemos refrescar la página.

## Crear un PC
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/6a03b3d7-823c-4852-99a7-942eb0d2f2d2)

Aqui tenemos que seleccionar en Template la llamada PC_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/5d28bc42-ac3e-421b-9e34-095aa3112001)

En la parte de arriba se puede seleccionar el arquetipo (que activará los campos correspondientes de Acciones y Magia). Tambien tenemos para rellenar los campos de "Lo que te hace..." para definir el personaje.

### Pestaña de Personalidad y Acciones
En esta pestaña tenemos primero las personalidades, donde podemos rellenar con el valor que corresponda cada una de ellas. Al clickar en el nombre de la personalidad se ejecutan las tiradas de dados.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/c972633b-8b80-4b6e-afbe-9c48d0a06c26)

En la parte derecha de esta pestaña tenemos las acciones con los checkboxes de las que se pueden ir adquiriendo al avanzar el personaje.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/b5f00c92-e545-4a6f-840c-314c5bac97b6)

En la parte izquierda, debajo de las personalidades tenemos las casillas donde rellenar "Tienes Tendencia Inquietante a...", " Tu Maldición" y "Tu Enigma Personal". Todos ellos tienen un cuadro de texto para que los jugadores puedan rellenarlo.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/4a0bc420-10e8-4324-8d38-589b79b8804b)

Debajo de las Acciones tenemos los campos "Tus hermanos y hermanas" (que se puede editar para añadir las descripciones que haga falta), y "Tu persona amada maldita" 8tambien con sus campos editables).

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/67e03609-d40f-4d14-a1a2-4b4f63548d09)

### Pestaña de Magia y Secuelas
En esta pestaña tenemos las tres casillas relacionadas con la magia y las secuelas, problemas, ayudas y giros pendientes.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/be48b8bd-09a2-4dfc-9b3e-b7d831d319c1)

En "Tu Arte Mágica Maldita" tienes el arte relacionada con el arquetipo que hayas seleccionado y puedes rellenar los campos editables.

En la casilla de al lado tienes las acciones mágicas así como un sitio donde anotar tus sacrificios mágicos.

En "Tu Círculo de Poder Mágico" puedes ir marcando en que nivel del círculo está tu personaje.

En las últimas cuatro secciones puedes rellenar las secuelas que vayas recibiendo, así como anotar los problemas, giros y ayudas que vayan apareciendo durante la partida.

### Pestaña de Caminos y Círculos
En esta pestaña tenemos los dos caminos, el de Niebla y el de Aprendizaje, ademas de otros campos para describir la gente y objetos que nos rodean.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/e80fefe0-d552-4608-b8f7-9033b452b876)

En el camino de Niebla podemos ir marcando las casillas de cada nivel a medida que vayamos adentrandonos en la Niebla. Una vez completado un nivel podemos elegir del desplegable el tipo de mágia y el Rasgo de Maldición.

En el camino de Aprendizaje podemos marcar las casillas cada sesión y los avances una vez estén marcadas todas.

En "Tu Ayuda de Cámara" y en "Tu Laboratorio" puedes describir brevemente a ese personaje y tu lugar de trabajo. En "Tu Biblioteca y Objetos Tenebrosos" puedes editar el campo para añadir más objetos y libros a parte del que viene por defecto según el arquetipo seleccionado.

En "Tu Circulo Social" puedes editar el cuadro de texto para ir asignando los PNC que vayas encontrando y su relación contigo.

## Crear un Personaje No Corvus
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/raven-csb-es/assets/148097688/6a03b3d7-823c-4852-99a7-942eb0d2f2d2)

Aqui tenemos que seleccionar en Template la llamada Personaje_Potenciado_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/38f1c13d-b7d9-4eed-9fcf-36728c9ffbf2)

En la parte de arriba se pueden poner la edad, seleccionar si es niño/adolescente/adulto o dejarlo en blanco y escribir una descripción.

Justo debajo tenemos las habilidades que funcionan como las de los PJs, pero con la posibilidad de no poner dado (hasta que se descubra). Tambien está el apartado de Energia Psiquica, donde podemos poner los puntos que tiene, tirar los dados y, para mayor personalización, seleccionar que dados y cuantos se tiran al usar los poderes (por defecto 2d4).

Debajo de las caracteristicas tenemos los Aspectos. Podemos crear filas en esta tabla haciendo click en el + y rellenarlas con los aspectos del personaje y el nombre del personaje que controla cada uno. Tambien podemso hacer check si queremos marcar en cada momento quien lo está controlando.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/0b99ef3b-dbad-4cb7-b544-d11ec36a939c)

Finalmente tenemos un apartado donde tomar notas abajo del todo.

## Hacer tiradas
Para hacer tiradas solamente se necesita clickar en el nombre de la habilidad que queramos tirar.

En general se tirará el dado correspondiente y si sale el valor más alto en el dado este explotará. Tambien se sumarán los modificadores de edad que aparecen al lado del dado.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/3b1cf0c4-ccf6-4245-88bf-53da4f93d8bc)

En el mensaje del chat se puede hacer click en el resultado para ver como se ha obtenido:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/ab9aece9-b057-4cd5-841a-e0e580bccd80)

Si tenemos que hacer una tirada con algún modificador lo podemos hacer manteniendo pulsado Mayus al clickar en la habilidad que querramos tirar. Nos aparecerá un dialogo donde poner el modificador:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/f186704f-bfe9-4a2a-b25b-bdb0848c4c4b)

En el caso de la Energia Psiquica de los Personajes Potenciados podemos elegir el tipo y numero de dados a tirar:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/f878daa8-6643-47b9-8005-c9edcf3b4f4c)

Al hacer click en Energia Psiquica se tiraran los dados seleccionados. Se pueden usar modificadores al igual que hemos descrito para el resto de tiradas.
