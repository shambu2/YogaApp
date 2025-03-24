import { Link } from "react-router-dom";
import { yogaPoses } from "../data/poses";

export default function MountainPose() {
  return (
<div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-100 p-5 md:p-8">
            {/* Pose Header */}
            <h1 className="text-4xl font-bold text-emerald-400 mb-6 text-center">
                Mountain Pose (Tadasana)
            </h1>

            {/* Main Content Container */}
            <div className="w-full max-w-4xl space-y-8">
                {/* Pose Demonstration */}
                <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500/20">
                    <img 
                        src="https://media.istockphoto.com/id/667293708/photo/young-yogi-attractive-woman-in-mountain-pose-white-loft-background.jpg?s=612x612&w=0&k=20&c=tGUVhAVaKj_r6eKxJzCPdPtXsyCq0DIScWTg1FxPYPo=" 
                        alt="Mountain Pose Demonstration"
                        className="w-full rounded-lg shadow-xl mb-6"
                    />
                    <p className="text-lg text-gray-300 italic">
                        "Foundation of all standing poses, Tadasana establishes proper alignment and body awareness"
                        <span className="block mt-2 text-emerald-400">- Yoga Journal [4]</span>
                    </p>
                </div>

                {/* How to Perform Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-emerald-500/20">
                    <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Step-by-Step Guidance</h2>
                    <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                        <li>Stand with feet together or hip-width apart [7]
                            <p className="ml-6 text-gray-400 text-sm">Big toes touching, heels slightly apart [4]</p></li>
                        <li>Distribute weight evenly across both feet
                            <p className="ml-6 text-gray-400 text-sm">Engage thighs, lift kneecaps without locking knees [1]</p></li>
                        <li>Lengthen spine vertically, crown reaching upward
                            <p className="ml-6 text-gray-400 text-sm">Shoulders relaxed away from ears [2]</p></li>
                        <li>Maintain for 30 seconds - 1 minute [5]
                            <p className="ml-6 text-gray-400 text-sm">Focus on deep diaphragmatic breathing [1]</p></li>
                    </ol>
                </section>

                {/* Precautions Section */}
                <section className="bg-gray-800 rounded-xl p-6 border border-rose-500/20">
                    <h2 className="text-2xl font-semibold text-rose-400 mb-4">Precautions & Contraindications</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <h3 className="font-medium text-rose-300 mb-2">Avoid When:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Low blood pressure or dizziness [1][5]</li>
                                <li>Recent foot/ankle injuries [1][3]</li>
                                <li>Late-stage pregnancy (modify stance) [1][5]</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-emerald-300 mb-2">Modifications:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Use wall support for balance [1]</li>
                                <li>Seated variation for pregnancy [1]</li>
                                <li>Feet hip-width for stability [7]</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Ayurvedic Integration */}
                <section className="bg-gray-800 rounded-xl p-6 border border-amber-500/20">
                    <h2 className="text-2xl font-semibold text-amber-400 mb-4">Ayurvedic Support</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-amber-300 mb-2">Herbal Remedies:</h3>
                            <ul className="space-y-2">
                                <li>🌿 Ashwagandha: 500mg daily for muscle strength</li>
                                <li>🌱 Brahmi Ghee: 1 tsp morning for mental focus</li>
                                <li>🍃 Triphala Tea: Post-practice digestion aid</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-amber-300 mb-2">Practices:</h3>
                            <ul className="space-y-2">
                                <li>Abhyanga (self-massage) pre-practice</li>
                                <li>Nasya (nasal oil) for respiratory support</li>
                                <li>Pranayama synchronization [1]</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Therapeutic Benefits */}
                <section className="bg-gray-800 rounded-xl p-6 border border-teal-500/20">
                    <h2 className="text-2xl font-semibold text-teal-400 mb-4">Therapeutic Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <h3 className="font-medium text-teal-300">Physical:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Improves posture & spinal alignment [4]</li>
                                <li>Strengthens legs/ankles [2]</li>
                                <li>Alleviates back pain [2][5]</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-teal-300">Mental/Emotional:</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces anxiety [2]</li>
                                <li>Enhances body awareness [4]</li>
                                <li>Improves concentration [1]</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  );
}
