   var Config = {
     apiKey: "AIzaSyAKSmikdo7DYIFxVsXli2qcGyxd7_To10g",
     authDomain: "test-f68e0.firebaseapp.com",
     databaseURL: "https://test-f68e0.firebaseio.com",
     projectId: "test-f68e0",
     storageBucket: "test-f68e0.appspot.com",
     messagingSenderId: "745542438282",
     appId: "1:745542438282:web:c5c87eb86bc206a1340c73",
     measurementId: "G-ZP05FSMMBQ"
   };
   firebase.initializeApp(Config);
   firebase.analytics();

 const  senddata = firebase.database().ref("Flames"); 
 document.getElementById("go").addEventListener('submit',sc)

function sc(e)
{
e.preventDefault();

var fri=getVal("plz");
var fricrush=getVal("pleas");
// send(fri,fricrush);
}

function getVal(id)
{
return document.getElementById(id).value;
}

// function send(fri,fricrush)
// {
// senddata.child(fri).set({
// Friend_Name:fri,
// Friend_Crush_Name:fricrush,
// }); 
// }

