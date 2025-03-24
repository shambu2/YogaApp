import React from 'react';

const CobraPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Cobra Pose (Bhujangasana) 🐍
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/821957582/photo/healthy-young-man-practicing-yoga-at-home.jpg?s=612x612&w=0&k=20&c=P3NBn433-jJmC3yrloO-1dsuJ1gPrSWO-0WrnB-jEBU=" 
                        alt="Cobra Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Cobra Pose opens the heart and strengthens the spine." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Cobra Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Lie down on your stomach with your legs extended and feet hip-width apart.</li>
                        <li>Place your hands under your shoulders, with elbows close to your body.</li>
                        <li>Press into your hands and begin to lift your chest off the mat, keeping your lower body grounded.</li>
                        <li>Engage your back muscles to lift higher, ensuring your shoulders are relaxed and away from your ears.</li>
                        <li>Keep your gaze slightly forward and up, maintaining a long neck.</li>
                        <li>Hold the pose for 15–30 seconds while breathing deeply, then gently lower back down.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Avoid this pose if you have recent abdominal surgery or serious back injuries.</li>
                        <li>Consult a healthcare provider if you are pregnant or have carpal tunnel syndrome.</li>
                        <li>Keep a slight bend in your elbows to prevent hyperextension while lifting up.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: Supports strength and reduces stress when taken regularly.</li>
                                <li>🍃 Turmeric: Anti-inflammatory properties that help relieve muscle tension.</li>
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
                                <li>Strengthens the spine and opens the chest [1][4].</li>
                                <li>Improves flexibility in the spine and shoulders [2][5].</li>
                                <li>Aids in alleviating lower back pain through gentle stretching [1][6].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces fatigue and stress by promoting relaxation [1][3].</li>
                                <li>Enhances mood by opening the heart center [4][5].</li>
                                <li>Encourages a sense of empowerment and confidence [1][7].</li>
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

export default CobraPose;
