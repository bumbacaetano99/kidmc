const musica = new Audio('audio/1.mp3')
//musica.play()
/**Adicionando musicas */
const musicas = [
    {
        id: 1,
        nomeMusica: `KID MC & DJ Caique - Oração
        <div class="subtitulo">Kid-Mc ft DJ Caique</div>`,
        poster: "Imagens/telefones/kidmc/1.jpg"

    },
    {
        id: 2,
        nomeMusica: `ADRENALINA
        <div class="subtitulo">KID MC-TÁLI- LUSO</div>`,
        poster: "Imagens/telefones/kidmc/2.jpg"
        //Mudar titulo + tarde//
    },
    {
        id: 3,
        nomeMusica: `Kid_MC_-_Atitude_e_Flavour
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/3.jpg"

    },
    {
        id: 4,
        nomeMusica: `Kid_Mc_-_Furiosidade_ft_Extremo_Signo
        <div class="subtitulo">Kid_Mc ft Extremo</div>`,
        poster: "Imagens/telefones/kidmc/4.jpg"

    },
    {
        id: 5,
        nomeMusica: `Kid_MC_-_Know_How
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/5.jpg"

    },
    {
        id: 6,
        nomeMusica: `O Incorrigível
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/6.jpg"

    },
    {
        id: 7,
        nomeMusica: `O Regresso De Quem Nunca Foi
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/7.jpg"

    },
    {
        id: 8,
        nomeMusica: `COMBINAÇÃO MORTIFEIRA
        <div class="subtitulo">KID-MC FT Azagaia e Izlo H</div>`,
        poster: "Imagens/telefones/kidmc/8.jpg"

    },
    {
        id: 9,
        nomeMusica: `CONFRONTO DE TITÂS
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/9.jpg"

    },
    {
        id: 10,
        nomeMusica: `LINHAS PARALELAS
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/10.jpg"

    },
    {
        id: 11,
        nomeMusica: `MAIS UM
        <div class="subtitulo">KID-MC FT DITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/11.jpg"

    },
    {
        id: 12,
        nomeMusica: `DUVIDO
        <div class="subtitulo">KID-MC FT DITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/12.jpg"

    },
    {
        id: 13,
        nomeMusica: `DEVAGAR
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/13.jpg"

    },
    {
        id: 14,
        nomeMusica: `RESGATE CULTURAL
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/14.jpg"

    },
    {
        id: 15,
        nomeMusica: `Dj Caique, Facção Central e KId MC - Conexão Mestria (Prod. Dj Caique)
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/15.jpg"

    },
    {
        id: 16,
        nomeMusica: `A VOZ DA RAZÃO
        <div class="subtitulo">KID-MC FT DJITAFINHA</div>`,
        poster: "Imagens/telefones/kidmc/16.jpg"

    },
    {
        id: 17,
        nomeMusica: `INFECÇÃO
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/23.jpg"

    },
    {
        id: 18,
        nomeMusica: `PERCEPÇÃO
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/18.jpg"

    },
    {
        id: 19,
        nomeMusica: `Angolas Diferentes
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/19.jpg"

    },
    {
        id: 20,
        nomeMusica: `
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/20.jpg"

    },
    {
        id: 21,
        nomeMusica: `A Saga Não Pára
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/21.jpg"

    },
    {
        id: 22,
        nomeMusica: `O Último Homem
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/22.jpg"

    },
    {
        id: 23,
        nomeMusica: `Reeducaçao
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/23.jpg"

    },
    {
        id: 24,
        nomeMusica: `Caminhos
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/24.jpg"

    },
    {
        id: 25,
        nomeMusica: `Carga Inicial
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/25.jpg"

    },
    {
        id: 26,
        nomeMusica: `Educaçao Barata
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/26.jpg"

    },
    {
        id: 27,
        nomeMusica: `Vai Com Calma
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/27.jpg"

    },
    {
        id: 28,
        nomeMusica: `O KID
        <div class="subtitulo">KID-MC</div>`,
        poster: "Imagens/telefones/kidmc/28.jpg"

    },
]
/**Finalizando adição das músicas */

Array.from(document.getElementsByClassName('itens_sons')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = musicas[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = musicas[i].nomeMusica

})
/**Função de tocar e pausar a musica/Equalizador */
let melhoresmusicas = document.getElementById('melhoresmusicas')
let wave = document.getElementById('wave')

melhoresmusicas.addEventListener('click', () => {
    if (musica.paused || musica.currentTime <= 0) {
        musica.play()
        wave.classList.add('active1')
        melhoresmusicas.classList.remove('bi-play-fill')
        melhoresmusicas.classList.add('bi-pause-fill')


    } else {
        musica.pause()
        wave.classList.remove('active1')
        melhoresmusicas.classList.add('bi-play-fill')/**Adicionando e remover play e pause */
        melhoresmusicas.classList.remove('bi-pause-fill')
    }
})
/**Fim da Função de tocar e pausar a musica */
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1) => {
        e1.classList.add('bi-play-circle-fill')/**Adicionando e remover play e pause */
        e1.classList.remove('bi-pause-circle-fill')
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1) => {
        e1.style.background = 'rgb(105, 105, 105, .0)'
    })
}

