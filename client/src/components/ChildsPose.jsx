import React from 'react';

const ChildsPose = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Child's Pose (Balasana) 🌟
            </h1>

            <div className="w-full max-w-4xl space-y-8">
                {/* Demonstration Section */}
                <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/1311460294/photo/young-woman-doing-balasana-at-home.jpg?s=612x612&w=0&k=20&c=7lpQwuKoEVGMpA3CgBJB3LTXT_jDYFVOIkZEwRpc5_8=" 
                        alt="Child's Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-purple-300 italic">
                        "A gentle resting pose that brings calm and relaxation." [1]
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-4">How to Perform Child's Pose</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Start on your hands and knees in a tabletop position.</li>
                        <li>Bring your big toes together and sit back on your heels.</li>
                        <li>Exhale as you lower your torso down between your thighs.</li>
                        <li>Extend your arms forward on the floor or alongside your body, palms facing up.</li>
                        <li>Rest your forehead on the mat and breathe deeply for 30 seconds to a few minutes.</li>
                        <li>To come out of the pose, inhale gently and rise back to the starting position.</li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
                    <h2 className="text-2xl font-semibold text-red-400 mb-4">Precautions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>If you have knee injuries, place a folded blanket under your knees for support.</li>
                        <li>Avoid this pose if you are pregnant unless modified with guidance.</li>
                        <li>If you feel any pain in your back or neck, come out of the pose gently.</li>
                    </ul>
                </section>

                {/* Ayurvedic Remedies Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ayurvedic Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Herbal Support:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ginger Tea: Aids digestion and reduces bloating.</li>
                                <li>🍃 Peppermint: Helps soothe stomach discomfort.</li>
                                <li>🌱 Triphala: Promotes digestive health when taken daily.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-yellow-300 mb-2">Practices:</h3>
                            <ul className="space-y-2">
                                <li>Abhyanga (self-massage) before practice for relaxation.</li>
                                <li>Pranayama (breathing exercises) to enhance relaxation during the pose.</li>
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
                                <li>Gently stretches the back, hips, and thighs [1][5].</li>
                                <li>Relieves tension in the spine and promotes flexibility [3][4].</li>
                                <li>Aids digestion by massaging abdominal organs [5][7].</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Calms the nervous system, reducing stress and anxiety [2][4].</li>
                                <li>Improves focus and concentration through mindful breathing [7][8].</li>
                                <li>Enhances emotional stability by providing a sense of safety [7][8].</li>
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

export default ChildsPose;
