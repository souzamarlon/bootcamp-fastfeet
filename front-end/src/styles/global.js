import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
*:focus{
    outline: 0;
}
html, body, #root {
    height: 100%;
    font-size: 62.5%;
}
body{
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 14px 'Roboto', sans-serif;

}
a {
   text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}

@media (max-width: 1040px){
    html{
        font-size: 40%;
    }
}


@media (max-width: 890px){
    html{
        font-size: 30%;
    }



}

.Toastify {
    font-size: 1.6rem;
}

`;