// Funcao procurar musicas//
let index = 0
let poster_melhores_musicas = document.getElementById('poster_melhores_musicas')
let download_musica = document.getElementById('download_musica')
let titulo = document.getElementById('titulo')


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (e1) => {
        let index = e1.target.id
        //console.log(index)
        musica.src = `audio/${index}.mp3`//Colocar(poster) e procurar musicas//
        poster_melhores_musicas.src = `Imagens/telefones/kidmc/${index}.jpg`
        musica.play()
        melhoresmusicas.classList.remove('bi-play-fill')
        melhoresmusicas.classList.add('bi-pause-fill')
        download_musica.href = `audio/kidmc/${index}.mp3`//Baixar Musicas//
        let TitulosMusicas = musicas.filter((els) => {
            return els.id == index
        })
        TitulosMusicas.forEach(elss => {
            let { nomeMusica } = elss
            titulo.innerHTML = nomeMusica
            // poster_melhores_musicas.src= poster
            download_musica.setAttribute('download', nomeMusica);

        })

        makeAllBackground()
        Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
        makeAllplays()
        e1.target.classList.remove('bi-play-circle-fill')
        e1.target.classList.add('bi-pause-circle-fill')
        wave.classList.add('active1')

    })

})
//Fim procurar musicas//
//FUNÇÃO DURAÇÃO DA MÚSICA//

//Declaracao das variaveis//
let currentStart = document.getElementById('currentStart')
let currentFim = document.getElementById('currentFim')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]
//Fim da declaração das variaveis//

musica.addEventListener('timeupdate', () => {
    let musica_curr = musica.currentTime
    let musica_dur = musica.duration

    let min1 = Math.floor(musica_dur / 60)
    let seg1 = Math.floor(musica_dur % 60)
    //console.log(min1)
    if (seg1 < 10) {
        seg1 = `0${seg1}`
    }
    currentFim.innerText = `${min1}:${seg1}`

    let min2 = Math.floor(musica_curr / 60)
    let seg2 = Math.floor(musica_curr % 60)

    if (seg2 < 10) {
        seg2 = `0${seg2}`
    }

    currentStart.innerText = `${min2}:${seg2}`
    //**Progresso da musica */
    let barraprogresso = parseInt((musica_curr / musica_dur) * 100)
    seek.value = barraprogresso
    //console.log(seek.value)
    let seekbarra = seek.value
    bar2.style.width = `${seekbarra}%`;
    dot.style.left = `${seekbarra}%`

    //Fim do progresso da musica//
})
seek.addEventListener('change', () => {
    musica.currentTime = seek.value * musica.duration / 100
})

//Função volume//
let icone_volume = document.getElementById('icone_volume')
let volume = document.getElementById('volume')
let volume_progresso = document.getElementsByClassName('volume_progresso')[0]
let volume_dot = document.getElementById('volume_dot')

volume.addEventListener('change', () => {
    if (volume.value == 0) {
        icone_volume.classList.remove('bi-volume-up-fill')
        icone_volume.classList.remove('bi-volume-down-fill')
        icone_volume.classList.add('bi-volume-off-fill')
    }
    if (volume.value > 0) {
        icone_volume.classList.remove('bi-volume-up-fill')
        icone_volume.classList.add('bi-volume-down-fill')
        icone_volume.classList.remove('bi-volume-off-fill')
    }
    if (volume.value > 50) {
        icone_volume.classList.add('bi-volume-up-fill')
        icone_volume.classList.remove('bi-volume-down-fill')
        icone_volume.classList.remove('bi-volume-off-fill')
    }
    let volume_a = volume.value
    volume_progresso.style.width = `${volume_a}%`
    volume_dot.style.left = `${volume_a}%`
    musica.volume = volume_a / 100
})

//Fim da função Volume//
/**Funcao proxima-voltar musica */
let voltar = document.getElementById('voltar')
let proximo = document.getElementById('proximo')


voltar.addEventListener('click', () => {
    index -= 1
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('itens_sons')).length

    }
    musica.src = `audio/kidmc/${index}.mp3`//Colocar(poster) e procurar musicas//
    poster_melhores_musicas.src = `Imagens/telefones/kidmc/${index}.jpg`
    musica.play()
    melhoresmusicas.classList.remove('bi-play-fill')
    melhoresmusicas.classList.add('bi-pause-fill')



    let TitulosMusicas = musicas.filter((els) => {
        return els.id == index
    })
    TitulosMusicas.forEach(elss => {
        let { nomeMusica } = elss
        titulo.innerHTML = nomeMusica
        // poster_melhores_musicas.src= poster

    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
    makeAllplays()
    e1.target.classList.remove('bi-play-circle-fill')
    e1.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')

})
proximo.addEventListener('click', () => {
    index++
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('itens_sons')).length
        index = 1

    }
    musica.src = `audio/kidmc/${index}.mp3`//Colocar(poster) e procurar musicas//
    poster_melhores_musicas.src = `Imagens/telefones/kidmc/${index}.jpg`
    musica.play()
    melhoresmusicas.classList.remove('bi-play-fill')
    melhoresmusicas.classList.add('bi-pause-fill')



    let TitulosMusicas = musicas.filter((els) => {
        return els.id == index
    })
    TitulosMusicas.forEach(elss => {
        let { nomeMusica } = elss
        titulo.innerHTML = nomeMusica
        // poster_melhores_musicas.src= poster

    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
    makeAllplays()
    e1.target.classList.remove('bi-play-circle-fill')
    e1.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')
})

