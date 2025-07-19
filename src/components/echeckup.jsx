import { GoogleGenAI } from "@google/genai";
import "./echeckup.css";

const ai = new GoogleGenAI({ apiKey: //enter api key 
    });


const Checkup = () => {
    let details, patientAge, patientDisease;
    async function main() {
        details = document.getElementById("details").value
        patientAge = document.getElementById("age").value
        patientDisease = document.getElementById("disease").value

        const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Return a json object with keys Precautions, Symptoms and Additional comments for the given data about a patient, his age and the disease he is suffering with. Patient details: Disease: ${patientDisease} Age: ${patientAge} Additional Details: ${details}`
        });

        // `Write a recovery points (just points nothing else) for a patient based on their disease and age. The response should feel like it’s written by a caring healthcare professional — clear, warm, and easy to understand. Avoid sounding robotic or overly clinical. Keep the language simple and natural, like you're talking to the patient directly. Do not use bold text formatting like **bold** or Markdown. Instead, use HTML tags: use nothing for bold and <br/> for line breaks and ul, li tags for points. Keep the response extremely short in length. Patient details: Disease: ${patientDisease} Age: ${patientAge} Additional Details: ${details}`

        document.getElementById("content").innerHTML = `<h1>Response</h1><h2>${response.text}</h2>`
        console.log(response.text);
    }
    
    return ( 
        <div className="section flex flex-col items-start p-6">
            <h1 className="font-bold mb-4">How Are You Feeling Today?</h1>

            <div className="input flex flex-col items-start">
                <div className="flex flex-col mb-2">
                    <label>Patient Disease:</label>
                    <input id="disease" className="border border-black mt-1 px-2 py-1" required />
                </div>

                <div className="flex flex-col mb-2">
                    <label>Patient Age:</label>
                    <input type="number" id="age" className="border border-black mt-1 px-2 py-1" required/>
                </div>

                <div className="flex flex-col mb-2">
                    <label>Additional Details (optional):</label>
                    <textarea id="details" className="border border-black mt-1 px-2 py-1" />
                </div>
            </div>

            <button onClick={main} className="w-[120px] mt-4 border border-black px-2 py-1">Click</button>

            <div className="content w-[600px] pt-8" id="content"></div>
        </div>
    );
}
 
export default Checkup;
