
   // this document creates all the graphs

   //load this document when the window loads
      window.addEventListener('load', setup);

      
      
      chartIt(); //run the chart it function
   
           
      //variable set up /initialisation
      let pain_value = [];
      
      let pain = [];

      let date =[];
      

      let exercise =[];
      let exercise_value =[];
      
      let sleep = [];
      let sleep_value = [];
      let sleep_value_mins = [];
      let overall_sleep =[];
      let api_data =[];
      let extra_info_value = [];
      let precipitation =[];
      let pressure = [];


      
      
      

      let data_date = [];
      

      async function setup() {             


     //User data entry - enters the data the user inputs in the modal to the database
      const button = document.getElementById('submit'); //when the submit button is clicked this runs
      button.addEventListener('click', async event => {
        pain_value = document.getElementById('myRange').value; //gets each corresponding data entry value and inputs it to the variable
        sleep_value = document.getElementById('sleep_value').value;
        sleep_value_mins = document.getElementById('sleep_value_mins').value;
        exercise_value = document.getElementById('exercise_value').value;
        extra_info_value = document.getElementById('extra_info').value;

        //to add the sleep hours and mins together to get e.g 7.5hrs sleep
        convert_mins = (sleep_value*60); //convert mins by timesing the hour by 60 to make it in minutes

        
        overall_sleep_mins = Number(convert_mins) + Number(sleep_value_mins); //add the numbers from each together
        overall_sleep = overall_sleep_mins/60; //divide by 60 to convert total back to hours

        
        
        data_date = document.getElementById('data_date').value;


        
       
      
      

        // adds all these variables to data - data is posted to the database
        data = {pain_value, sleep_value, sleep_value_mins, overall_sleep, exercise_value, 
          pressure: api_data, precipitation: precipitation, data_date, extra_info_value}



        const options = { //post data to DB
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };

        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);


        chartIt();
        
      });

      }//end of setup function


      


      async function chartIt() { //function that draws all the charts

        const response = await fetch('/api');
        const data = await response.json();
        let date = [];
        
        let pain = pain_value;

        
        let exercise = exercise_value;

        let sleep = overall_sleep;
        
    
        } // end of chartIt function /////////////////////////////////////////////////////////////////////////








      async function getData() {
        
        const response = await fetch('/api');
        const data = await response.json();
        


        const date = []; 
        const pain_value = [];
        const exercise_value = []; 
        const sleep_value = [];
        const overall_sleep = [];
        const api_data = [];
        let precipitation = [];
        let pressure = [];
       


        // to work out the averages and overview charts - create variables and set to 0
        // initiate pie chart variables to 0
        let headache_free = 0;
        let headache_days = 0;

        let headache_days0 = 0;
        let headache_days1 = 0;
        let headache_days2 = 0;
        let headache_days3 = 0;
        let headache_days4 = 0;
        let headache_days5 = 0;
        let headache_days6 = 0;
        let headache_days7 = 0;
        let headache_days8 = 0;
        let headache_days9 = 0;
        let headache_days10 = 0;



        let over8hrs = 0;
        let under8hrs = 0;

        let sleephrs0 = [0];
        let sleephrs1 = 0;
        let sleephrs2 = 0;
        let sleephrs3 = 0;
        let sleephrs4 = 0;
        let sleephrs5 = 0;
        let sleephrs6 = 0;
        let sleephrs7 =0;
        let sleephrs8 = 0;
        let sleephrs9 = 0;
        let sleephrs10 = 0;
        let sleephrs11 = 0;
        let sleephrs12 = 0;
        let sleephrs13 =0;
        let sleephrs14 =0;


        let lightExercise = 0;
        let moderateExercise = 0;
        let heavyExercise = 0;

        let exercise_mins0 = 0;
        let exercise_mins5 = 0;
        let exercise_mins10 = 0;
        let exercise_mins15 = 0;
        let exercise_mins20 = 0;
        let exercise_mins25 = 0;
        let exercise_mins30 = 0;
        let exercise_mins35 = 0;
        let exercise_mins40 = 0;
        let exercise_mins45 = 0;
        let exercise_mins50 = 0;
        let exercise_mins55 = 0;
        let exercise_mins60 = 0;
       





        for (let i = 0; i<data.length; i++){

          // edits the data timestamp to show just the date (DD/MM/YYYY) not the time too
          // take the parts of the date that you want and then put them inside your date array
          let temp_date = new Date(data[i].data_date);
          date[i] = temp_date.getDate()  + "/" + (temp_date.getMonth()+1) + "/" + temp_date.getFullYear();


          // sets the variables of each data to hold the data the user inputs
          pain_value[i] = data[i].pain_value;
          exercise_value[i] = data[i].exercise_value;
          overall_sleep[i] = data[i].overall_sleep;

          pressure[i] = data[i].pressure;
          precipitation[i] = data[i].precipitation;
          
          
          av_sleep = data[i].overall_sleep;


////// work out sleep under or over 8 hours////////////////////////////////////////////////
          if (overall_sleep[i] >= 8) {
            over8hrs++;
          } else{
            under8hrs++;
          }


////////////// end of sleep calcs //////////////////////////////////////////




////// work out exercise donut chart ////////////////////////////////////////////////
          if (exercise_value[i] <= 10) {
            lightExercise++;
          } 
          else if (exercise_value[i] > 10 && exercise_value[i] <= 30) {
            moderateExercise++;
          }
          else {
            heavyExercise++;
          }


////////////// end of exercise calcs //////////////////////////////////////////




// count number of entries where pain_value is == 0 or pain_value > 0 ///////////////////////////////////////////////////
          if (pain_value[i] == 0) {
            headache_free++;
          } else{
            headache_days++;
          }

          

// count entries for averages//////////////////////////////////////////////
          if (pain_value[i] ==1){
            headache_days1++;
          }
          else if (pain_value[i] ==0) {
            headache_days0++;
          }
          else if (pain_value[i] ==2) {
            headache_days2++;
          }
          else if (pain_value[i] ==3) {
            headache_days3++;
          }
          else if (pain_value[i] ==4) {
            headache_days4++;
          }
          else if (pain_value[i] ==5) {
            headache_days5++;
          }
          else if (pain_value[i] ==6) {
            headache_days6++;
          }
          else if (pain_value[i] ==7) {
            headache_days7++;
          }
            else if (pain_value[i] ==8) {
            headache_days8++;
          }
          else if (pain_value[i] ==9) {
            headache_days9++;
          }
          else if (pain_value[i] ==10){
            headache_days10++;
          }

          

          // if (overall_sleep[i]>=0 && overall_sleep[i]<1){
          //   sleephrs0++;
          // }
          // else if (overall_sleep[i]>=1 && overall_sleep[i]<2){
          //   sleephrs1++;
          // }
          // else if (overall_sleep[i]>=2 && overall_sleep[i]<3){
          //   sleephrs2++;
          // }
          // else if (overall_sleep[i]>=3 && overall_sleep[i]<4){
          //   sleephrs3++;
          // }
          // else if (overall_sleep[i]>=4 && overall_sleep[i]<5){
          //   sleephrs4++;
          // }
          // else if (overall_sleep[i]>=5 && overall_sleep[i]<6){
          //   sleephrs5++;
          // }
          // else if (overall_sleep[i]>=6 && overall_sleep[i]<7){
          //   sleephrs6++;
          // }
          // else if (overall_sleep[i]>=7 && overall_sleep[i]<8){
          //   sleephrs7++;
          // }
          // else if (overall_sleep[i]>=8 && overall_sleep[i]<9){
          //   sleephrs8++;
          // }
          // else if (overall_sleep[i]>=9 && overall_sleep[i]<10){
          //   sleephrs9++;
          // }
          // else if (overall_sleep[i]>=10 && overall_sleep[i]<11){
          //   sleephrs10++;
          // }
          // else if (overall_sleep[i]>=11 && overall_sleep[i]<12){
          //   sleephrs12++;
          // }
          // else if (overall_sleep[i]>=12 && overall_sleep[i]<13){
          //   sleephrs13++;
          // }
          // else {
          //   sleephrs14++;
          // }




          if (exercise_value[i] == 0) {
            exercise_mins0++;
          }
          else if (exercise_value[i] == 10) {
            exercise_mins10++;
          }
          else if (exercise_value[i] == 15 ){
            exercise_mins15++;
          }
          else if (exercise_value[i] == 20) {
            exercise_mins20++;
          }
          else if (exercise_value[i] == 25) {
            exercise_mins25++;
          }
          else if (exercise_value[i] == 30) {
            exercise_mins30++;
          }
          else if (exercise_value[i] == 35) {
            exercise_mins35++;
          }
          else if (exercise_value[i] == 40) {
            exercise_mins40++;
          }
          else if (exercise_value[i] == 45) {
            exercise_mins45++;
          }
          else if (exercise_value[i] == 50) {
            exercise_mins50++;
          }
          else if (exercise_value[i] == 55) {
            exercise_mins55++;
          }
          else {
            exercise_mins60++;
          }
          


        }


         

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  //work out pain average from entered data ////////////////////////////////////////////////////////////////////////////////////////
        
// to work out the numbers that get added together for the sum
        //access the variables and times them by the value they correspond to e.g. headache_days5 holds the number of times the value 5 has
        // been entered, times it by 5 to work out the total
         var nums2 = [Number(1 * headache_days1), Number(2 * headache_days2), Number(3 *headache_days3), Number(4 * headache_days4), 
         Number(5 * headache_days5), Number(6 * headache_days6), Number(7 * headache_days7), Number(8 * headache_days8),
          Number(10 * headache_days10), Number(9 *headache_days9), Number(1 *headache_days0)];
         
        

        var psum = nums2.reduce((a, b) => a + b); //work out the sum by adding all together
        var p_average = psum / headache_days; //work out the average

        console.log(p_average);



        var average_pain = document.getElementById('average_pain');
        average_pain.append(p_average.toFixed(2) + "/10");

// end of working out average//////////////////////////////////////////////////////////////////////






//   //work out sleep average from entered data ////////////////////////////////////////////////////////////////////////////////////////
       
  
//filter out the variables that = 0 so they don't effect the average
        var filtered = overall_sleep.filter(item => item !== 0);

        var sum = filtered.reduce((a, b) => a + b); //work out the sum by adding all the filtered variables together
        var sleep_average = sum / filtered.length; //work out the average

   

        console.log("Sleep Average is "+ sleep_average.toFixed(2) + "/10"); //fixes the average to 2 decimal places

        const average_sleep = document.getElementById('average_sleep');
        average_sleep.append(sleep_average.toFixed(2) + "Hrs");



// end of working out average//////////////////////////////////////////////////////////////////////



//   //work out  exercise average from entered data ////////////////////////////////////////////////////////////////////////////////////////
       

        // to work out the numbers that get added together for the sum
        //access the variables and times them by the value they correspond to e.g. exercise_mins5 holds the number of times the value 5 has
        // been entered, times it by 5 to work out the total
        var exercise_nums = [Number(5* exercise_mins5), Number(10 * exercise_mins10), Number(15 * exercise_mins15), Number(20* exercise_mins20),
        Number(30* exercise_mins30), Number(35 * exercise_mins35), Number (40 * exercise_mins40), Number(45 * exercise_mins45),
        Number(50 * exercise_mins50), Number(55 * exercise_mins55), Number(60*exercise_mins60), Number(1*exercise_mins0)];

        //work out the sum by adding all the numbers in variable exercise_nums together
        var esum = exercise_nums.reduce((a, b) => a + b);
        //work out the exercise average by dividing the sum by the number of days that exercise data has been entered
        var e_average = esum / (Number(lightExercise) + Number(moderateExercise) + Number(heavyExercise) -1);

        console.log("days" + (Number(lightExercise) + Number(moderateExercise) + Number(heavyExercise)))

        console.log(e_average);
        

        console.log("Exercise Average is "+ e_average.toFixed(2) + "/10");

        const average_exercise = document.getElementById('average_exercise');
        average_exercise.append(e_average.toFixed(0) + " Mins");//print the average on the exercise page, don't show decimals as its minutes




// end of working out exercise average//////////////////////////////////////////////////////////////////////



 


// START OF DRAWING GRAPHS //



//weather - pressure vs pain graph///////////////////////////////////////////////////////////////////////////////////////////
        const ctxweather = document.getElementById('weather_chart').getContext('2d'); //get the element that is weather_chart
        // draw the chart in weather chart
        const weather_chart = new Chart(ctxweather, {
       
          type: 'bar', //sets what type of graph the graph is e.g bar, line, pie 
          data: {
            labels: date, //sets the label to show the date
            datasets: [
              {
                label: 'Air Pressure', //label for the key at the top of the graph 
                data: pressure, //what data is used to draw the graph - gets the pressure variable data
                type:'line', //changes this data set to be a line
                fill: false,
                borderColor: '#04AECC', //sets the colour of the line graph
                backgroundColor: '#04AECC',
                borderWidth: 1,
                
                yAxisID: 'right-y-axis',// This binds the dataset to the right y axis
                order:2 // order the line graph is drawn, this makes it on top
              }, 

              {
                label:'Pain', //label for the key at the top, shows which data is the pain data
                data: pain_value, // gets the pain_value variable and uses this data to make the graph
                backgroundColor: '#FEC667',
                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis',
                order:1 //order bar chart is drawn - 1 makes it drawn below
              }
              ]
            },

          options: {
            responsive: true, //makes the graph responsive 
            maintainAspectRatio: true, //makes it keep the same ratio when it is drawn at different responsive sizes
            scales: {
               xAxes:[{ //draw the x axes
                display:true, 

                scaleLabel:{ //adds a lable to the x axis
                  display:true,
                  labelString: 'Day of Month'
                }
              }],

              yAxes: [{ //draws two different y axis on either side of the graph so that they  best suit the data scale
                

                         id: 'left-y-axis',
                type: 'linear',
                position: 'left', //puts this y axis on the left
                scaleLabel:{ //adds a lable to the left y axis
                  display:true,
                  labelString: 'Pain out of 10'
                }
              },

              {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right', //puts this y axis on the right
                scaleLabel:{ //adds a label to this y axis
                  display:true,
                  labelString: 'Air Pressure'
                }
               
           
              }

              

              ]
            },
            plugins: { //disables the plugin that shows the percentage of each data segment on this graph
              labels: false
            }
          }
      });

// ///////////// end of weather chart ///////////////////////////////////////////////////////////////////




//weather - pressure vs pain///////////////////////////////////////////////////////////////////////////////////////////
        const ctxweather2 = document.getElementById('weather_chart2').getContext('2d');
        
        const weather_chart2 = new Chart(ctxweather2, {
       
          type: 'bar',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Air Pressure',
                data: precipitation,
                type:'line', //changes this data set to be a line
                fill: false,
                borderColor: '#6B91FF',
                backgroundColor: '#6B91FF',
                borderWidth: 1,
                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis',
                order:2
              }, 

              {
                label:'Pain',
                data: pain_value,
                backgroundColor: '#FEC667',
                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis',
                order:1 //order bar chart is drawn - 1 makes it drawn below
              }
              ]
            },

          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
               xAxes:[{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString: 'Day of Month'
                }
              }],

              yAxes: [{
                // display:true,

                         id: 'left-y-axis',
                type: 'linear',
                position: 'left',
                scaleLabel:{
                  display:true,
                  labelString: 'Pain out of 10'
                }
              },

              {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right',
                scaleLabel:{
                  display:true,
                  labelString: 'Humidity'
                }
               


            
              }

              

              ]
            },
            plugins: {
              labels: false
            }
          }
      });

