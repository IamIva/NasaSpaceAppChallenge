(function() {
  const form    = document.getElementById('calc-form');
  const results = document.getElementById('results');
  const errors  = document.getElementById('form-error');


  function errorMessage(msg) {
      errors.innerHTML = msg;
      errors.style.display = '';
      return false;
  }


  function showResults(carbon) {
      results.innerHTML = '<p>Your daily carbon emission is: <strong>${(carbon).toFixed(2)} </strong> g.</p><a href="#" id="rs">revise</a>';
    results.style.display = ''
    form.style.display = 'none'
    errors.style.display = 'none'
  }
   function showResults(tree) {
      results.innerHTML = `<p>You should at least grow <strong>${(tree).toFixed(2)} </strong> trees per year.</p>
      <a href="#" id="rs">revise</a>`;
    results.style.display = ''
    form.style.display = 'none'
    errors.style.display = 'none'
  }



  

   
  function resetForm(e) {
    if(e.target.id = 'rs') {
      e.preventDefault();
      results.style.display = 'none';
      form.style.display = '';
      form.reset()
    }
  }




  function submitHandler(e) {
      e.preventDefault();
      // Distance
      let distance = parseFloat(form.distance.value);
      if(isNaN(distance) || distance < 0) {
          return errorMessage('Please enter a valid answer');
      }
      // Coffee
      let coffee = parseFloat(form.coffee.value);
      if(isNaN(coffee) || coffee < 0) {

          
            return errorMessage('Please enter a valid answer');
        }      

       
        let cigarettes = parseFloat(form.cigarettes.value);
        if(isNaN(cigarettes) || cigarettes < 0) {
            return errorMessage('Please enter a valid answer');
        }   

    

     
     let carbon = 0;
     if(form.transport.value == 'car') {
      carbon = (1.22 * cigarettes) + (34 * coffee) + (252.5 * distance)
    }
     else if(form.transport.value == 'public') {
       carbon = (1.22 * cigarettes) + (34 * coffee) + (822 * distance);
      }
    else if(form.transport.value == 'moto') {
       carbon = (1.22 * cigarettes) + (34 * coffee) + (110 * distance);
      }
    else {
       carbon = (1.22 * cigarettes) + (34 * coffee) + (0 * distance);
      }

    
  tree = carbon/59.7
    showResults(carbon);
     showResults(tree);
  }


  form.addEventListener('submit', submitHandler);
  results.addEventListener('click', resetForm, true);
})();