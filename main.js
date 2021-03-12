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
  const dress = document.querySelector("#dress");
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
  //my refactored version with LESS code and MORE scalability
  if (state.dress < 3) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 3) {
    state.dress = 0;
    dress.setAttribute("class", `dress${state.dress}`);
  }
}
