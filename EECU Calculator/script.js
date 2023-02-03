const careerList = document.getElementsByClassName('career');
console.log(careerList);

var selectedCareer = document.querySelector(".career[data-value='$34,650-$147,000']");

federalTaxes=document.getElementById("federalText")
statetaxes=document.getElementById("stateText")
socialSecurity=document.getElementById("socialText"),
medicareText=document.getElementById("medicareText"),
stateDisability=document.getElementById("stateText"),
retirementInvestment=document.getElementById("retirementText"),
medicareInsurance=document.getElementById("insuranceText"), 
totalDeductions=document.getElementById("totalText"),
grossIncome=document.getElementById("grossText"),
netIncome=document.getElementById("netText")


for (let index = 0; index < careerList.length; index++) {
  const element = careerList[index];
    element.addEventListener('click', function() {
  var careerValue = this.dataset.value;
  careerValue=parseInt(careerValue);
  let monthlyIncome =careerValue/12
  var federalTaxes = monthlyIncome * 0.12;
  federalText.innerText=federalTaxes.toFixed(2);
  var stateTaxes = monthlyIncome * 0.07;
  stateText.innerText=stateTaxes.toFixed(2);
  var socialSecurity = monthlyIncome * 0.062;
  socialText.innerText=socialSecurity.toFixed(2);
  var medicare = monthlyIncome * 0.0145;
  medicareText.innerText=medicare.toFixed(2);
  var stateDisability = monthlyIncome * 0.01;
  stateText.innerText=stateDisability.toFixed(2);
  var retirementInvestment = monthlyIncome * 0.05;
  retirementText.innerText=retirementInvestment.toFixed(2);
  var medicareInsurance = 180.00;
  insuranceText.innerText=medicareInsurance.toFixed(2);
  var totalDeductions = federalTaxes + stateTaxes + socialSecurity + medicare + stateDisability + retirementInvestment + medicareInsurance;
  totalText.innerText=totalDeductions.toFixed(2);
  var grossIncome = careerValue;
  grossText.innerText=grossIncome.toFixed(2);
  var netIncome = careerValue - totalDeductions;
  netText.innerText=netIncome.toFixed(2);
})
}