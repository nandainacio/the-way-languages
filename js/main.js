const cep = document.querySelector("#cep");
const shoWData = (result)=>{ 
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
    

cep.addEventListener("blur", (event)=>{
    let buscaCep = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${buscaCep}/json/`, options)
    .then(response=>{ response.json()
        .then(data => shoWData(data))})
    .catch(error => console.log("Deu erro..." + error, message))
    
})

function cadastrar(){
    document.write("Cadastro realizado")
}