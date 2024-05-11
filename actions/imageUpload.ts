"use server";

import {v2 as cloudinary} from 'cloudinary';

console.log(process.env.CLOUDINARY_API_SECRET)
          
cloudinary.config({ 
  cloud_name: 'dafq1bcqu', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});


export const uploadImage = async (image : any) => {
  try {
     const buffer = new Uint8Array(image)
     const result = await new Promise((resolve,reject)=>{
         cloudinary.uploader.upload_stream({},function(error,result){
            if(error){
                reject(error);
                return;
            }
            resolve(result)
         }).end(buffer)
     })

     return result;
     
  } catch (error) {
    console.log(error);
    throw error;
  }
};
