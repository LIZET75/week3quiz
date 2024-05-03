import React from "react";
import axios from "axios";
import error from "next/error";

async function fetchUserDAta(userId:string) {
    try{
        const response = await axios.get('https://api.testquestion.com/users${userId}');
        console.log("UserData:",response.data);
        return response;

    }catch(error){
        if(error.isAxiosError(error)){
            console.error('Error fetching userdata:',error.message);
        }else{
            console.error('A unexpected error occurred: ',error.config);

        }
        throw error;
        }
    }
