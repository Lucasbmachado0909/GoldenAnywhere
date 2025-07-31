// src/modules/exercises/components/DragDropExercise.tsx
import { useState, useEffect } from 'react';

interface DragItem {
  id: number;
  text: string;
  position: 'source' | 'target';
  matched: boolean;
  targetId?: number;
}

interface DropTarget {
  id: number;
  text: string;
  itemId: number | null;
  correctItemId: number;
}

interface DragDropExerciseProps {
  items: {
    id: number;
    text: string;
  }[];
  targets: {
    id: number;
    text: string;
    correctItemId: number;
  }[];
}

const DragDropExercise = ({ items, targets }: DragDropExerciseProps) => {
  // Estado para os itens arrastáveis
  const [dragItems, setDragItems] = useState<DragItem[]>(
    items.map(item => ({
      id: item.id,
      text: item.text,
      position: 'source',
      matched: false
    }))
  );

  // Estado para os alvos de soltura
  const [dropTargets, setDropTargets] = useState<DropTarget[]>(
    targets.map(target => ({
      id: target.id,
      text: target.text,
      itemId: null,
      correctItemId: target.correctItemId
    }))
  );

  // Estado para o feedback
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  // Atualiza o score quando o feedback é mostrado
  useEffect(() => {
    if (showFeedback) {
      const correctMatches = dropTargets.filter(
        target => target.itemId === target.correctItemId
      ).length;
      setScore(correctMatches);
    }
  }, [showFeedback, dropTargets]);

  // Manipuladores de eventos de drag and drop
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: number) => {
    e.dataTransfer.setData('text/plain', itemId.toString());
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('opacity-50');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-purple-200');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('bg-purple-200');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: number) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-purple-200');
    
    const itemId = parseInt(e.dataTransfer.getData('text/plain'));
    
    // Verifica se o alvo já tem um item
    const targetHasItem = dropTargets.some(target => target.id === targetId && target.itemId !== null);
    if (targetHasItem) return;
    
    // Atualiza o estado dos alvos
    setDropTargets(prevTargets => 
      prevTargets.map(target => 
        target.id === targetId ? { ...target, itemId } : target
      )
    );
    
    // Atualiza o estado dos itens
    setDragItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId 
          ? { ...item, position: 'target', targetId, matched: true } 
          : item
      )
    );
  };

  // Função para resetar o exercício
  const resetExercise = () => {
    setDragItems(items.map(item => ({
      id: item.id,
      text: item.text,
      position: 'source',
      matched: false
    })));
    
    setDropTargets(targets.map(target => ({
      id: target.id,
      text: target.text,
      itemId: null,
      correctItemId: target.correctItemId
    })));
    
    setShowFeedback(false);
  };

  // Função para verificar as respostas
  const checkAnswers = () => {
    setShowFeedback(true);
    const feedbackElement = document.getElementById('drag-drop-feedback');
    if (feedbackElement) {
      window.scrollTo({
        top: feedbackElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Função para obter o texto do item pelo ID
  const getItemTextById = (id: number | null) => {
    if (id === null) return '';
    const item = dragItems.find(item => item.id === id);
    return item ? item.text : '';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-purple-700 mb-4">Exercício 4: Correspondência</h3>
      <p className="text-gray-700 mb-4">
        Arraste os pronomes para as frases corretas:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Área de origem dos itens */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">Pronomes:</h4>
          <div className="flex flex-wrap gap-2">
            {dragItems.filter(item => !item.matched).map(item => (
              <div 
                key={item.id} 
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragEnd={handleDragEnd}
                className="px-3 py-1 bg-white border border-purple-300 rounded-full shadow-sm cursor-move hover:bg-purple-100 transition-colors"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        
        {/* Área de destino */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2">Frases:</h4>
          <ul className="space-y-2">
            {dropTargets.map(target => (
              <li key={target.id} className="flex items-center">
                <div 
                  className={`w-16 text-center border ${target.itemId ? 'border-solid bg-white' : 'border-dashed'} border-purple-400 p-1 rounded-md mr-2 min-h-[2rem] flex items-center justify-center`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, target.id)}
                >
                  {target.itemId !== null ? getItemTextById(target.itemId) : '?'}
                </div>
                <span>{target.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={checkAnswers}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors"
        >
          Verificar Respostas
        </button>
        
        <button
          onClick={resetExercise}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Reiniciar
        </button>
      </div>
      
      {/* Feedback */}
      {showFeedback && (
        <div id="drag-drop-feedback" className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-purple-800">Resultado:</h4>
          <p className="text-lg mb-4">
            Você acertou <span className="font-bold text-purple-700">{score}</span> de {dropTargets.length} correspondências!
          </p>
          <div className="space-y-4">
            {dropTargets.map(target => {
              const isCorrect = target.itemId === target.correctItemId;
              return (
                <div key={target.id} className={`p-4 rounded-md ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  <p className="flex items-start">
                    <span className={`mr-2 mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {isCorrect ? '✓' : '✗'}
                    </span> 
                    <span className="flex-grow">
                      <span className="block mt-1">
                        Sua resposta: {target.itemId !== null ? getItemTextById(target.itemId) : 'Nenhuma resposta'}
                      </span>
                      <span className="block mt-1">
                        Resposta correta: <span className="font-medium text-green-700">{getItemTextById(target.correctItemId)}</span>
                      </span>
                      <span className="block mt-1">
                        Frase completa: <span className="font-medium">{getItemTextById(target.correctItemId)} {target.text}</span>
                      </span>
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DragDropExercise;