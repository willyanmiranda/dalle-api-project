import {React, useReducer, useState} from 'react'
import { Client } from "@gradio/client";
import { useDispatch } from 'react-redux';
import { setPhotos, setLoader } from '../../../features/photos/photos';
import InputRange from './input-range/InputRange'
import Button from './button/Button'
import './Form.css'

const initialValues = {
    prompt: '',
    imageStyle: '2560 x 1440',
    promptNegative: true,
    promptWidth: 1024,
    promptHeight: 1024,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}

const Form = () => {

    const [state, dispatch] = useReducer(reducer, initialValues);
    const dispatchPhotos = useDispatch()

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatchPhotos(setLoader())
        const client = await Client.connect("mukaist/DALLE-4K");
        const result = await client.predict("/run", { 		
            prompt: state.prompt, 		
            negative_prompt: state.prompt, 		
            use_negative_prompt: state.promptNegative, 		
            style: state.imageStyle, 		
            seed: 0, 		
            width: state.promptWidth, 		
            height: state.promptHeight, 		
            guidance_scale: 0.1, 		
            randomize_seed: true, 
        });
        dispatchPhotos(setLoader())
        dispatchPhotos(setPhotos(result.data[0]))
    };

    return (
        <form>
            <div className='input-content'>
                <label htmlFor="prompt">Prompt</label>
                <input type="text" onChange={handleChange} value={state.prompt} name="prompt" id="prompt" placeholder='Digite o prompt...' />
            </div>

            <div className='input-container'>
                <div className='input-content'>
                    <label htmlFor="imageStyle">Estilo da imagem</label>
                    <select onChange={handleChange} value={state.imageStyle} name="imageStyle" id="imageStyle">
                        <option value="2560 x 1440">2560x1440</option>
                        <option value="Photo">Foto</option>
                        <option value="Cinematic">Cinema</option>
                        <option value="Anime">Anime</option>
                        <option value="3D Model">3D</option>
                        <option value="(No style)">Sem modelo</option>
                    </select>
                </div>

                <div className='input-content' style={{ maxWidth: '200px'}}>
                    <label htmlFor="promptNegative">Prompt negativo</label>
                    <select onChange={handleChange} value={state.promptNegative} name="promptNegative" id="promptNegative">
                        <option value={true}>Ativado</option>
                        <option value={false}>Desativado</option>
                    </select>
                </div>
            </div>

            <div className='input-container'>
                <InputRange handleRange={handleChange} rangeValue={state.promptWidth} name="promptWidth" label="Largura"/>
                <InputRange handleRange={handleChange} rangeValue={state.promptHeight} name="promptHeight" label="Altura"/>
            </div>

            <Button handleClick={handleSubmit} name="Criar"/>
        </form>
    )
}

export default Form; 