// ///////////// end of weather chart ///////////////////////////////////////////////////////////////////










//overview pie chart///////////////////////////////////////////////////////////////////////////////////////////
        const ctxpie = document.getElementById('overview_chart').getContext('2d');
        
        const overview_chart = new Chart(ctxpie, {
       
          type: 'pie', //sets this graph to a pie chart
          data: {
            labels: ["Headache Days", "Headache Free Days"], //shows the 2 segments of the graph in the key
            datasets: [{
              
              backgroundColor: ["#FEC667", "#6ABEB8"],
              data: [headache_days, headache_free], //uses this data to draw the graph 
            }]
          },
          options: {
            title: {
              display: true,
              text: 'Headache Days'
            },
            
          }
      });

///////////// end of overview chart ///////////////////////////////////////////////////////////////////




//pain breakdown pie chart/////////////////////////////////////////////////////////////////////////////
        const ctxb = document.getElementById('breakdown_chart').getContext('2d');
        
        const breakdown_chart = new Chart(ctxb, {
       
          type: 'pie',
          data: {
            labels: ["Pain 0", "Pain1", "Pain 2", "Pain 3", "Pain 4", "Pain 5", "Pain 6", "Pain 7", "Pain 8", "Pain 9", "Pain 10"],
            datasets: [{
              
              backgroundColor: ["#21618F", "#509BD3", "#76B5DC", "#9FCCBE", "#6DC5A5", "#E6F598", "#FEE08B", "#FDAE61", "#F46D43", "#D53E4F", "#9E0142"],
              data: [headache_free, headache_days1, headache_days2, headache_days3, headache_days4, headache_days5, headache_days6,
              headache_days7, headache_days8, headache_days9, headache_days10],
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Pain Breakdown'
            },

            plugins: {
             labels: [ //draws on a label for each segment  of the pie chart and tells the user the percentage of each segment
             {
              render: 'label',
              fontColor: '#D0D0DF',
              position: 'outside',
              fontFamily: 'Segoe UI',
              fontSize: 15,
              textMargin: 15,
              outsidePadding:10
            },
             {
              render: 'percentage',
              fontColor: 'black',
              fontFamily: 'Segoe UI',
              fontSize:12,
              position: 'border'

              
             }
              ]
             


          }
        }
      
    });

///// end of breakdown chart //////////////////////////////////////////////




//8+ sleep chart/////////////////////////////////////////////////////////////////////////////
        const ctxgs = document.getElementById('good_sleep_chart').getContext('2d');
        
        const good_sleep_chart = new Chart(ctxgs, {
       
          type: 'pie',
          data: {
            labels: ["Over 8Hrs", "Under 8Hrs"],
            datasets: [{
              
              backgroundColor: ["#21618F", "#509BD3"],
              data: [over8hrs, under8hrs],
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Nights of Sleep Over 8 Hours'
            },

            plugins: {
             labels: [
             {
              render: 'label',
              fontColor: '#D0D0DF',
              position: 'outside',
              fontFamily: 'Segoe UI',
              fontSize: 15,
              textMargin: 8
            },
             {
              render: 'percentage',
              fontColor: '#D0D0DF',
              fontFamily: 'Segoe UI',
              fontSize:14
             }
              ]
             


          }
        }
      
    });

///// end of 8+ sleep chart //////////////////////////////////////////////






//exercise breakdwon chart/////////////////////////////////////////////////////////////////////////////
        const ctxe = document.getElementById('exercise_breakdown_chart').getContext('2d');
        
        const exercise_breakdown_chart = new Chart(ctxe, {
       
          type: 'doughnut',
          data: {
            labels: ["Light Exercise (10 Mins Or Under)", "Moderate Exercise (11-30 Mins)", "Intense Exercise (Over 30 Mins)"],
            datasets: [{
              
              backgroundColor: ["#6ABEB8", "#FEC667", "#FC7B7F"],
              data: [lightExercise, moderateExercise, heavyExercise],
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Exercise Breakdown'
            },

            plugins: {
             labels: [
             {
              render: 'label',
              fontColor: '#D0D0DF',
              position: 'outside',
              fontFamily: 'Segoe UI',
              fontSize: 15,
              textMargin: 8
            },
             {
              render: 'percentage',
              fontColor: '#D0D0DF',
              fontFamily: 'Segoe UI',
              fontSize:14
             }
              ]
             


          }
        }
      
    });

///// end of exercise breakdown chart //////////////////////////////////////////////


















/////////// pain chart////////////////////////////////////////////////////////////////////////////////////////////////////
        const ctx2 = document.getElementById('pain_chart').getContext('2d');
        //const pain_chart_data = await chartIt();
        const pain_chart = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Pain out of 10',
                data: pain_value,
                fill: false,
                borderColor: '#FEC667',
                backgroundColor: '#FEC667',
                borderWidth: 1,
                order:2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
               xAxes:[{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString: 'Day of Month'
                }
              }],

              yAxes: [{
                display:true,
                scaleLabel:{
                  display: true,
                  labelString: 'Pain out of 10'
                },
              ticks:{
                beginAtZero:true,
                max: 10
                //min: 0

              }
              }]
            },
            plugins: {
              labels: false
            }
          }
        });

