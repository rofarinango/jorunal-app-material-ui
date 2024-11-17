import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en fileUpload', () => { 
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageURL = 'https://www.shutterstock.com/image-photo/raccoon-isolated-on-white-background-260nw-2122117763.jpg';

        const resp = await fetch( imageURL );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload( file );

        console.log(url);
        
        expect( typeof url).toBe('string');
     });
 });