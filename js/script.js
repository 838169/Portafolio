// Inicializa EmailJS con tu userID
(function() {
  emailjs.init('RVt34sDSeGMt3RSrE');  // Reemplaza con tu User ID de EmailJS
})();

document.getElementById('send-btn').addEventListener('click', function(e) {
  e.preventDefault();  // Evita el comportamiento por defecto del botón

  // Obtener los valores del formulario
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validación básica para asegurarse de que los campos no estén vacíos
  if (!name || !email || !message) {
      // Mensaje de advertencia por campos vacíos
      swal({
        title: "Advertencia",
        text: "Por favor, rellena todos los campos.",
        icon: "warning",  
        button: {
          text: "Entendido",
          className: "custom-btn"
        }
      });
      return;
  }

  // Validación del formato del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|co|info|io|me|biz|us)$/i; // Extensiones válidas
  if (!emailPattern.test(email)) {
      // Mensaje de advertencia por formato de correo inválido
      swal({
        title: "Advertencia",
        text: "Por favor, introduce un correo electrónico válido que termine en .com, .net, .org, o similar.",
        icon: "warning",
        button: {
          text: "Entendido",
          className: "custom-btn"
        }
       
      });
      return;
  }

  // Parámetros que se enviarán al servicio de EmailJS
  const params = {
      name: name,
      email: email,
      message: message
  };

  // Deshabilitar el botón para evitar múltiples envíos
  const sendButton = document.getElementById('send-btn');
  sendButton.disabled = true;
  sendButton.textContent = "Enviando..."; 

  // Enviar el correo utilizando EmailJS
  emailjs.send('service_d3f1uso', 'template_c08hivc', params)
      .then(function(response) {
          swal("¡Mensaje enviado!", "¡El mensaje se ha enviado con éxito!", "success");
          // Limpia los campos del formulario
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          sendButton.disabled = false; 
          sendButton.textContent = "Enviar Mensaje"; 
      }, function(error) {
          
          swal({
            title: "Error",
            text: "Error al enviar este mensaje. Inténtalo más tarde.",
            icon: "error",  
            button: {
              text: "Entendido",
              className: "custom-btn"
            }
          });
          console.log('Error: ', error);
          sendButton.disabled = false; 
          sendButton.textContent = "Enviar Mensaje"; 
      });
});

/*Typing animation*/
var typed = new Typed('.typing',{
  strings:['','desarrollador en formación', 'apacionado de la tecnología', 'aprendiz en bases de datos', 'aprendiz en desarrollo web'],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})

/*Aside*/
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){
      const a = navList[i].querySelector('a');
      a.addEventListener('click', function(){
          removeBackSection();
          for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector('a').classList.contains('active')){
              addBackSection(j);
              //allSection[j].classList.add('back-section')
            }
            navList[j].querySelector('a').classList.remove('active');
          }
          this.classList.add('active')
          showSection(this);
          if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
          }
      })
    }
    function removeBackSection(){
      for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove('back-section');
      }
    }
    function addBackSection(num){
      allSection[num].classList.add('back-section')
    }
    function showSection(element){
      for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove('active');
      }
      const target = element.getAttribute('href').split('#')[1];
      document.querySelector('#' + target).classList.add('active');
    }
    function updateNav(element){
      for(let i=0; i<totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
          navList[i].querySelector('a').classList.add('active');
        }
      }
    }
    document.querySelector('.hire-me').addEventListener('click', function(){
      const sectionIndex = this.getAttribute('data-section-index');
      
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');
      navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn(){
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for(let i=0; i<totalSection; i++){
          allSection[i].classList.toggle('open');
        }
      }