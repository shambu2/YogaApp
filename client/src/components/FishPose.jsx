import React from 'react';

const FishPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Fish Pose (Matsyasana) 🐟
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/924163524/photo/young-woman-doing-matsyasana-exercise.jpg?s=612x612&w=0&k=20&c=MHHxaRFvbyBBzZFcaSSvQq4LEs3x42I9tLpQACXizSs=" 
                        alt="Fish Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Fish Pose opens the heart and throat, promoting deep breathing." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Fish Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Lie flat on your back with your legs extended and feet together.</li>
                        <li>Place your hands under your hips, palms facing down, and elbows slightly outward.</li>
                        <li>Inhale and lift your upper body off the ground, pressing into your forearms.</li>
                        <li>Allow the crown of your head to gently rest on the mat while keeping your shoulders relaxed.</li>
                        <li>Press into your hips and forearms to deepen the pose, lifting your chest higher.</li>
                        <li>Hold the position for 15 seconds to 3 minutes while breathing deeply.</li>
                        <li>To release, lift your head first, then lower it back down slowly. Rest in Savasana for a few breaths.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Avoid this pose if you have neck injuries or severe back issues.</li>
                        <li>Consult a healthcare provider if you are pregnant or have high blood pressure.</li>
                        <li>Use a cushion under your head if you feel discomfort in your neck.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: Supports overall vitality and reduces stress when taken regularly.</li>
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
                                <li>Stimulates the heart and lungs, improving respiratory function [1][3].</li>
                                <li>Stretches the throat, chest, and abdomen [1][4].</li>
                                <li>Relieves tension in the upper back and neck [1][5].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces stress and anxiety by promoting relaxation [1][3].</li>
                                <li>Enhances mood by opening the heart center [4][5].</li>
                                <li>Encourages deeper breathing, increasing oxygen flow [1][7].</li>
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

export default FishPose;
