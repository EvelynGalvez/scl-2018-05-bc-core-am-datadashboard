const btnCohort = document.getElementById('btn-cohort');
const botonalumnas = document.getElementById('btn-alumnas');


btnCohort.addEventListener('click', () => {
  document.getElementById('navbar').style.display = 'block';
  document.getElementById('divbtn-alumnas').style.display = 'block'; 
  document.getElementById('btnCohort').style.display = 'none';
  document.getElementById('imgLaboratoria').style.display = 'none';
});
/* 
botonalumnas.addEventListener('click', () => {
  document.getElementById('botonesDeDatos').style.display = 'block';
  
});
*/