//// end of pain chart /////////////////////////////////////////////////////////////////////////////////////




      





//exercise chart -ctx4////////////////////////////////////////////////////////////////////////////////////////////////
        const ctx4 = document.getElementById('exercise_chart').getContext('2d');
        
        const exercise_chart = new Chart(ctx4, {
          type: 'bar',
          data: {
            labels: date,     
            datasets: [
              {
                label: 'Mins of Exercise',
                data: exercise_value,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: '#FC7B7F',
                borderWidth: 1,
                order:2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {

              xAxes:[{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString: 'Day of Month'
                }
              }],

              yAxes: [{
                display:true,

                scaleLabel:{
                display: true,
                labelString: 'Mins Of Exercise'
              },

              ticks:{
                beginAtZero:true, //sets the graph axis to begin at 0
                

              }


              }]


            },
            plugins: {
              labels: false
            }
          }
        });
/////// end of exercise chart////////////////////////////////////////////////////////////////////////////






//sleep chart - ctx3 ////////////////////////////////////////////////////////////////////////////////////////////////////
        const ctx3 = document.getElementById('sleep_chart').getContext('2d');
        
        const sleep_chart = new Chart(ctx3, {
          type: 'bar',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Hours of Sleep',
                data: overall_sleep,
                fill: false,
                
                backgroundColor: '#88E7D3',
                borderWidth: 1,
                order:2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {

              xAxes:[{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString: 'Day of Month'
                }
              }],


              yAxes: [{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString:' Hours of Sleep'
                },

              ticks:{
                beginAtZero:true,
                //max: 10
                //min: 0

              }
              }]
            },

            plugins: {
              labels: false
            }
          }
        });

