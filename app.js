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
    question.html("<h1> This is a test</h1><p>more testing</p>")
    bottom.remove()
})

instructions.on("click", function(){
    question.html("<h1> THIS is a test</h1><p>more testing</p>")
    bottom.remove()
})


next.on("click", function(){

  var random = catagories[Math.floor(Math.random()*catagories.length)]
  console.log (random)
  card.append(bottom)

      if (random === catagories[0]) {
        var playerAnswer = $("#playerAnswer").val()
        var questions= "How many kids?"
        var choices = ["1", "2", "3", "4"]
        var answer = "2"

        //change background to reflect category
        display.css("background-image", "url('http://i.imgur.com/DnXrgG2.jpg')")
        //questions display

        question.html("<h2>"+ questions+ "</h2>")
        for ( i= 0; i < choices.length; i++) {
          question.append ("<ul>" + choices[i] + "</ul>")
        }

        submit.on("click", function(){
          if (playerAnswer === null) {
            alert("You must enter an answer. Please type your answer in the space provided")
          } else{
            if (playerAnswer === answer) {
              question.html("<h2> Correct!</h2>")
              $("#card1").css("opacity", "1")
            } else {
              question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
            }
          }
        }
      )
    } else if (random === catagories[1]){
      var playerAnswer = $("#playerAnswer").val()
      var questions= "SCIENCE"
      var choices = ["1", "2", "3", "4"]
      var answer = "2"

      //change background to reflect category
      display.css("background-image", "url('http://i.imgur.com/r1nBBTD.jpg')")
      //questions display

      question.html("<h2>"+ questions+ "</h2>")
      for ( i= 0; i < choices.length; i++) {
        question.append ("<ul>" + choices[i] + "</ul>")
      }

      submit.on("click", function(){
        if (playerAnswer === null) {
          alert("You must enter an answer. Please type your answer in the space provided")
        } else{
          if (playerAnswer === answer) {
            question.html("<h2> Correct!</h2>")
            $("#card1").css("opacity", "1")
          } else {
            question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
          }
        }
      }
    )
    } else if (random === catagories[2]){
      var playerAnswer = $("#playerAnswer").val()
      var questions= "LITTT"
      var choices = ["1", "2", "3", "4"]
      var answer = "2"

      //change background to reflect category
      display.css("background-image", "url('http://i.imgur.com/CTCiHwq.jpg')")
      //questions display

      question.html("<h2>"+ questions+ "</h2>")
      for ( i= 0; i < choices.length; i++) {
        question.append ("<ul>" + choices[i] + "</ul>")
      }

      submit.on("click", function(){
        if (playerAnswer === null) {
          alert("You must enter an answer. Please type your answer in the space provided")
        } else{
          if (playerAnswer === answer) {
            question.html("<h2> Correct!</h2>")
            $("#card1").css("opacity", "1")
          } else {
            question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
          }
        }
      }
    )
    } else if(random === catagories[3]){
        var playerAnswer = $("#playerAnswer").val()
        var questions= "History"
        var choices = ["1", "2", "3", "4"]
        var answer = "2"

        //change background to reflect category
        display.css("background-image", "url('http://i.imgur.com/MAntXg7.jpg')")
        //questions display

        question.html("<h2>"+ questions+ "</h2>")
        for ( i= 0; i < choices.length; i++) {
          question.append ("<ul>" + choices[i] + "</ul>")
        }

        submit.on("click", function(){
          if (playerAnswer === null) {
            alert("You must enter an answer. Please type your answer in the space provided")
          } else{
            if (playerAnswer === answer) {
              question.html("<h2> Correct!</h2>")
              $("#card1").css("opacity", "1")
            } else {
              question.html("<h2> Sorry that is incorrect.</h2> <p>Press Next to keep playing</p>")
            }
          }
        }
      )
    }
  })
})
