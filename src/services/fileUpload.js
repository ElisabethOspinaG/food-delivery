import cloudinary from 'cloudinary';


export const fileUpLoad = async (file) => {
  cloudinary.config({ 
    cloud_name: 'dar9uwn3r', 
    api_key: '297533297429483', 
    api_secret: 'yuBP5OT63RxmcdbFLtuBqqTshrw' 
  });
    const cloudName = "dspyfujx0";
    const uploadPreset = "test-cloudinary";
  
    const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);
  
    try {
      const resp = await fetch(urlCloudinary, {
        method: "post",
        body: formData,
      });
  
      if (!resp.ok) return null;
  
      const data = await resp.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  