/////////////// end of sleep chart ///////////////////////////////////////////////////////////////////////////////////////




        //multi chart /////////////////////////////////////////////////////////////////////////////////////////////
        const ctx = document.getElementById('myChart').getContext('2d');
        
        
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Pain out of 10',
                data: pain_value,
                type:'line', //changes this data set to be a line
                fill: false,
                borderColor: '#FEC667',
                backgroundColor: '#FEC667',
                borderWidth: 1,
                order:2,
                yAxisID: 'right-y-axis'
              }, 

              {
                label:'Mins of Exercise',
                data: exercise_value,
                backgroundColor: '#FC7B7F',
                order:1 ,//order bar chart is drawn - 1 makes it drawn below
                yAxisID: 'left-y-axis'
              },


              {
                label:'Hours of Sleep',
                data: overall_sleep,
                backgroundColor: '#88E7D3',
                order:1, //order bar chart is drawn - 1 makes it drawn below
                yAxisID: 'right-y-axis'
                
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {

               xAxes:[{
                display:true,

                scaleLabel:{
                  display:true,
                  labelString: 'Day of Month'
                }
              }],

              yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left',
                scaleLabel:{
                  display:true
                  
              }
              },

              {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right',
                scaleLabel:{
                  display:true}
                }

              ]
            },

            plugins: {
              labels: false
            }

          }
        });





        
      } // end of get data function ////////////////////////////////////////////////////////////////////////////////////////////




    


      

     


      let data; //creates data variable
      //api
      const api_url ="http://api.weatherunlocked.com/api/forecast/uk.GL526EG?app_id=52529cb0&app_key=408f3450df9671e205aa4bb265290472"

      async function getWeather(){ //function to fetch the weather api url
        const response = await fetch(api_url);
        const weather_data = await response.json();
        console.log(weather_data); //logs the api data

        
        console.log(weather_data.Days[0].slp_min_mb); 

        api_data = weather_data.Days[0].slp_min_mb;//gets the air pressure of that day and logs it to the api_data variable
        precipitation = weather_data.Days[0].humid_min_pct;//gets the current humidity from the api 
        
        console.log("Precip today is : " + precipitation);
        
        console.log(api_data);

        
      } // end of get Weather function 



      getWeather();
      getData();

      








      



//C:\Users\aimee\OneDrive\Documents\University\Third Year Part 2\CCTP\Coding\chart.js