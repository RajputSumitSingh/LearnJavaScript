// console.log("hello word");


//Array of object
const data = [

  {
    candidateName : "Sumit singh",
    candidateId : 23,
    Age : 21,
    city : "Meerut",
    image : 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    candidateName : "Sumit singh",
    candidateId : 23,
    Age : 21,
    city : "Agra",
    image : 'https://randomuser.me/api/portraits/men/76.jpg'
  },
  {
    candidateName : "king raj",
    candidateId : 23,
    Age : 21,
    city : "Banglore",
    image : 'https://randomuser.me/api/portraits/men/78.jpg'
  },
  {
    candidateName : "Rahul singh",
    candidateId : 13,
    Age : 21,
    city : "Bihar",
    image : 'https://randomuser.me/api/portraits/men/79.jpg'
  },
  {
    candidateName : "rani Garg",
    candidateId : 23,
    Age : 21,
    city : "uttarkhand",
    image : 'https://randomuser.me/api/portraits/women/80.jpg'
  },
  {
    candidateName : "Shweeta Singh",
    candidateId : 23,
    Age : 18,
    city : "jammu & Kashmir",
    image : 'https://randomuser.me/api/portraits/women/81.jpg'
  },
  {
    candidateName : "Kamna Rani",
    candidateId : 23,
    Age : 21,
    city : "uttarkhand",
    image : 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    candidateName : "Vani Singh",
    candidateId : 23,
    Age : 22,
    city : "Goa",
    image : 'https://randomuser.me/api/portraits/women/83.jpg'
  },
]


//Iterator for the data.
function cvIterator(profile) {
  let nextIndex = 0;
  return {
    next : function () {
      return nextIndex < data.length ? 
      {value : profile[nextIndex++], done : false} : 
      {done : true};
    }
  }
}

let candidate = cvIterator(data);
nextCV();

//Event listner
let next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
  let currentCandidate = candidate.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');

  if(currentCandidate != undefined){

  image.innerHTML = `<img src="${currentCandidate.image}">`;
  profile.innerHTML = `
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${currentCandidate.candidateName}</li>
  <li class="list-group-item">${currentCandidate.candidateId}</li>
  <li class="list-group-item">${currentCandidate.Age}</li>
  <li class="list-group-item">${currentCandidate.city}</li>  
  </ul>`;
  }else{
    alert("All Candidate is over now");
    window.location.reload();
  }
}