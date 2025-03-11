document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
document.getElementById('result').classList.add('visible');

    // Get values from form
    const interest1 = document.getElementById('interest1').value;
    const interest2 = document.getElementById('interest2').value;
    const interest3 = document.getElementById('interest3').value;
  
    // Determine city based on answers
    let city = '';
    let description = '';
  
    if (interest1 === 'yes' && interest2 === 'yes' && interest3 === 'no') {
      city = 'Madison, WI';
      description = 'Madison is a great city for nature lovers who also enjoy cultural events, like festivals and art galleries.';
    } else if (interest1 === 'yes' && interest2 === 'no' && interest3 === 'yes') {
      city = 'Ames, IA';
      description = 'Ames offers plenty of outdoor activities and a laid-back vibe, perfect for a slower-paced lifestyle.';
    } else if (interest1 === 'no' && interest2 === 'yes' && interest3 === 'no') {
      city = 'Cedar Rapids, IA';
      description = 'Cedar Rapids has a thriving arts and culture scene, with plenty of museums and galleries.';
    } else if (interest1 === 'no' && interest2 === 'no' && interest3 === 'yes') {
      city = 'Eau Claire, WI';
      description = 'Eau Claire is peaceful and quiet, a hidden gem with a relaxed pace of life and beautiful nature surroundings.';
    } else {
      city = 'St. Louis, MO';
      description = 'St. Louis is a mix of urban culture, outdoor fun, and a variety of activities for every taste.';
    }
  
    // Display result
    const cityElement = document.getElementById('city-name');
    cityElement.textContent = city;
    
    // Make the city name bold
    cityElement.style.fontWeight = 'bold';

    // Set the description text
    document.getElementById('city-description').textContent = description;
    
    // Remove the hidden class to show the result section
    document.getElementById('result').classList.remove('hidden');
});
