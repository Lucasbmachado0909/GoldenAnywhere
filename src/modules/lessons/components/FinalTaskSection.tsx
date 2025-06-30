// src/modules/lessons/components/FinalTaskSection.tsx
import { useState } from 'react';
import type { WritingPracticeActivity } from '../../../types';

interface FinalTaskSectionProps {
  title: string;
  subtitle: string;
  tasks: string[];
  writingPractice?: WritingPracticeActivity;
}

const FinalTaskSection = ({ 
  title, 
  subtitle, 
  tasks,
  writingPractice
}: FinalTaskSectionProps) => {
  const [sentences, setSentences] = useState('');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioRecorded, setAudioRecorded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudioFile(e.target.files[0]);
      setAudioRecorded(true);
    }
  };

  const handleSubmit = () => {
    // Aqui você implementaria a lógica para enviar o áudio e as frases
    // Por enquanto, apenas mostramos uma mensagem de sucesso
    setSubmitted(true);
    
    // Em uma implementação real, você enviaria os dados para um servidor
    console.log('Áudio:', audioFile);
    console.log('Frases:', sentences);
  };

  return (
    <section className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
        {title}
      </h2>
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">{subtitle}</h3>
        <ul className="list-decimal list-inside space-y-4 text-lg sm:text-xl text-gray-700 ml-5">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        
        {/* Writing Practice (if provided) */}
        {writingPractice && (
          <div className="mt-6 bg-white p-4 rounded-lg border border-indigo-100">
            <h4 className="text-xl font-semibold text-indigo-700 mb-3">
              {writingPractice.instruction}
            </h4>
            {writingPractice.prompts && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {writingPractice.prompts.map((prompt, index) => (
                  <li key={index}>{prompt}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        
        <div className="mt-6">
          <div className="mb-4">
            <label htmlFor="audio-upload" className="block text-lg font-medium text-gray-700 mb-2">
              Enviar áudio:
            </label>
            <div className="flex items-center">
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md transition-colors"
                onClick={() => alert('Funcionalidade de gravação será implementada em breve!')}
              >
                <span className="mr-2">🎤</span> Gravar Áudio
              </button>
              <span className="ml-4 text-gray-500">ou</span>
              <label className="ml-4 cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                <span className="text-indigo-600">Fazer upload</span>
                <input 
                  id="audio-upload" 
                  type="file" 
                  accept="audio/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              {audioRecorded && (
                <span className="ml-4 text-green-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Áudio carregado
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="sentences" className="block text-lg font-medium text-gray-700 mb-2">
              Suas frases:
            </label>
            <textarea
              id="sentences"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Digite suas frases aqui..."
              value={sentences}
              onChange={(e) => setSentences(e.target.value)}
            ></textarea>
            <button 
              className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
              onClick={handleSubmit}
              disabled={submitted}
            >
              {submitted ? 'Tarefa Enviada' : 'Enviar Tarefa'}
            </button>
            
            {submitted && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                <p className="font-medium">Tarefa enviada com sucesso!</p>
                <p className="mt-1">Seu professor irá revisar e fornecer feedback em breve.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalTaskSection;