import { LitElement, html} from "lit-element";
import stylesScss from './main-content-componentStyle';


export class Main extends LitElement{
  render() {
      return html `

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  <div>
      <div class="row h-100">
          <div class="col-6 text-white text-center mt-5 mb-5">
              <img src="./img/1Even.png" alt="">
              <h2 class="text-dark">Crea, sueña, realizalo</h2>
              <button type="button" class="btn btn-warning text-dark">CONOCENOS</button>
          </div>
          <div class="col-6 bg-secondary text-white text-center d-flex flex-column justify-content-center">
              <h2>YA ERES CLIENTE?</h2>
              <button type="button" class="btn btn-warning text-dark w-50 h-2 mx-auto rounded-lg">INGRESA</button>
          </div>
      </div>
  </div>

  <br>
  <br>
  <br>

  <center>
      <h1>Expertos en eventos</h1>
  </center>
  <center>
      <hr width="50%" align="right" size="20">
  </center>

  <br>
  <br>
  <br>

  <div class="container">
      <div class="row">

          <div class="col">
              <div class="card" style="width: 15rem max-content;">
                  <div class="card-body">
                      <h5 class="card-title">Salon Amarillo</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Salon Amarillo</h6>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sed vitae totam minima animi eius. Fuga ipsum porro obcaecati voluptas repudiandae, atque minima, perspiciatis reprehenderit deleniti consequuntur quasi excepturi aspernatur!</p>
                      <button type="button" class="btn btn-warning text-dark w-50 h-2 mx-auto rounded-lg">Mas info</button>

                  </div>
              </div>
          </div>

          <div class="col">
              <div class="card" style="width: 15rem max-content;">
                  <div class="card-body">
                      <h5 class="card-title">Salon Amarillo</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Salon Amarillo</h6>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quia! Blanditiis velit molestiae voluptates possimus praesentium alias! Architecto dignissimos ea animi necessitatibus ipsa corporis ipsam labore dolorem! Omnis, culpa voluptates.</p>
                      <button type="button" class="btn btn-warning text-dark w-50 h-2 mx-auto rounded-lg">Mas info</button>
                  </div>
              </div>
          </div>

          <div class="col">
              <div class="card" style="width: 15rem max-content;">
                  <div class="card-body">
                      <h5 class="card-title">Salon Amarillo</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Salon Amarillo</h6>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit consectetur ad voluptates praesentium, voluptatem magni atque excepturi corporis ea! Voluptate adipisci soluta blanditiis at repudiandae doloribus molestias culpa ratione.</p>
                      <button type="button" class="btn btn-warning text-dark w-50 h-2 mx-auto rounded-lg">Mas info</button>
                  </div>
              </div>
          </div>

      </div>
  </div>

  <br>
  <br>
  <br>

  
      <div class="row h-100" style="border: solid 1px background black ;">
          <div class="col-6 text-white text-center mt-5 mb-5">
              <img src="./img/coferencia.png" alt="">
          </div>
          <div class="col-6 text-white text-center d-flex flex-column justify-content-center">
              <center>
                  <div class="card2" style="width: 18rem ;">
                      <img src="./img/Bienvenido.png" class="card-img-top" alt="...">

                      <div class="card-body">
                          <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quo delectus omnis vero nihil dolorum deleniti similique, doloremque numquam ut quis consectetur cupiditate molestiae est quasi beatae consequatur, magni eos.
                          </p>
                      </div>
                  </div>
              </center>
          </div>
      </div>
  </div>
  <br>
      <br>
          <br>
  <center>
      <h1>Expertos en eventos</h1>
      <hr width="50%" align="right" size="20">
  </center>
 
  <div>
      <div class="row h-100">
          <div class="col-6 text-white text-center mt-5 mb-5">
              <center>
              <header> 
                  <header class="contenedor"> 
                      <div class="logo"><img src="./img/persona.jpg" alt="Imagen"></div> 
                      <br>
                      <center><h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5></center>
                  </header> 
              </center>
              
          </div>
          <div class="col-6 text-white text-center mt-5 mb-5"">
              <center>
              <header> 
                  <header class="contenedor"> 
                      <div class="logo"><img src="./img/persona.jpg" alt="Imagen"></div> 
                      <br>
                         
                      <center><h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5></center>
                     

                  </header>
              </center>
          </div>
      </div>
  </div>`
  }

  static get styles(){
    return [stylesScss]
  }
}

customElements.define("main-content-component", Main)