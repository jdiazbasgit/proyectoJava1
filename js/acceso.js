//sessionStorage.token=""

function getDatos(url,method){
    return new Promise(function (resolve, reject) {
        fetch(url,{method:method,"headers":{"Authorization":sessionStorage.token},"cors":"no-cors"})
          .then(function (response) {
            if (response.ok)
              resolve(response.json())
            else {
              reject(response.status)
              // status: 403 -> no autorizaado >login
              //status 500 -> error de servidor -> intentalo mas tarde
            } 
          }).catch(function (error) {
            console.log(`ERROR ${error}`)
            reject(error);
             //status 500 -> error de servidor -> intentalo mas tarde
          })
      })
}

function getDatos(url,method,dato){
    return new Promise(function (resolve, reject) {
        fetch(url,{"method":method, "body":JSON.stringify(dato),"headers":{"Authorization":sessionStorage.token},"cors":"no-cors"})
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

function getDatosLogin(url,method,dato){
    return new Promise(function (resolve, reject) {
        fetch(url,{"method":method, "body":JSON.stringify(dato),"cors":"no-cors"})
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