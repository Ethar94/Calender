import  React ,{ useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const App = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate (date)
  }
let numberDay = date.getDay()
let dayOfWeekAsString=()=> {
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getDay()] ;
}
const contantString=()=> {
  if( (date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5 || date.getDay() === 6) && date >new Date()){
    return  '$99.99'
  }
  if( (date.getDay() === 2 ) && date >new Date()){
    return  '$79.99'
  }
}
const boxColor=()=> {
  if( (date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5) && date >new Date()){
    return  <div className="rectangle1"/>
  }
  if( (date.getDay() === 6 ) && date >new Date()){
    return  <div className="rectangle"/>
  }
  if( (date.getDay() === 2 ) && date >new Date()){
    return  <div className="rectangle2"/>
  }
 }
const discrbtion=(numberDay)=>{
  if(numberDay!==0 && numberDay!==1){
return<div>
<div className= 'inline'>{boxColor(numberDay)}</div><div className= 'inline'> <div>{ ' You have selected '+ dayOfWeekAsString(numberDay)+' Shipping - '  + contantString(numberDay)+' Your package will arrive on '} {date.getDate()+' '+ monthOfyearkAsString(numberMonth) }</div>
</div> 
</div> 
  }
}
let numberMonth= date.getMonth();
let monthOfyearkAsString=(numberMonth)=> {
return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][numberMonth];}
 let tileContent= ({date, view}) => {
  if(date.getDay() === 2 && (date >new Date())){
    return (<div  >$79.99</div>)
  }
  if( (date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5|| date.getDay() === 6  ) && (date >new Date()) ){
    return (<div>$9.99</div>)
  }
}
let tileClassName=({ date, view }) => {
  if(date.getDay() === 6 && date >new Date() ){
   return  'highlight'
  }
  if( (date.getDay() === 3 || date.getDay() === 4|| date.getDay() === 5) && date >new Date()){
    return  'highlight1'
  }
  if(date.getDay() === 2  && date >new Date()){
    return  'highlight2'
  }
}
  return (
    <div>
    <div  className='rowC'>
    <Calendar
     onChange={onChange} 
    value={date}
    tileDisabled={({activeStartDate,date,view})=>date.getDay()===0||date.getDay() === 1}
     minDate= {new Date()}
     tileContent={tileContent}
     tileClassName={tileClassName}
   />
   <div ><h3>DELIVERY DATE</h3>
   <div >Select the day you wish to receive your order.</div>
   <div >Our products ship frozen- please make sure you</div>
   <div >  plan ahead and save time for thawing</div>
   <br/>
   <div > <div className="rectangle1"/>  Standard - $9.99</div>
   <div > <div className="rectangle3"/> Express - $24.99</div>
   <div > <div className="rectangle2"/> Overnight - $79.99</div>
   <div > <div className="rectangle"/> Saturday - $0.00 Upgrade Free*</div>
   </div>
</div>  
<div> {discrbtion(numberDay)}</div>
  </div>
  );
}
export default App;
