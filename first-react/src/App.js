// import React from 'react';
import './App.css';
// import { GitHubLogin } from 'react-github-login'
import logo from './logo.svg';
import { useEffect, useState} from 'react';



const CLIENT_ID = '438f9e1d00fa92021341';

function App() {

const [rerender, setRerender] = useState(false);
const [userData, setUserData] = useState([]);
  
  useEffect(() => {

  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam);


    if(codeParam && (localStorage.getItem("accessToken" === null))) {
      async function getAccessToken(){
       await fetch("http://localhost:4000/getAcessToken?code=" + codeParam, {
        method: "GET"
       }).then((response) => {
        return response.json();
       }).then((data) => {
        console.log(data);
        if(data.access_token){
          localStorage.setItem("accessToken", data.access_token);
        setRerender(!rerender);
        }
       })
      }
getAccessToken();
    }
  
  }, []);

  async function getUserData () {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      header: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    })
  }
    function loginWithGithub(){
      window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }
  

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={loginWithGithub}>
          Login with Github
        </button>
      </header>
      </div>
  )
}

export default App;



