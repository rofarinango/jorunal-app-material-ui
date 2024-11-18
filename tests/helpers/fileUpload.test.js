import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: import.meta.env.VITE_CLOUD_NAME,
    api_key: import.meta.env.VITE_API_KEY,
    api_secret: import.meta.env.VITE_API_SECRET,
    secure: true
})

describe('Pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageURL = 'https://zenfolio.com/wp-content/uploads/2022/09/professional-landscape-guide.jpg';

        const resp = await fetch( imageURL );        
        const blob = await resp.blob();
        console.log({resp});
        
        console.log(blob);

        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload( file );

        console.log(url);
        
        expect( typeof url).toBe('string');

        const segments = url.split('/');
        console.log(segments);
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        console.log({cloudResp});
        
        
     });

     test('debe de retornar null', async() => { 
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe(null);
      })
 });