/**FIM Funcao proxima-voltar musica */

//FIM DURAÇÃO DA MÚSICA//

/**Função das setas <- -> avancar recuar */
let musicas_populares_recuar = document.getElementById('musicas_populares_recuar')
let musicas_populares_avancar = document.getElementById('musicas_populares_avancar')
let pop_musicas = document.getElementsByClassName('pop_musicas')[0]


musicas_populares_avancar.addEventListener('click', () => {
    pop_musicas.scrollLeft += 330
})
musicas_populares_recuar.addEventListener('click', () => {
    pop_musicas.scrollLeft -= 330
})
/**Fim das setas */
/**Função das setas <- -> avancar recuar */
let artistas_populares_recuar = document.getElementById('artistas_populares_recuar')
let artistas_populares_avancar = document.getElementById('artistas_populares_avancar')
let artistas_bx = document.getElementsByClassName('artistas_bx')[0]
artistas_populares_avancar.addEventListener('click', () => {
    artistas_bx.scrollLeft += 330
})
artistas_populares_recuar.addEventListener('click', () => {
    artistas_bx.scrollLeft -= 330
})
/**Fim das setas */
/**Fim das setas */
/**Funçao de random, next e repetição */
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});
/**Fim da Funçao de random, next e repetição */

const prox_musica = () => {
    if (index == musicas.length) {
        index = 1

    } else {
        index++

    }
    musica.src = `audio/${index}.mp3`//Colocar(poster) e procurar musicas//
    poster_melhores_musicas.src = `Imagens/telefones/${index}.jpg`
    musica.play()
    melhoresmusicas.classList.remove('bi-play-fill')
    melhoresmusicas.classList.add('bi-pause-fill')
    download_musica.href = `audio/${index}.mp3`//Baixar Musicas//
    let TitulosMusicas = musicas.filter((els) => {
        return els.id == index
    })
    TitulosMusicas.forEach(elss => {
        let { nomeMusica } = elss
        titulo.innerHTML = nomeMusica
        // poster_melhores_musicas.src= poster
        download_musica.setAttribute('download', nomeMusica);

    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
    makeAllplays()
    e1.target.classList.remove('bi-play-circle-fill')
    e1.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')
}
const repeat_musica = () => {
    index
    musica.src = `audio/${index}.mp3`//Colocar(poster) e procurar musicas//
    poster_melhores_musicas.src = `Imagens/telefones/${index}.jpg`
    musica.play()
    melhoresmusicas.classList.remove('bi-play-fill')
    melhoresmusicas.classList.add('bi-pause-fill')
    download_musica.href = `audio/kidmc/${index}.mp3`//Baixar Musicas//
    let TitulosMusicas = musicas.filter((els) => {
        return els.id == index
    })
    TitulosMusicas.forEach(elss => {
        let { nomeMusica } = elss
        titulo.innerHTML = nomeMusica
        // poster_melhores_musicas.src= poster
        download_musica.setAttribute('download', nomeMusica);

    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
    makeAllplays()
    e1.target.classList.remove('bi-play-circle-fill')
    e1.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')
}
const random_musica = () => {
    if (index == musicas.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * musicas.length) + 1)
    }
    musica.src = `audio/${index}.mp3`//Colocar(poster) e procurar musicas//
    poster_melhores_musicas.src = `Imagens/telefones/${index}.jpg`
    musica.play()
    melhoresmusicas.classList.remove('bi-play-fill')
    melhoresmusicas.classList.add('bi-pause-fill')
    download_musica.href = `audio/${index}.mp3`//Baixar Musicas//
    let TitulosMusicas = musicas.filter((els) => {
        return els.id == index
    })
    TitulosMusicas.forEach(elss => {
        let { nomeMusica } = elss
        titulo.innerHTML = nomeMusica
        // poster_melhores_musicas.src= poster
        download_musica.setAttribute('download', nomeMusica);

    })

    makeAllBackground()
    Array.from(document.getElementsByClassName('itens_sons'))[index - 1].style.background = 'rgb(105,105,105, .1)'
    makeAllplays()
    e1.target.classList.remove('bi-play-circle-fill')
    e1.target.classList.add('bi-pause-circle-fill')
    wave.classList.add('active1')
}

musica.addEventListener('ended', () => {
    let b = shuffle.innerHTML
    switch (b) {
        case 'repeat':
            repeat_musica()
            break;
        case 'next':
            prox_musica_musica()
            break;
        case 'random':
            random_musica()
            break;
    }


})
