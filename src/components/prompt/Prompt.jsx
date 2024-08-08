import React from 'react'
import { Client } from "@gradio/client";

const Prompt = () => {
    const [text, setText] = useState('');
    const [photo, setPhoto] = useState([]);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        const client = await Client.connect("mukaist/Midjourney");
        const result = await client.predict("/run", { 		
        prompt: text, 		
        negative_prompt: text, 		
        use_negative_prompt: true, 		
        style: "2560 x 1440", 		
        seed: 0, 		
        width: 512, 		
        height: 512, 		
        guidance_scale: 0.1, 		
        randomize_seed: true, 
        });

        setPhoto(result.data[0])
    };

  return (
    <div style={{ padding: '20px' }}>
        <h1>Prompt test</h1>
        <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Add o prompt"
        style={{ marginRight: '10px' }}
        />
        <button onClick={handleSubmit}>Enviar</button>
        <div style={{ marginTop: '20px', display: "flex", gap: "20px" }}>
        {
            photo &&
            photo.map(img => {
            return <img src={img.image.url} alt="Foto" style={{ maxWidth: '100%', maxHeight: '400px' }} />
            })
        }
        </div>
    </div>
  )
}

export default Prompt