import React, {useEffect, useState}from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    // executa a função request
    axios.get("https://alemdocodigo.herokuapp.com/list_posts")
    //adiciona a promisse
    .then((response) =>{
      setPosts(response.data.posts)
      setLoading(false)
    })
  },[])

    if(loading){
      return (
        <div className='loading'> 
        <div class="loadingio-spinner-spinner-6bzs1sadv9f"><div class="ldio-nenlxz8r4fs">
        ' <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
         </div></div>'
        </div>
        
      )
    }

	return(
		<div className="app">

			<div className="cards">
        {/* o map serve para atribuir ao post*/}
        {posts.map((post, key) =>{
          return(
            <div className="card" key={key}>
					    <div className="card-body" >
						      <h1>{post.title}</h1>
						    <div className="line"></div>
					    	  <h2>{post.content}</h2>
				    	</div>
				    </div>
          )
        })}
				
			
			</div>

		</div>
	)

}

export default App;




