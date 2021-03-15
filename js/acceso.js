function getDatos(url,datos,metodo){
    return new Promise(function (resolve, reject) {
        fetch(url,{"method":metodo, body:JSON.stringify(datos)})
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