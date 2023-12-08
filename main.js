let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d678a4;">Estudio Ingeniería biomédica. Me gusta la ciencia y la programación!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
