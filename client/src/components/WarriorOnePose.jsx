import React from 'react';

const WarriorOnePose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Warrior 1 Pose (Virabhadrasana I) 🛡️
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1265049327/photo/sporty-young-woman-doing-warrior-pose-on-the-beach.jpg?s=612x612&w=0&k=20&c=p_8Ta4QMkPkba1CO1w43jmHrpGXTOJxOXL5PYRM3y5I=" 
                        alt="Warrior 1 Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Embrace your inner warrior and stand strong!" [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Warrior 1 Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Begin in Mountain Pose (Tadasana), then step your right foot forward about four feet.</li>
                        <li>Turn your left foot out at a 45-degree angle and press your left heel into the ground.</li>
                        <li>Bend your right knee so that it is directly over your right ankle, keeping your left leg straight.</li>
                        <li>Raise your arms overhead, keeping them shoulder-width apart, with palms facing each other or together.</li>
                        <li>Engage your core and lift your chest while gazing at your hands or slightly upward.</li>
                        <li>Hold the pose for 5–10 breaths, then repeat on the other side.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>If you have knee injuries, avoid bending the front knee too deeply.</li>
                        <li>Consult a healthcare provider if you are pregnant or have back issues before practicing this pose.</li>
                        <li>Ensure proper alignment of the front knee over the ankle to prevent strain.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: Supports strength and vitality when taken daily.</li>
                                <li>🍃 Turmeric Milk: Anti-inflammatory properties that aid recovery post-practice.</li>
                                <li>🌱 Ginger Tea: Helps with digestion and warms up the body before practice.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Practices:</h3>
                            <ul className="space-y-2">
                                <li>Abhyanga (self-massage) pre-practice for muscle relaxation.</li>
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
                                <li>Strengthens legs, core, and back muscles [1][3].</li>
                                <li>Improves balance and stability [5][7].</li>
                                <li>Stretches the chest and lungs, promoting better breathing [3][5].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Enhances focus and determination [3][4].</li>
                                <li>Boosts confidence by embodying strength [1][8].</li>
                                <li>Reduces stress and anxiety through mindful breathing [7][8].</li>
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

export default WarriorOnePose;
