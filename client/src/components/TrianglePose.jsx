import React from 'react';

const TrianglePose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Triangle Pose (Trikonasana) 🔺
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1361892050/photo/attractive-young-woman-doing-yoga-stretching-yoga-online-at-home-self-isolation-is-beneficial.jpg?s=612x612&w=0&k=20&c=l_gd-E-Q95o8E3pE2udUjXeR6Yy-o7DYb-bEsWOz1P4=" 
                        alt="Triangle Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "Triangle Pose enhances stability and stretches the body." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Triangle Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Start in Mountain Pose (Tadasana) with your feet wider than shoulder-width apart.</li>
                        <li>Turn your right foot out 90 degrees and your left foot in slightly (about 45 degrees).</li>
                        <li>Extend your arms parallel to the ground, palms facing down.</li>
                        <li>As you exhale, hinge at your hip and reach your right hand down towards your right ankle or a block.</li>
                        <li>Extend your left arm up towards the ceiling, creating a straight line with your arms.</li>
                        <li>Keep your shoulders stacked and gaze up at your left hand. Hold for 5–10 breaths.</li>
                        <li>Return to standing and repeat on the other side.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>If you have high blood pressure, avoid looking up at your hand.</li>
                        <li>Consult a healthcare provider if you have back or neck injuries before practicing this pose.</li>
                        <li>Use a block for support if you cannot reach your ankle comfortably.</li>
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
                                <li>Strengthens legs, core, and back muscles [1][3].</li>
                                <li>Improves flexibility in the spine, hips, and hamstrings [1][5].</li>
                                <li>Enhances balance and coordination [1][4].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces stress and anxiety by promoting relaxation [1][3].</li>
                                <li>Improves focus and concentration through mindful breathing [5][7].</li>
                                <li>Encourages a sense of empowerment and stability [1][8].</li>
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

export default TrianglePose;
