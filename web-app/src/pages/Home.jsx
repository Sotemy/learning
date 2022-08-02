import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import axios from "axios"
import { useState } from 'react'

export const Home = () => {

  const [posts, setPosts] = useState([])


  React.useEffect( () => { 
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:4000/posts', {headers: {Authorization: 'Bearer '+localStorage.getItem("token")}}); 
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <h1>
        Home Page
      </h1>
      {posts.map(post =>       
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )}

    </Container>
  )
}
// 'Authorization': 'Bearer '+localStorage.getItem("token")
