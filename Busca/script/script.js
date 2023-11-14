const buscaCat = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText);
                cats.forEach(cat => {
                    const img = document.createElement('img');
                    img.src = cat.url;

                    const info = document.createElement('p');
                    info.textContent = `ID: ${cat.id}, Width: ${cat.width}, Height: ${cat.height}`;

                    const container = document.querySelector("#gatinhos");
                    const cada = document.createElement('div')
                    cada.classList.add("quadro")

                    container.appendChild(cada)
                    cada.appendChild(img);
                    cada.appendChild(info);
                });
            } else {
                alert('Erro na requisição');
            }
        }
    };

    xhr.send();
}

const btnMostrar = document.querySelector("#mostrar-gatinhos");
btnMostrar.addEventListener("click", buscaCat);

const getMarcas = () =>{
    const tarefas = fetch("https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json")
    
    tarefas.then(resposta => resposta.json()).then(marcas => {
        const ul = document.createElement('ul');
        marcas.forEach(marca => {
            const li = document.createElement('li');
            const logo = document.createElement('img');
            logo.src = marca.image ?.optimized;

            const info = document.createElement('p');
            info.textContent = `Nome: ${marca.name}`;

            const container = document.querySelector("#marcas");
            const cada = document.createElement('div')
            cada.classList.add("quadro")

            container.appendChild(cada)
            cada.appendChild(logo);
            cada.appendChild(li);
            cada.appendChild(info);
            console.log(marca);
        })
        document.body.appendChild(ul);
    })
    .catch(erro => console.log(erro))
}

const btnMarcas = document.querySelector("#mostrar-marcas");
btnMarcas.addEventListener("click", getMarcas);
