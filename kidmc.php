<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>músicas</title>
  <link rel="stylesheet" href="Estilos/music.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <script defer src="js/kidmc.js"></script>

  <style>
    header .musicas_lateral::before {

      background: url('Estilos/kidmc.png') no-repeat;
    }
  </style>

</head>

<body>
  <header>
    <div class="menu_lateral"><!--MENU-LATERAL-->
      <h1>Playlist</h1>
      <div class="playlist"> <!--Abrir playlist-->
        <h4 class="active"><span></span> <i class="bi bi-music-note-beamed"></i>PlayList</h4>
        <h4><span></span> <i class="bi bi-music-note-beamed"></i>Mais Tocadas</h4>
        <h4><span></span> <i class="bi bi-music-note-beamed"></i> Recomendadas</h4>
      </div><!--Fechar playlist-->
      <div class="menu_musica"><!--Abrir menu-musicas-->
        <li class="itens_sons">
          <span>01</span>
          <img src="Imagens/telefones/kid-mc01.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
        </li>
        <li class="itens_sons">
          <span>02</span>
          <img src="Imagens/telefones/kid-mc03.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
        </li>
        <li class="itens_sons">
          <span>03</span>
          <img src="Imagens/telefones/kid-mc04.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
        </li>
        <li class="itens_sons">
          <span>04</span>
          <img src="Imagens/telefones/kid-mc05.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
        </li>
        <li class="itens_sons">
          <span>05</span>
          <img src="Imagens/telefones/kid-mc06.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
        </li>
        <li class="itens_sons">
          <span>06</span>
          <img src="Imagens/telefones/kid-mc07.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
        </li>
        <li class="itens_sons">
          <span>07</span>
          <img src="Imagens/telefones/kid-mc11.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
        </li>
        <li class="itens_sons">
          <span>08</span>
          <img src="Imagens/telefones/kid-mc10.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
        </li>
        <li class="itens_sons">
          <span>09</span>
          <img src="Imagens/telefones/kid-mc12.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
        </li>
        <li class="itens_sons">
          <span>10</span>
          <img src="Imagens/telefones/kid-mc13.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
        </li>
        <li class="itens_sons">
          <span>11</span>
          <img src="Imagens/telefones/kid-mc14.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="11"></i>
        </li>
        <li class="itens_sons">
          <span>12</span>
          <img src="Imagens/telefones/kid-mc15.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="12"></i>
        </li>
        <li class="itens_sons">
          <span>13</span>
          <img src="Imagens/telefones/kid-mc16.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="13"></i>
        </li>
        <li class="itens_sons">
          <span>14</span>
          <img src="Imagens/telefones/kid-mc17.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="14"></i>
        </li>
        <li class="itens_sons">
          <span>15</span>
          <img src="Imagens/telefones/kid-mc18.jpg" alt="">
          <h5>On My Way <br>
            <div class="subtitulo">Kid-Mc</div>
          </h5>
          <i class="bi playListPlay bi-play-circle-fill" id="15"></i>
        </li>
      </div><!--Fechamento do menu-musicas-->
    </div><!--Fechamento do menu lateral -->
    <div class="musicas_lateral"><!--Abrir musicas laterais-->
      <nav><!--Abrir a nav-->
        <ul>
          <li>Página Inicial <span></span></li>
          <li>Albuns</li>
          <li>Videos-Clips</li>
        </ul>
        <div class="pesquisar">
          <i class=" bi bi-search"></i>
          <input type="text" name="" id="" placeholder="Pesquise a música...">

        </div>
        <div class="usuario">
          <img src="Imagens/telefones/logo.jpg" alt="logo-tipo-Kid-Mc">
        </div>
      </nav><!--Fechar a Nav-->
      <div class="content"><!--Abrir Content-->
        <h1>Saga Não Para</h1>
        <p>A saga não pára Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iure <br> excepturi molestiae
          ratione non facilis fugit labore perspiciatis ea dignissimos magnam mollitia <br> laudantium unde qui
          similique aliquam odit! Quasi, sed!</p>
        <div class="botoes">
          <button>TOCAR</button>
          <button>FOLLOW</button>
        </div>
      </div> <!--Fechar content-->
      <div class="musicas_populares"><!--Abrir musicas Populares-->
        <div class="h4"><!--Abrir H4-->
          <h4>Músicas Populares</h4>
          <div class="btn_s">
            <i class="bi bi-arrow-left-short" id="musicas_populares_recuar"></i>
            <i class="bi bi-arrow-right-short" id="musicas_populares_avancar"></i>
          </div>
        </div><!--Fechar H4-->
        <div class="pop_musicas"><!---Abrir pop_musicas-->
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/1.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="16"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="17"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="18"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="19"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="20"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="21"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="22"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>
          <li class="itens_sons">
            <div class="img_play">
              <img src="Imagens/telefones/kid-mc01.jpg" alt="">
              <i class="bi playListPlay bi-play-circle-fill" id="23"></i>
            </div>
            <h5>On My away <br>
              <div class="subtitulo">Kid-Mc</div>
            </h5>
          </li>

          <!--Aumentando musicas nessse espaco (li)-->
        </div><!--Fechar pop_musicas-->



      </div><!--Fechamento das musicas populares-->
      <div class="artistas_populares">
        <div class="h4"><!--Abrir H4-->
          <h4>Artistas Populares</h4>
          <div class="btn_s">
            <i class="bi bi-arrow-left-short" id="artistas_populares_recuar"></i>
            <i class="bi bi-arrow-right-short" id="artistas_populares_avancar"></i>
          </div>
        </div><!--Fechar H4-->
        <div class="item artistas_bx"><!--Abrir item/musicas populares/imagens redondas-->
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>
          <li>
            <img src="Imagens/telefones/1.jpg" alt="">
          </li>

        </div><!--Fechar item/musicas populares/imagens redondas-->
      </div>
    </div><!--Fechar musicas Laterais-->


    <div class="melhores_musicas"><!--mELHORES mUSICAS-->

      <div class="wave" id="wave"><!--Abrir Wave-->
        <div class="wave1"></div>
        <div class="wave1"></div>
        <div class="wave1"></div>
      </div><!--Fechar wave-->
      <img src="Imagens/telefones/10.jpg" alt="" id="poster_melhores_musicas">
      <h5 id="titulo">
        Incorrigível
        <div class="subtitulo">Permanência</div>
      </h5>
      <div class="icones"><!--Abrir icones-->
        <i class="bi shuffle bi-music-note-beamed">next</i>
        <i class="bi bi-skip-start-fill" id="voltar"></i>
        <i class="bi bi-play-fill" id="melhoresmusicas"></i>
        <i class="bi bi-skip-end-fill" id="proximo"></i>
        <a href="" download id="download_musica"> <i class="bi bi-cloud-arrow-down-fill"></i></a>
      </div><!--Fechar icones-->
      <span id="currentStart">0:00</span>
      <div class="barra_progresso"><!--ABRIR BARRA DE PROGRESSO-MUSICA-->
        <input type="range" id="seek" min="0" max="100">
        <div class="barra_progresso2" id="bar2"></div>
        <div class="dot"></div>
      </div><!--FECHAR BARRA DE PROGRESSO-MUSICA-->
      <span id="currentFim">0:30</span>
      <div class="volume"><!--Abrir volume-->
        <i class="bi bi-volume-up-fill" id="icone_volume"></i>
        <input type="range" min="0" max="100" id="volume">
        <div class="volume_progresso"></div>
        <div class="dot" id="volume_dot"></div>
      </div><!--Fechar volume-->
    </div><!--Fechar melhores musicas-->

  </header>

</body>

</html>