var panorama, viewer, container, infospot;
container = document.querySelector('#container_principal');
panorama = new PANOLENS.ImagePanorama('imagenes/recorrido.jpg');

//ZONA1 ESCALERAS
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(-31 ,84 , -500);
//-60s indica que el texto permanecera hasta que el usuario lo cierre manualmente
infospot1.addHoverText('El área de visualización de juegos en la arena principal es un espacio vibrante donde los aficionados se reúnen para disfrutar de emocionantes partidos. Aquí, pueden sumergirse en la acción, compartiendo la emoción de cada momento en pantalla grande. Desde competencias deportivas hasta batallas en juegos electrónicos, esta zona se convierte en el epicentro de la pasión y la camaradería, donde la comunidad se une en torno a su amor compartido por el deporte y la competencia.', -60);
infospot1.element.innerHTML = '<div style="background-color: #af141494; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px; text-align: justify;">El área de visualización de juegos en la arena principal es un espacio vibrante donde los aficionados se reúnen para disfrutar de emocionantes partidos. Aquí, pueden sumergirse en la acción, compartiendo la emoción de cada momento en pantalla grande. Desde competencias deportivas hasta batallas en juegos electrónicos, esta zona se convierte en el epicentro de la pasión y la camaradería, donde la comunidad se une en torno a su amor compartido por el deporte y la competencia.</div>';
panorama.add(infospot1);

//ZONA2 VIDEO EVENTO
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(500 ,271 , -218);
infospot2.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
infospot2.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/VI6GAiBNe7o?si=0zV9Urvfu6xOEbJr" ></iframe>        
    </div>
`;
panorama.add(infospot2);

//ZONA3 SALIDA DE EMERGENCIA
var infospot3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot3 = new PANOLENS.Infospot(60, 'imagenes/icono1.png');
infospot3.position.set(-442 ,55 , -501);
infospot3.addHoverText('Salida de Emergencias', -40);
infospot3.element.innerHTML = '<div style="background-color: #af141494; color:#fff; border-radius: 5px; padding: 10px; font-size: 30px; width: 200px;  text-align: center;">Salida de Emergencias</div>';
panorama.add(infospot3);

//ZONA4 ARENA
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot4 = new PANOLENS.Infospot(60, 'imagenes/icono2.png');
infospot4.position.set(499 ,-44 , -362);
infospot4.addHoverText('Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.', -60);
infospot4.element.innerHTML = '<div style="background-color: #af141494; color:#fff; border-radius: 5px; padding: 10px; font-size: 25px; width: 200px;  text-align: center;">"Arena" <br> Zona 5 vs 5 para competencias.</div>';
panorama.add(infospot4);

//ZONA5 ZONA ANDÉN
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(348 ,140 , -500);
infospot5.addHoverText('"Zona del Andén" <br> Puerta que conecta con el ánden del mall y de ahí el personal puede ingresar o retirar cosas sin pasar por el público del mall.', -60);
infospot5.element.innerHTML = '<div style="background-color:  #af141494; color:#fff; border-radius: 5px; padding: 10px; font-size: 20px; width: 200px;  text-align: center;"> "Zona del Andén" <br> Puerta que conecta con el ánden del mall y de ahí el personal puede ingresar o retirar cosas sin pasar por el público del mall. </div>';
panorama.add(infospot5);


//ZONA6 ARENA APLAUSOS SONIDO
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot6 = new PANOLENS.Infospot(60, 'imagenes/icono3.png');
infospot6.position.set(29 ,86 , -501);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);


//ZONA7 ZONA AL PÚBLICO
var infospot7 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot7 = new PANOLENS.Infospot(60, 'imagenes/icono4.png');
infospot7.position.set(-501 ,-34 , 146);
infospot7.addHoverText('Zona de juegos para el público.', -60);
infospot7.element.innerHTML = '<div style="background-color: #af141494; color:#fff; border-radius: 5px; padding: 10px; font-size: 20px; width: 200px;  text-align: center;">"Zona Pública". <br> El público tiene la oportunidad de comprar la membresía o comprar cierta cantidad de horas que deseen jugar.</div>';
panorama.add(infospot7);

//  Agrega la panormica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);