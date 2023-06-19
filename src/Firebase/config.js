import cloudinary from 'cloudinary';

// Configura Cloudinary con tus credenciales
cloudinary.config({
  cloud_name: 'srs0on30',
  api_key: 'T297533297429483',
  api_secret: 'yuBP5OT63RxmcdbFLtuBqqTshrw'
});

// Ruta local de la imagen que deseas subir
const imagePath = '../src/assets/pagina_restaurante/Img (1).png';

// Subir la imagen a Cloudinary
cloudinary.uploader.upload(imagePath, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    // Obtener la URL de la imagen subida
    const imageUrl = result.secure_url;
    console.log('URL de la imagen subida:', imageUrl);
  }
});
