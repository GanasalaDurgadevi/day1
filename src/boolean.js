import App from "./demo";
import Arr from "./array";
function Boolean(){
   var value = false;
   if(value){
    return(
        <div>
            <h1>Hello World from True block</h1>
            <App/>
        </div>
    );
   }else{
   return(
        <div>
            <h1>Hello World from False block</h1>
            <Arr/>
        </div>
   );
   }
}
export default Boolean;