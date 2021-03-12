let state = {
  dress: 0,
  hair: 0,
  hat: 0,
  shoes: 0,
};

//function to change dress
function nextdress() {
  console.log("nextdress triggered");
  console.log(state.dress);
  let dress = document.querySelector("#dress");
  //code from the tutorial example:
  //   if (state.dress === 0) {
  //     dress.setAttribute("class", "dress1");
  //     state.dress++;
  //     console.log(state);
  //   } else if (state.dress === 1) {
  //     dress.setAttribute("class", "dress2");
  //     state.dress++;
  //     console.log(state);
  //   } else if (state.dress === 2) {
  //     dress.setAttribute("class", "dress3");
  //     //set back to 0
  //     state.dress = 0;
  //     console.log(state);
  //   }

  //my refactored version with LESS code and MORE scalability:
  if (state.dress < 3) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 3) {
    state.dress = 0;
    dress.setAttribute("class", `dress${state.dress}`);
  }
}

function nextshoes() {
  let shoes = document.querySelector("#shoes");
  if (state.shoes < 2) {
    state.shoes++;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  } else if (state.shoes === 2) {
    state.shoes = 0;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  }
}
function nexthair() {
  let hair = document.querySelector("#hair");
  if (state.hair < 2) {
    state.hair++;
    hair.setAttribute("class", `hair${state.hair}`);
  } else if (state.hair === 2) {
    state.hair = 0;
    hair.setAttribute("class", `hair${state.hair}`);
  }
}

function nexthat() {
  let hat = document.querySelector("#hat");
  if (state.hat < 2) {
    state.hat++;
    hat.setAttribute("class", `hat${state.hat}`);
  } else if (state.hat === 2) {
    state.hat = 0;
    hat.setAttribute("class", `hat${state.hat}`);
  }
}
