let availableKeywords =[
                  'Accountant',
                 'Advance Tractor/Trailer Driver',
                  'Agricultural Engineer',
                  'Architect',
                  'Auto Tech/Mechanic',
                  'Aviation Tech. Mechanic',
                  'Biologist',
                  'Bus Driver',
                  'Business Development Officer',
                  'Business Manager (Hotel etc.)',
                  'CNC Manufacturing',
                 'Carpenter',
                  'Chef',
                 'Chemist', 
                 'Civil Engineering Technician',
                 'Commercial Driver',
                 'Computer Technician',
                 'Conserv./Environ. Science',
                  'Corectional Officer',
                  'Cosmetologist',
                  'Credit Union/Bank Manager',
                  'Daycare Director',
                  'Dentist',
                  'Detective',
                 'Diesel Tech/Mechanic',
                 'Doctor/Physician',
                  'Electrician', 
                  'Electronic Engineer',
                  'EMT',
                 'Energy Management PG&E',
                 'Engineer',
                  'Fashion Designer',
                  'Fire Fighter',
                  'Forest Ranger',
                  'Graphic/Media Designer',
                  'H/C HVAC',
                 'Highway Patrol',
                 'Home Inspector',
                  'Industrial Mechanic',
                 'Interior Designer',
                 'Investment Analyst',
                 'Lab Technician',
                 'Landscaper Horticulture',
                  'Lawyer',
                 'Marketing/Sales Manager',
                 'Media/Communications',
                  'Medical Repair Tech',
                  'Military',
                  'Nurse',
                  'Nutritionist',
                 'Oceanographer',
                  'Pastor',
                  'PG&E AT8&T Technician',
                 'Pharmacist',
                  'Photographer',
                 'Physical Therapist',
                  'Pilot (Commercial)',
                  "Plumber",
                  "Police Officer",
                  "Principal",
                  "Probation Officer",
                 "Psychologist",
                 "Retail Sales Associate",
                 "Social Worker",
                 "Solar Energy Tech",
                 "Teacher",
                  "UPS/Fed Ex Driver",
                  'Veterinarian',
                 'Welder/Metal Specialist',
                 'Wind Energy Technician',
];
const resultsBox =document.querySelector(".result-box");
const inputBox =document.getElementById("input-box");
inputBox.onkeyup =function(){
  let result =[];
  let input =inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if(!result.length){
    resultsBox.innerHTML = '';
  }
}
function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML ='';
}
const careerList = document.getElementsByClassName('career');
console.log(careerList);


var selectedCareer = document.querySelector(".career[data-value='$34,650-$147,000']");


federalTaxes=document.getElementById("federalText")
stateTaxes=document.getElementById("stateText")
socialSecurity=document.getElementById("socialText"),
medicareText=document.getElementById("medicareText"),
stateDisability=document.getElementById("disabilityText"),
retirementInvestment=document.getElementById("retirementText"),
medicareInsurance=document.getElementById("insuranceText"),
totalDeductions=document.getElementById("totalText"),
totalDeductions=document.getElementById("twoText")
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
  disabilityText.innerText=stateDisability.toFixed(2);
  var retirementInvestment = monthlyIncome * 0.05;
  retirementText.innerText=retirementInvestment.toFixed(2);
  var medicareInsurance = 180.00;
  insuranceText.innerText=medicareInsurance.toFixed(2);
  var totalDeductions = federalTaxes + stateTaxes + socialSecurity + medicare + stateDisability + retirementInvestment + medicareInsurance;
  totalText.innerText=totalDeductions.toFixed(2);
  var totalDeductions = federalTaxes + stateTaxes + socialSecurity + medicare + stateDisability + retirementInvestment + medicareInsurance;
  twoText.innerText=totalDeductions.toFixed(2);
  var grossIncome = careerValue;
  grossText.innerText=grossIncome.toFixed(2);
  var netIncome = careerValue - totalDeductions;
  netText.innerText=netIncome.toFixed(2);
})
}
const table = document.querySelector("#table tbody")
const addRow = document.getElementById("add-row")
addRow.addEventListener("click", function(){
  let row;
  row = table.insertRow(-1);
for (let index = 0; index < 5; index++) {
  let cell=row.insertCell(index);
  cell.innerHTML ='<input type="text">'
}
})
 const removeRow = document.getElementById("remove-row")
 removeRow.addEventListener("click"  ,function() {
  console.log(table.children);
  table.deleteRow(-1)
 })










