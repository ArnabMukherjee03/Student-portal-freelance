"use server";

import {v2 as cloudinary} from 'cloudinary';
import { resolve } from 'path';
          
cloudinary.config({ 
  cloud_name: 'dafq1bcqu', 
  api_key: '817827735835893', 
  api_secret: '72OG2e8arwSWz0OXk8JSFB4IsI0' ,
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
