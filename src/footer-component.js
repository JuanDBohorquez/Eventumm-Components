import { LitElement, html } from "lit-element";


export class Footer extends LitElement{
  render() {
      return html `
      
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
      
      <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        <img src="./img/footer.png" alt="">
        <a class="text-white" href="">
      </div>
    </footer>`
  }
}

customElements.define("footer-component", Footer)