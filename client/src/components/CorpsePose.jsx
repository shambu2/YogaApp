import React from 'react';

const CorpsePose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Corpse Pose (Savasana) 🧘‍♂️
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1390660516/photo/woman-relaxes-in-yoga-asana-savasana-outdoors.jpg?s=612x612&w=0&k=20&c=ip4pOUMxrSxkLMNmFvhyvrFcJkc4e-pOr_Q2cn2LyBw=" 
                        alt="Corpse Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "The final resting pose that integrates the benefits of your practice." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Corpse Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Lie flat on your back with your legs extended and feet hip-width apart.</li>
                        <li>Let your arms rest alongside your body, palms facing up.</li>
                        <li>Close your eyes and take a few deep breaths, allowing your body to relax into the floor.</li>
                        <li>Focus on releasing tension from each part of your body, starting from your toes to your head.</li>
                        <li>Stay in this position for 5–15 minutes, breathing deeply and mindfully.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>If you have back pain, place a bolster or pillow under your knees for support.</li>
                        <li>Avoid this pose if you feel lightheaded or dizzy; modify as needed.</li>
                        <li>Consult a healthcare provider if you are pregnant or have any serious health concerns before practicing this pose.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Chamomile Tea: Promotes relaxation and aids sleep when consumed before practice.</li>
                                <li>🍃 Ashwagandha: Reduces stress and anxiety; supports overall well-being.</li>
                                <li>🌱 Brahmi: Enhances mental clarity and calmness when taken regularly.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Practices:</h3>
                            <ul className="space-y-2">
                                <li>Abhyanga (self-massage) before practice to relax muscles.</li>
                                <li>Pranayama (breathing exercises) to enhance relaxation during Savasana.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Therapeutic Benefits Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-teal-500/20">
                    <h2 className="text-2xl font-semibold text-teal-400 mb-4">Therapeutic Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <h3 className="font-medium text-teal-300">Physical Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces stress and anxiety by activating the parasympathetic nervous system [1][3].</li>
                                <li>Lowers blood pressure and heart rate, promoting relaxation [1][2].</li>
                                <li>Aids in full-body recovery after yoga practice [1][6].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Enhances focus and concentration through mindful breathing [1][5].</li>
                                <li>Promotes emotional stability and reduces feelings of depression [3][5].</li>
                                <li>Encourages a deep sense of peace and connection with oneself [1][7].</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <footer className="mt-auto mb-4 text-gray-500">
                &copy; 2025 Yoga & Ayurveda App
            </footer>

        </div>
    );
};

export default CorpsePose;
