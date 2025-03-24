import React from 'react';

const WindRelievingPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Wind-Relieving Pose (Apanasana) 🌬️
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/924163520/photo/young-woman-doing-knees-to-chest-exercise.jpg?s=612x612&w=0&k=20&c=Uur_wySOE6IzRzXhbDUE6nGNfvbg6xfVf4a7eus3Wx0=" 
                        alt="Wind Relieving Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">np
                        "Wind-Relieving Pose helps release tension and improve digestion." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Wind-Relieving Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Lie on your back in a relaxed position with your arms at your sides.</li>
                        <li>Draw your knees toward your chest, bending at the hips.</li>
                        <li>Gently clasp your hands around your knees without pushing them together; keep them hip-distance apart.</li>
                        <li>On an exhalation, relax your low back into the floor and draw your thighs toward your abdomen without force.</li>
                        <li>On the next inhalation, relax your arms to straighten them slightly and return your knees to the starting position.</li>
                        <li>Repeat several times, gradually lengthening your exhalation for a calming effect.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Avoid this pose if you have knee or hip injuries.</li>
                        <li>Consult a healthcare provider if you are pregnant or have severe back issues.</li>
                        <li>If you feel discomfort in your lower back, consider bending one knee and keeping the other foot flat on the floor for support.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: Enhances vitality and reduces stress when taken regularly.</li>
                                <li>🍃 Turmeric: Anti-inflammatory properties that help with recovery post-practice.</li>
                                <li>🌱 Ginger Tea: Aids digestion and warms the body before practice.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Practices:</h3>
                            <ul className="space-y-2">
                                <li>Abhyanga (self-massage) before practice for relaxation.</li>
                                <li>Pranayama (breathing exercises) to enhance focus during the pose.</li>
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
                                <li>Stretches the hips, groin, hamstrings, and glutes [1][2].</li>
                                <li>Aids in alleviating lower back pain [1][3].</li>
                                <li>Stimulates digestion and helps relieve bloating and indigestion [3][4].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces stress and tension by promoting relaxation [1][5].</li>
                                <li>Enhances emotional stability through mindful breathing [4][5].</li>
                                <li>Encourages a sense of calmness and well-being [1][6].</li>
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

export default WindRelievingPose;
