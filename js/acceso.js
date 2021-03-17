function getDatos(url,datos){
    return new Promise(function (resolve, reject) {
        fetch(url,{method:post, body:JSON.stringify(datos)})
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