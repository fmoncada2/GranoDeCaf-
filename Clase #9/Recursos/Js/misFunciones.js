// Boton Toggle
$(document).ready(function()
{
     //Arreglo para la lista de tarjetas
     let listadoTarjetas = [{'tit': 'Café molido',
     'srcIni' : 'Recursos/Imagenes/cafe_molido.png',
    'srcFin': 'Recursos/Imagenes/molido_mini.jpg' }, 
    {'tit':'Capuchino',
    'srcIni' : 'Recursos/Imagenes/capuchino.png' ,
    'srcFin': 'Recursos/Imagenes/capuchino_mini.png'}, 
    {'tit': 'Café Mocca',
    'srcIni' : 'Recursos/Imagenes/cafe_mocca.jpg',
    'srcFin': 'Recursos/Imagenes/mocca_mini.png' }, 
    {'tit': 'Bebida',
    'srcIni' : 'Recursos/Imagenes/cafe_bebida.png',
    'srcFin': 'Recursos/Imagenes/cafe_bebida_mini.png'}, 
    {'tit': 'Café Negro',
    'srcIni' : 'Recursos/Imagenes/cafe_negro.jpg',
    'srcFin': 'Recursos/Imagenes/cafe_negro_mini.png'}];

for (let i=0; i < listadoTarjetas.length; i++){

let imagenIni = listadoTarjetas[i].srcIni;
let titArticle = listadoTarjetas[i].tit;

let textoHtml = '<article class=\"miTarjeta\">' +
 '<figure> ' +
 '<img src=\"' + imagenIni + '\" alt=\"\">' +
'<figcaption>' + titArticle + '</figcaption> ' +
 '</figure> ' +
' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
'</article>  ';

$('#listaTarjetas').append(textoHtml);
}
    let anchoPantalla = window.innerWidth;
    patallaPeque(anchoPantalla,  listadoTarjetas);



$("#boton").on( "click", function() {	 
    $('#Opciones').toggle();
     });

     // Ocultar el boton con dependencia al ancho de pantalla

     $(window).resize(function (){
        let anchoPantalla = window.innerWidth;

        let arreglo = [{'tit': 'Café molido',
     'srcIni' : 'Recursos/Imagenes/cafe_molido.png',
    'srcFin': 'Recursos/Imagenes/molido_mini.jpg' }, 
    {'tit':'Capuchino',
    'srcIni' : 'Recursos/Imagenes/capuchino.png' ,
    'srcFin': 'Recursos/Imagenes/capuchino_mini.png'}, 
    {'tit': 'Café Mocca',
    'srcIni' : 'Recursos/Imagenes/cafe_mocca.jpg',
    'srcFin': 'Recursos/Imagenes/mocca_mini.png' }, 
    {'tit': 'Bebida',
    'srcIni' : 'Recursos/Imagenes/cafe_bebida.png',
    'srcFin': 'Recursos/Imagenes/cafe_bebida_mini.png'}, 
    {'tit': 'Café Negro',
    'srcIni' : 'Recursos/Imagenes/cafe_negro.jpg',
    'srcFin': 'Recursos/Imagenes/cafe_negro_mini.png'}];

       // console.log  ('en ri'+ arreglo.length);
        patallaPeque(anchoPantalla, arreglo);

    });
});

function patallaPeque(anchoPantalla, listadoTarjetas){
    if (anchoPantalla < 920) {
        $('#boton').show();
        $('#Opciones').removeClass('horizontal');
        $('#Opciones').addClass("vertical");
        $('#img').hide();
        $('main').removeClass('fondoImg2');
        $('main').addClass("fondoImg");
        $('#listaTarjetas article p').hide();


        for (let i=0; i< listadoTarjetas.length; i++){

            let imagenIni = listadoTarjetas[i].srcFin;
            console.log  (imagenIni);
            var indexCss = i+1;
            $('.miTarjeta:nth-child(' + indexCss + ') img').attr('src', imagenIni);
            }
    


    } else{
        $('#boton').hide();
        $('#Opciones').removeClass('vertical');
        $('#Opciones').addClass("horizontal");
        $('#img').show();
        $('main').removeClass('fondoImg');
        $('main').addClass("fondoImg2");
        $('#listaTarjetas article p').show();


        for (let i=0; i< listadoTarjetas.length; i++){

            let imagenIni = listadoTarjetas[i].srcIni;
            console.log  (imagenIni);
            var indexCss = i+1;
            $('.miTarjeta:nth-child(' + indexCss + ') img').attr('src', imagenIni);
            }
    
    }


}
