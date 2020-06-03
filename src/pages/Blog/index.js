import React, { useState, useEffect } from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import trashIcon from '@iconify/icons-gridicons/trash';

import api from '../../services/api';

import { Conteiner } from './styles';
import Header from '../../components/Header';


export default function BlogPage () {

  const [content, setContent] = useState("");
  const [userInfo, setUsersInfo] = useState({});
  const [post, setPost] = useState([])

  useEffect(() => {
    getPosts();
  }, [post]);

  async function getPosts() {
    const response = await api.get("/users/post");
    setPost(response.data.posts);
    setUsersInfo(response.data);
  }
  
  async function handleClick () {
    const { id } = userInfo;

    await api.post("/users/post", {
      content,
      user_id: id
    });
    
  }


  async function deletePost({ id }, e) {
    e.preventDefault();
    const response = await api.delete(`/posts/delete/${id}`);
  }

  return (
    <Conteiner>
      <Header />
      <div className="title">Bem vindo, {userInfo.name}</div>
      <div className="post-input-conteiner">
        <div className="input-area">
          <textarea col="8" rows="8"
            placeholder="O que você está pensando agora?"
            onChange={e => {setContent(e.target.value)}}
          />
          <button onClick={() => {handleClick()}}>Post</button>
        </div>
      </div>
      {
        post.map(posts => {
          return (
            <div className="post-modal" key={posts.id}>
              <p>{userInfo.name}<br/>
                <span>{userInfo.username}</span>
              </p>
              <div className="content">
                <p>{posts.content}</p>
                <div onClick={ (e) => { deletePost({ id: posts.id }, e) } }>  
                  <Icon icon={trashIcon} width={"2.5em"}color="#444" id="trash-icon"/>
                </div>
              </div>
            </div>
          )
        })
      }
    </Conteiner>
  );
}