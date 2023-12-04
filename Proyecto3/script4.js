// function obtenerYReproducirVideo() {
//   const apiKey = '640a1b8b6dmsh8b13dce9386e3c4p14c2acjsn513e09bc4ad9'; // Reemplaza con tu clave de API de YouTube v3
//   const videoId = 'wLCN-u9juVs'; // Reemplaza con el ID del video de YouTube que desees mostrar
//   const apiUrl = `https://youtube-v31.p.rapidapi.com/videoInfo?video_id=${videoId}`;
//   const videoPlayer = document.getElementById('video-player');

//   fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
//       'x-rapidapi-key': apiKey
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

//       // Ocultar el reproductor después de 13 minutos y 10 segundos (790 segundos)
//       setTimeout(() => {
//         document.getElementById('video-container').style.display = 'none';
//       }, 790000); // 790 segundos en milisegundos
//     })
//     .catch(error => {
//       console.error('Error al obtener datos:', error);
//     });
// }

function obtenerContenidoFitness() {
  const apiKey = '640a1b8b6dmsh8b13dce9386e3c4p14c2acjsn513e09bc4ad9'; // Reemplaza con tu clave de API de RapidAPI
  const apiUrl = 'https://fitness-content1.p.rapidapi.com/v1/workouts/%7BworkoutId%7D/playlist'; // Reemplaza con la URL de la API de contenido de fitness

  $.ajax({
    url: apiUrl,
    type: 'GET',
    headers: {
      'x-rapidapi-host': 'fitness-content1.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    },
    success: function(data) {
      // Manejo de la respuesta de la API
      mostrarDatos(data);
    },
    error: function(error) {
      console.error('Error al obtener datos:', error);
    }
  });
}

function mostrarDatos(data) {
  const resultadoDiv = document.getElementById('resultado-api');
  // Muestra los datos obtenidos en el contenedor
  resultadoDiv.innerHTML = JSON.stringify(data, null, 2);
}
