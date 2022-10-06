import {BASE_URL} from '../constants'

export async function baseApi(route,method,data) {
    console.log('BASE_URL',BASE_URL)
    console.log("body", data)
    return await fetch(`${BASE_URL}${route}`, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      });
   
}

