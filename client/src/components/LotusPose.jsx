import React from 'react';

const LotusPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Lotus Pose (Padmasana) 🌸
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1178353856/photo/a-young-man-meditates-in-a-lotus-position-over-the-ganges-river-in-rishikesh-at-the-sunset.jpg?s=612x612&w=0&k=20&c=7j4JGKEY2KP5vMvK6yp6BbQIMRXm-YIZsMLK5bOrkPU=" 
                        alt="Lotus Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Lotus Pose promotes tranquility and prepares the body for meditation." [2]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Lotus Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Sit on the floor with your legs extended in front of you (Dandasana).</li>
                        <li>Bend your right knee and place your right foot on your left thigh, ensuring the sole faces upward.</li>
                        <li>Now, bend your left knee and place your left foot on your right thigh in the same manner.</li>
                        <li>Ensure that both feet are positioned close to your abdomen and that your knees are gently pressing down towards the floor.</li>
                        <li>Place your hands on your knees in a mudra position, keeping your spine erect.</li>
                        <li>Close your eyes and take slow, deep breaths, holding the pose for 5–10 minutes or as comfortable.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Avoid this pose if you have knee or ankle injuries.</li>
                        <li>Consult a healthcare provider if you are pregnant or have severe back issues.</li>
                        <li>If you feel discomfort, consider practicing Half Lotus Pose (Ardha Padmasana) instead.</li>
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
                                <li>Improves flexibility in the hips, knees, and ankles [1][3].</li>
                                <li>Reduces muscular tension and helps manage blood pressure [1][4].</li>
                                <li>Enhances digestion by stimulating abdominal organs [1][5].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Calms the mind and alleviates stress through deep breathing [1][3].</li>
                                <li>Promotes emotional stability and relaxation [4][5].</li>
                                <li>Facilitates deeper meditation by grounding the practitioner [1][6].</li>
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

export default LotusPose;
