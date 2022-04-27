function scuberGreetingForFeet(feet){;
  if(feet <= 400){
    return "This one is on me!";
  }
  else if( (400 < feet) && (feet < 2000) ) {
    return ("That will be twenty bucks.");
  }
  else if( (feet >= 2000) && (feet < 2500) ){
    return ("I will gladly take your thirty bucks.");
  }
  else if(feet >= 2500) {
    return("No can do.");
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return(city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch(generous) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
  }
}