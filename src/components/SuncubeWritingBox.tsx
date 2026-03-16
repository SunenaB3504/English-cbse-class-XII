import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SuncubeWritingBoxProps {
  type: 'Notice' | 'Letter' | 'Invite' | 'Example';
  title: string;
  content: string;
  isSpeaking?: boolean;
  onSpeak?: () => void;
  ref?: React.Ref<HTMLDivElement>;
}

export function SuncubeWritingBox({ 
  title, 
  content, 
  isSpeaking, 
  onSpeak,
  ref 
}: SuncubeWritingBoxProps) {
  return (
    <div 
      ref={ref}
      className="space-y-4 p-6 bg-slate-50 rounded-2xl border-2 border-slate-800 shadow-md transition-all hover:shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-black text-royal-900 uppercase tracking-tight">
          {title}
        </h3>
        {onSpeak && (
          <button
            onClick={onSpeak}
            className={`p-2 rounded-xl transition-all ${
              isSpeaking
                ? 'bg-royal-100 text-royal-600 ring-2 ring-royal-200 scale-110'
                : 'text-slate-400 hover:text-royal-600 hover:bg-royal-50'
            }`}
            title="Narration Hearing"
          >
            {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
      </div>
      <p className="text-slate-600 font-medium leading-relaxed font-mono text-sm whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}
