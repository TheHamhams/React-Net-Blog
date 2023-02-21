import React, { useState } from 'react'
import { post_calls } from '../../../api';

export interface PostProps {
    title: string,
    description: string,
    userId: number
}

export const PostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [userId, setUserId] = useState(1)

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: PostProps = {
            title: title,
            description: description,
            userId: userId
        }

        post_calls.post(data)
        // setTimeout( () => window.location.reload(), 1000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='title'>Title:</label>
                <input className='form-control' type='text' id='title' value={title} onChange={handleTitleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="description">Description:</label>
                <textarea className='form-control' id="description" value={description} onChange={handleDescriptionChange}/>
            </div>
            <button className='btn btn-primary' type="submit">Post</button>
        </form>
    )
}
