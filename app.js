$(document).ready(function(){

  var total = 0
  var instructions= $(".instructions")
  var about = $(".about")
  var next = $(".next")
  var pop = $("#card1")
  var science = $("#card2")
  var poli = $("#card3")
  var his = $("#card4")
  var question = $(".question")
  var submit = $(".submit")
  var display = $(".display")
  var bottom = $(".bottom")
  var card = $(".card")
  var popFlag = false
  var litFlag = false
  var hisFlag = false
  var sciFlag = false
  var catagories= ["Pop Culture", "Science", "Literature", "History" ]



// <---Intro and how to--->
about.on("click", function(){
    question.html("<h1>Welcome</h1><p>Project Trivia is my first full project completed at General Assembly. Feel free to check out the full code <a href= 'https://github.com/nrc0004?tab=repositories'> here.</a></p></br><p>Key technologies used hto build this page: CSS, HTML, Bootstrap, JavaScript, and JQuery.</p>")
    bottom.remove()
})

instructions.on("click", function(){
    question.html("<h1>Light 'em up!</h1><p>Work through the different categories and light up their topic centers. Once all four are lit, you win!</p>")
    bottom.remove()
})

// <---winning condition --->
if (sciFlag == true && popFlag==true && sciFlag==true && hisFlag ==true) {
  console.log("player has won")
  question.html("<h1> You have Won!</h1>")
}

// <--game logic-->
  next.on("click", function(){

    var random = catagories[Math.floor(Math.random()*catagories.length)]
    console.log (random)
    card.append(bottom)

    if (random === catagories[0]) {
      var questions= "How many kids does Kim Kardashian-West have with Kanye?"
      var choices = ["1", "2", "3", "4"]
      var answer = "3"

      //change background to reflect category
      display.css("background-image", "url('http://i.imgur.com/DnXrgG2.jpg')")
      //questions display

      question.html("<h2>"+ questions+ "</h2>")
      for ( i= 0; i < choices.length; i++) {
        question.append ("<ul>" + choices[i] + "</ul>")
      }

      submit.on("click", function(event){
        event.preventDefault()
        var playerAnswer = $("#playerAnswer").val()
        console.log(playerAnswer)
        if (playerAnswer === null) {
          alert("You must enter an answer. Please type your answer in the space provided")
        } else{
          if (playerAnswer === answer) {
            question.html("<h2> Correct!</h2>")
            bottom.remove()
            $("#card1").css("opacity", "1")
            var popFlag = true
            console.log(popFlag)

          } else {
            question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
          }
        }
      }
    )
  } else if (random === catagories[1]){
    var playerAnswer = $("#playerAnswer").val()
    var questions= "How many Moons does Saturn have?"
    var choices = ["1", "5", "9", "64"]
    var answer = "64"

    //change background to reflect category
    display.css("background-image", "url('http://i.imgur.com/r1nBBTD.jpg')")
    //questions display

    question.html("<h2>"+ questions+ "</h2>")
    for ( i= 0; i < choices.length; i++) {
      question.append ("<ul>" + choices[i] + "</ul>")
    }

    submit.on('click', function(){
      event.preventDefault()
      var playerAnswer = $("#playerAnswer").val()
      console.log(playerAnswer)
      if (playerAnswer === null) {
        alert("You must enter an answer. Please type your answer in the space provided")
      } else{
        if (playerAnswer === answer) {
          question.html("<h2> Correct!</h2>")
          bottom.remove()
          $("#card2").css("opacity", "1")
          var sciFlag = true
        } else {
          question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
        }
      }
    }
  )
} else if (random === catagories[2]){
  var playerAnswer = $("#playerAnswer").val()
  var questions= "What is the name of the Great Gatsby's love interst?"
  var choices = ["Diane", "Daisy", "Danielle", "Dora"]
  var answer = "Daisy"

  //change background to reflect category
  display.css("background-image", "url('http://i.imgur.com/CTCiHwq.jpg')")
  //questions display

  question.html("<h2>"+ questions+ "</h2>")
  for ( i= 0; i < choices.length; i++) {
    question.append ("<ul>" + choices[i] + "</ul>")
  }

  submit.on("click", function(){
    event.preventDefault()
    var playerAnswer = $("#playerAnswer").val()
    console.log(playerAnswer)
    if (playerAnswer === null) {
      alert("You must enter an answer. Please type your answer in the space provided")
    } else{
      if (playerAnswer === answer) {
        question.html("<h2> Correct!</h2>")
        bottom.remove()
        $("#card3").css("opacity", "1")
        var litFlag = true
      } else {
        question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
      }
    }
  }
)
} else if(random === catagories[3]){
  var playerAnswer = $("#playerAnswer").val()
  var questions= "How long was the long war?"
  var choices = ["5 years", "10 years", "13 years", "100 years"]
  var answer = "13 years"

  //change background to reflect category
  display.css("background-image", "url('http://i.imgur.com/MAntXg7.jpg')")
  //questions display

  question.html("<h2>"+ questions+ "</h2>")
  for ( i= 0; i < choices.length; i++) {
    question.append ("<ul>" + choices[i] + "</ul>")
  }

  submit.on("click", function(){
    event.preventDefault()
    var playerAnswer = $("#playerAnswer").val()
    console.log(playerAnswer)
    if (playerAnswer === null) {
      alert("You must enter an answer. Please type your answer in the space provided")
    } else{
      if (playerAnswer === answer) {
        question.html("<h2> Correct!</h2>")
        bottom.remove()
        $("#card4").css("opacity", "1")
        var hisFlag = true
      } else {
        question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
      }
    }
  }
)
}
})


})
