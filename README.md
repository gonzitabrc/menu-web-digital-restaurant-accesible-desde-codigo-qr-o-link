# menu-web-digital-restaurant-accesible-desde-codigo-qr-o-link

/**
*
* Menú Digital accesible desde link o QR - Aplicación Web de Google Apps Script y Google Sheets -
*
* Version: 6.1
*
* desarrollado por Gonzalo Reynoso, DDW -
* https://ddw.com.ar - gonzita@gmail.com
*
* licencia MIT: podés darle cualquier uso sin garantías y bajo tu responsabilidad,
* no podés eliminar los créditos del autor ni el copyright en los archivos
*
**/


DESCRIPCIÓN - 
Sencillo Menú digital para restaurant o bar que consta de una simple página web, y que vos podrás editar tus productos (platos, bebidas, etc) y sus precios desde una simple hoja de cálculo en la nube (Google Sheets). 
La web del menú se actualiza automáticamente tomando los datos desde la hoja de cálculo, apenas haces algún cambio (por ejemplo, actualizas los precios de los platos).
Integra este menú digital de manera muy sencilla en el sitio web de tu restaurant, o bien si no tienes página web podrás usarlo de forma autonóma en un espacio web gratuito que podrás manejar de forma 100% independiente.
En tu restaurant podrás implementarlo simplemente imprimiendo stickers/calcos con el código QR que accede al link del menú digital, para colocarlo en las mesas, en la entrada del local, en vidrieras, o donde lo desees.
Tus clientes escanean ese código QR desde su teléfono, y acceden a la carta digital en el sitio web del restaurante o bien en la página propia del menú (si no tienes web).

SETUP  - INSTRUCCIONES PARA IMPLEMENTAR LA APLICACIÓN
1) crea una copia de esta hoja de cálculo https://docs.google.com/spreadsheets/d/12NqAcKZEsP0SHTOXoRQ8vzh54OCV2NXi1sU7nyqlAD4/edit?gid=1500194713#gid=1500194713 en tu espacio de Google Drive: archivo >> crear una copia  (guarda el archivo y envía su link al escritorio o a favoritos de tu navegador para tenerlo siempre a mano. Tiene que tener esta forma: https://docs.google.com/spreadsheets/d/id_de_la_hoja_de_calculo/)
2) edita la hoja de cálculo copiada para personalizar tu menú en la pestaña 'menu' (podés borrar desde la fila 2, no alteres ni borres los encabezados -fila 1-) para cargar tus propios platos (el nombre de las categorías debe escribirse igual en todos los productos, por ejemplo no pongas "Hamburguesas" y "hamburguesas", ya que por cada valor único el sistema crea un item en el menú de navegación)
3) en el menú superior de la hoja andá a Extensiones >> Google Apps Script: Implementar >> Nueva Implementación (selecciona "Aplicación Web, Ejecutar como: Yo, Quien tiene acceso: cualquier usuario) >> implementar
sigue los pasos, acepta los permisos, al finalizar copia la url de la aplicación web (tiene esta forma: https://script.google.com/macros/s/......../exec)
4) en el editor de Google Apps Script podés editar el logotipo y el pie de página en el archivo 'index.html' 
5) en un editor de código edita el archivo 'index.html' que descargaste del repo (no es el mismo que el del paso anterior), y en la linea 94 reemplaza la url de la aplicación web que obtuviste en el paso 3, que tiene esta forma https://script.google.com/macros/s/xxxxxxxxxx/exec)
6) coloca ese archivo index.html en el directorio web donde deseas publicar tu menu, por ejemplo: https://sitiowebdeturestaurant.com/menu/index.html
7) accede a la url/link del paso anterior en tu navegador y probá que funcione, ahora ya podés generar el código QR con cualquier generador de QR, descarga la imagen del QR, imprimilo, probalo que funcione, y colocalo donde desees

Si necesitas ayuda (rentada $$) para implementarlo, enviame un email a gonzita@gmail.com
