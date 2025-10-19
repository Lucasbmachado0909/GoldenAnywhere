// src/modules/lessons/components/DailyRoutineSection.tsx
import React from 'react';

interface DailyRoutineSectionProps {
  title: string;
  description: string;
}

const DailyRoutineSection: React.FC<DailyRoutineSectionProps> = ({
  title,
  description
}) => {
  const routineActivities = [
    {
      activity: 'wake up',
      translation: 'acordar',
      example: 'I always wake up at 7 a.m.',
      icon: '🌅',
      time: 'Morning'
    },
    {
      activity: 'take a shower',
      translation: 'tomar banho',
      example: 'She usually takes a shower in the morning.',
      icon: '🚿',
      time: 'Morning'
    },
    {
      activity: 'have breakfast',
      translation: 'tomar café da manhã',
      example: 'We always have breakfast together.',
      icon: '🍳',
      time: 'Morning'
    },
    {
      activity: 'go to school',
      translation: 'ir para escola',
      example: 'They usually go to school by bus.',
      icon: '🏫',
      time: 'Morning'
    },
    {
      activity: 'go to work',
      translation: 'ir para o trabalho',
      example: 'He sometimes goes to work by car.',
      icon: '💼',
      time: 'Morning'
    },
    {
      activity: 'study',
      translation: 'estudar',
      example: 'I usually study English at night.',
      icon: '📚',
      time: 'Evening'
    },
    {
      activity: 'watch TV',
      translation: 'assistir TV',
      example: 'We sometimes watch TV after dinner.',
      icon: '📺',
      time: 'Evening'
    },
    {
      activity: 'go to bed',
      translation: 'ir dormir',
      example: 'She never goes to bed late.',
      icon: '🛏️',
      time: 'Night'
    }
  ];

  const timeGroups = {
    Morning: routineActivities.filter(item => item.time === 'Morning'),
    Evening: routineActivities.filter(item => item.time === 'Evening'),
    Night: routineActivities.filter(item => item.time === 'Night')
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <span className="text-2xl">🔄</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Atividades por Período */}
      {Object.entries(timeGroups).map(([timeOfDay, activities]) => (
        <div key={timeOfDay} className="mb-8">
          <h4 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span>{timeOfDay === 'Morning' ? '🌅' : timeOfDay === 'Evening' ? '🌆' : '🌙'}</span>
            {timeOfDay} Activities
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <h5 className="font-bold text-blue-800 text-lg">
                      {item.activity}
                    </h5>
                    <p className="text-blue-600 text-sm">
                      ({item.translation})
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3">
                  <p className="text-gray-700 text-sm italic">
                    "{item.example}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Speaking Practice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎤</span>
          <div>
            <h5 className="font-bold text-green-800 mb-2">Speaking Practice:</h5>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Repita cada verbo 3 vezes em voz alta</li>
              <li>• Pratique as frases completas com advérbios</li>
              <li>• Crie suas próprias frases sobre sua rotina</li>
              <li>• Grave sua voz e compare com os áudios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRoutineSection;