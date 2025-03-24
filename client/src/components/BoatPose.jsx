import React from 'react';

const BoatPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Boat Pose (Navasana) ⛵
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1934681657/photo/full-length-of-man-practicing-yoga-boat-pose-outdoor.jpg?s=612x612&w=0&k=20&c=6_gMgIIz4nQnRG1O4RNrZ4nmgE15OWOldYXHILISB3o=" 
                        alt="Boat Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Boat Pose strengthens the core and improves balance." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Boat Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Sit on your mat with your knees bent and feet flat on the floor.</li>
                        <li>Lean back slightly, keeping your back straight, and lift your feet off the ground.</li>
                        <li>Extend your legs so that your body forms a V-shape, with your thighs at a 45-degree angle to the ground.</li>
                        <li>Stretch your arms forward, parallel to the floor, with palms facing each other.</li>
                        <li>Engage your core and keep your spine long. Hold this position for 10–30 seconds while breathing steadily.</li>
                        <li>To release, slowly lower your legs and return to a seated position.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Avoid this pose if you have back injuries or are pregnant.</li>
                        <li>Consult a healthcare provider if you have low blood pressure or neck injuries.</li>
                        <li>If you find it difficult to balance, keep your knees bent or use a block between your thighs for support.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: Enhances strength and reduces stress when taken regularly.</li>
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
                                <li>Tones abdominal muscles and strengthens the core [1][3].</li>
                                <li>Improves balance and stability [1][5].</li>
                                <li>Stimulates digestion and enhances metabolic functions [3][5].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces stress and anxiety by promoting focus [1][4].</li>
                                <li>Boosts confidence and body awareness through core engagement [5][6].</li>
                                <li>Encourages mindfulness and concentration during practice [1][7].</li>
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

export default BoatPose;
