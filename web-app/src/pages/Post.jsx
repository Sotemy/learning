import React from 'react'
import { useParams } from "react-router-dom"

export const Post = () => {

    const params = useParams()


  return (
    <div>Post, {params.id}</div>
  )
}
