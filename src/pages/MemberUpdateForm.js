// src/pages/MemberUpdateForm.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function MemberUpdateForm() {
    const { num } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({ num: 0, name: '', addr: '' });

    useEffect(() => {
        (async () => await axios.get(`/members/${num}`)
            .then(res => setState(res.data))
            .catch(err => console.log(err))
        )()
    }, [num]);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSave = () => {
        (async () => await axios.put(`/members/${num}`, state)
            .then(_ => navigate('/members'))
            .catch(err => console.log(err))
        )();
    }

    return (
        <>
            <h2>회원 정보 수정</h2>

            <FloatingLabel controlId='name' label='이름' className='mb-3'>
                <Form.Control name='name' type='text' placeholder='이름 입력' onChange={handleChange} />
            </FloatingLabel>

            <FloatingLabel controlId='addr' label='주소' className='mb-3'>
                <Form.Control name='addr' type='text' placeholder='주소 입력' onChange={handleChange} />
            </FloatingLabel>

            <Button variant='primary' onClick={handleSave}>수정 확인</Button>
        </>
    )
}