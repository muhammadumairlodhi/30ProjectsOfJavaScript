function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();
  
    const ageYears = Math.floor((today - dob) / (365 * 24 * 60 * 60 * 1000));
    const ageMonths = Math.floor((today.getMonth() - dob.getMonth() + 12 * ((today.getFullYear() - dob.getFullYear()) - 1)) % 12);
    const ageDays = Math.floor((today.getDate() - dob.getDate()) + ageMonths * 30);
  
    document.getElementById("result").innerHTML = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
  }
  