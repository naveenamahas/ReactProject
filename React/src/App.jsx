
//import { useState } from 'react';
import { useState } from 'react';
import Header from './Header.jsx';
//import TabButton from './TabButton.jsx';
//import { SOIL_THINGS } from './data.js';
//import data from './data.js';
  
  function App(){
  

   const [result,setresult] = useState();

  let userInput;

   function checkvalue()
  {
     let userInput = document.getElementById("userInput").value;
     console.log(userInput);
    if(userInput ==''){
       setresult("enter a value")
     }
     else{
       if(userInput==1){
         document.getElementById("userInput").value = '';
        setresult(" GOOD THINK:Quality is not an act, it is a habit.  ");
        
        }
      else if(userInput==2) {
         document.getElementById("userInput").value = '';          
         setresult("GOOD THINK: Wellness Every Day, Keeps Illness Away   ");
      }
       else if(userInput==3){
         document.getElementById("userInput").value = '';
         setresult(" GOOD THINK:Nutrition is the Best Prescription.");
       }
       else if(userInput==4){
        document.getElementById("userInput").value = '';        setresult(" GOOD THINK:Learn as if you will live forever, live like you will die tomorrow.")
      }
      else if(userInput==5) {
        document.getElementById("userInput").value = '';
         setresult("GOOD THINK: When you change your thoughts, remember to also change your world. ");
      }
       else if(userInput==6) {
         document.getElementById("userInput").value = '';
         setresult(" GOOD THINK: Success is not final; failure is not fatal: It is the courage to continue that counts. ");
       }
       else if(userInput==7) {
         document.getElementById("userInput").value = '';
         setresult("GOOD THINK: It is better to fail in originality than to succeed in imitation. ");
      }
      else if(userInput==8) {
        document.getElementById("userInput").value = '';
        setresult("GOOD THINK: I never dreamed about success. I worked for it. ");
      }
      else if(userInput==9) {
        document.getElementById("userInput").value = '';
         setresult("GOOD THINK:  Success is getting what you want; happiness is wanting what you get.");
       }
      else if(userInput==10) {
        document.getElementById("userInput").value = '';
        setresult("  GOOD THINK: Don’t let yesterday take up too much of today.");
       }

      

     }
  }
    return (
     <div>
  <Header/>
    <input type='text'   id='userInput'

     style={{margin:'50px'}} placeholder='enter lucky number' ></input>

    <button type='sumbit'  name='button' onClick={checkvalue} > CLICK ME</button>
     
      <h2 id='out'>{result}</h2>
    
        </div>
        
   ); 
 }   

   
   

      
       
//    function App() {
  
//      const [product ,np]=useState( );

//      function handle(select)
//      {
//        np(select);
//     }

   
//     let content = <p>click your fev</p>;

//     if(product != undefined)
//     {
//        content = <div id="open" >
//      <h1> {SOIL_THINGS[product].title}</h1>      
//      <p>{SOIL_THINGS[product].description}</p>
//        <img src={SOIL_THINGS[product].image} className='image'/>
//        </div>
//     }
//     console.log(product);
    
//         return (
//    <div>
     
//      <Header/>
//       <main>
//       <h2>  Get started!</h2>
//       <section  id='SOIL_THINGS' className='button'>
        
//          <menu>
//         <TabButton
//        isSelected={product===0} 
//        onSelect={()=> handle(0)}>
//          Waterjug
//            </TabButton>        
//             <TabButton
//         isSelected={product===1} 
//         onSelect={()=>handle(1)}>
//            coffecub
//         </TabButton>
//         <TabButton  
//         isSelected={product===2}
//        onSelect={()=>handle(2)}>
//          soil plat
//           </TabButton>
//          <TabButton 
//         isSelected={product===3} 
//         onSelect={()=>handle(3)}>        
//           Watercontainer          
//            </TabButton>
//         </menu>
//          { content }
//       </section>
//       </main>
    
    
//      </div>
//    );
//  }




 export default App;