const careerList = document.querySelectorAll('.career');


var selectedCareer = document.querySelector(".career[data-value='$34,650-$147,000']");

let federalTaxes= document.querySelector(".federal-taxes-input").value 





 let statetaxes=document.querySelector(".state-taxes-input").value,

socialSecurity=document.querySelector(".social-security-input").value,
medicare=document.querySelector(".medicare-input").value,
document.querySelector(".state-disability-input").value = stateDisability;
document.querySelector(".retirement-investment-input").value = retirementInvestment;
document.querySelector(".medicare-insurance-input").value = medicareInsurance;
document.querySelector(".total-deductions-input").value = totalDeductions;
document.querySelector(".gross-income-input").value = grossIncome;
document.querySelector(".net-income-input").value = netIncome;


careerList.forEach(career) 
    career.addEventListener('click'), (event) => {
  var careerValue = event.target.dataset.value;
  var federalTaxes = careerValue * 0.12;
  var stateTaxes = careerValue * 0.07;
  var socialSecurity = careerValue * 0.062;
  var medicare = careerValue * 0.0145;
  var stateDisability = careerValue * 0.01;
  var retirementInvestment = careerValue * 0.05;
  var medicareInsurance = 180.00;
  var totalDeductions = federalTaxes + stateTaxes + socialSecurity + medicare + stateDisability + retirementInvestment + medicareInsurance;
  var grossIncome = careerValue;
  var netIncome = careerValue - totalDeductions;
}
