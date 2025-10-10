function sumSalary(salaries) {
  let salarySum = 0;
  for (let key in salaries){
    // console.log(salaries[key] + ' ' + typeof(salaries[key]))
    if(typeof(salaries[key]) === 'number' && isFinite(salaries[key])){
      salarySum = salarySum + salaries[key];
    }
  }
  return salarySum;
}