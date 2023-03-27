import React, { useEffect, useState } from 'react'
import { home_calls } from '../api';

export const FetchRecent = () => {
  const [posts, setPosts] = useState();

  async function handleDataFetch() {
    const result = await home_calls.get();
    setPosts(result);
  }

  useEffect( () => {
    handleDataFetch()
  }, [])

  return {posts, setPosts:handleDataFetch}
}
