function getDatos(url,method){
    return new Promise(function (resolve, reject) {
        fetch(url,{method:method,"headers":{"Authorization":sessionStorage.token}})
          .then(function (response) {
            if (response.ok)
              resolve(response.json())
            else {
              reject(response.status)
            } 
          }).catch(function (error) {
            console.log(`ERROR ${error}`)
            reject(error);
          })
      })
}

function getDatos(url,method,datos){
    return new Promise(function (resolve, reject) {
        fetch(url,{method:method, body:JSON.stringify(datos),"headers":{"Authorization":sessionStorage.token}})
          .then(function (response) {
            if (response.ok)
              resolve(response.json())
            else {
              reject(response.status)
            } 
          }).catch(function (error) {
            console.log(`ERROR ${error}`)
            reject(error);
          })
      })
}