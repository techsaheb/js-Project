const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height == " " || height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a valid value ${height}`

    } else if(weight == " " || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please give a valid value ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
       

       if(bmi < 18.6){
        results.innerHTML = `<span>you are under weight && your BMI${bmi}</span>`
      }
     else if(bmi > 18.6 && bmi <24.9){
        results.innerHTML = `<span>you are Normal Range && your BMI${bmi}</span>`

     } else if( bmi >24.9){
        results.innerHTML = `<span>you are Overweight && your BMI${bmi}</span>`
     }
      
       
      }


     

      
 
   
   
})