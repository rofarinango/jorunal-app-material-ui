const cloud_name = import.meta.env.VITE_CLOUD_NAME

export const fileUpload = async( file ) => {
    // if( !file ) throw new Error('No tenemos ningun archivo a subir');
    if( !file ) return null;
    const cloudURL = 'https://api.cloudinary.com/v1_1/'+cloud_name+'/image/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        if( !resp.ok ) throw new Error('No se pudo subir imagen');

        const cloudResp = await resp.json();

        
        return cloudResp.secure_url;
        
    } catch (error) {
        return null;
    }
}