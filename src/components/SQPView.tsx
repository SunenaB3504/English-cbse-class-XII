import React, { useState } from 'react';
import { ChevronLeft, FileText, Download, Zap, BookOpen, PenTool, Layout } from 'lucide-react';

interface SQPData {
    year: string;
    title: string;
    fullText: string;
}

interface SQPViewProps {
    sqps: SQPData[];
    onBack: () => void;
}

export const SQPView: React.FC<SQPViewProps> = ({ sqps, onBack }) => {
    const [activeYear, setActiveYear] = useState(sqps[0].year);
    const activeSQP = sqps.find(s => s.year === activeYear) || sqps[0];

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-royal-600 font-bold hover:text-royal-800 transition-colors mb-4 group"
                    >
                        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Command Center
                    </button>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                        <Layout className="text-amber-500 h-10 w-10" />
                        SQP <span className="text-royal-600">Board Vault</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-2">Accessing authentic CBSE Sample Question Papers (2023-2026)</p>
                </div>

                <div className="flex bg-slate-200 p-1 rounded-2xl shadow-inner">
                    {sqps.map(sqp => (
                        <button
                            key={sqp.year}
                            onClick={() => setActiveYear(sqp.year)}
                            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeYear === sqp.year
                                    ? 'bg-white text-royal-600 shadow-md scale-105'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {sqp.year}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Navigation Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm sticky top-24">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Paper Structure</h3>
                        <div className="space-y-2">
                            <SectionLink icon={<BookOpen size={16} />} title="Section A: Reading" color="bg-blue-50 text-blue-600" marks="22M" />
                            <SectionLink icon={<PenTool size={16} />} title="Section B: Writing" color="bg-indigo-50 text-indigo-600" marks="18M" />
                            <SectionLink icon={<FileText size={16} />} title="Section C: Literature" color="bg-emerald-50 text-emerald-600" marks="40M" />
                        </div>

                        <div className="mt-8 pt-8 border-t border-dashed border-slate-200">
                            <button
                                className="w-full py-4 bg-royal-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-royal-700 transition-all shadow-lg shadow-royal-100"
                                onClick={() => window.print()}
                            >
                                <Download size={18} /> Export for Print
                            </button>
                        </div>
                    </div>
                </div>

                {/* Paper Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden min-h-[800px] flex flex-col">
                        <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
                            <div>
                                <div className="flex items-center gap-2 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">
                                    <Zap size={12} /> Live Forensic Paper
                                </div>
                                <h4 className="text-2xl font-black">{activeSQP.title}</h4>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Max Marks</p>
                                <p className="text-3xl font-black text-amber-500">80</p>
                            </div>
                        </div>

                        <div className="p-12 prose prose-slate max-w-none">
                            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-700 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                {activeSQP.fullText}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionLink = ({ icon, title, color, marks }: { icon: React.ReactNode; title: string, color: string, marks: string }) => (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100">
        <div className="flex items-center gap-4">
            <div className={`h-10 w-10 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <span className="font-bold text-slate-900 group-hover:text-royal-600 transition-colors">{title}</span>
        </div>
        <span className="text-[10px] font-black text-slate-400">{marks}</span>
    </div>
);
