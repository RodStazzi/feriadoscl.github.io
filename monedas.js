document.querySelector('#feriadoscl').addEventListener('click', function(){
obtenerDatos();

})

function obtenerDatos(){
console.log('diste click');

    let url = `https://www.feriadosapp.com/api/holidays.json`

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4) {
            
            let datos = JSON.parse(this.responseText);
            console.log(datos.data);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            for(let item of datos.data){
                resultado.innerHTML += `<tr>
                                        <td>${item.date}</td>
                                        <td>${item.title}</td>
                                        </tr>`

            }

        }
    }

}