
import './App.css';
import Profile from './components/Profile';




function App() {
  const me = { fullname:"Rim Trabelsi", bio:"believe in yourself", profession:"biological engineering"};
 const handleName=()=>alert(me.fullname);
  return (
    <div className="App">
      {/* appel à l'object"me" et la fonction"handlname */}
      <Profile me={me} handleName={handleName}  />
      {/* my image */}
      <img  src='gmc2.jpg' alt='error' width={"250px"} height={"200px"}  style={{marginLeft:"697px", marginTop:"-176px" ,borderRadius:"50%"}} />



    </div>
  );
}

export default App;
