import React, { useState, useEffect } from 'react'

export default function PostCard({ post: { id, title, userId }}) {

  return (
   <>  
     <div className="postCard">
           <h4 className="postCard__title">{title}</h4>
           <p className="postCard__info">Escrito por: {userId}</p>  
    </div>

   </>    
  )
}
