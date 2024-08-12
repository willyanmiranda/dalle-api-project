import React from 'react'
import InputRange from './input-range/InputRange'
import Button from './button/Button'
import './Form.css'

const Form = () => {
  return (
    <form action="">
        <div className='input-content'>
            <label htmlFor="prompt">Prompt</label>
            <input type="text" name="prompt" id="prompt" placeholder='Digite o prompt...' />
        </div>

        <div className='input-container'>
            <div className='input-content'>
                <label htmlFor="imageStyle">Estilo da imagem</label>
                <select name="imageStyle" id="imageStyle">
                    <option value="1">2560x1440</option>
                    <option value="2">Foto</option>
                    <option value="3">Cinema</option>
                    <option value="4">Anime</option>
                    <option value="5">3D</option>
                    <option value="6">Sem modelo</option>
                </select>
            </div>

            <div className='input-content' style={{ maxWidth: '200px'}}>
                <label htmlFor="promptNegative">Prompt negativo</label>
                <select name="promptNegative" id="promptNegative">
                    <option value="true">Ativado</option>
                    <option value="false">Desativado</option>
                </select>
            </div>
        </div>

        <div className='input-container'>
            <InputRange name="promptWidth" label="Largura"/>
            <InputRange name="promptHeight" label="Altura"/>
        </div>

        <Button name="Enviar"/>
    </form>
  )
}

export default Form