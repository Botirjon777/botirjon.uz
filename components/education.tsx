"use client";

import { HiAcademicCap } from "react-icons/hi";

const courses = [
  "Algorithms & Data Structures",
  "Computer Systems Architecture",
  "REST API Development",
  "Databases",
  "Machine Learning",
  "Deep Learning",
  "Cloud-Oriented Web Apps",
  "Operating Systems",
  "Network Technologies",
  "OOP",
  "Software Engineering",
  "Artificial Intelligence",
];

const EducationComponent = () => {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="section-title">Education</h1>
          <p className="section-subtitle">My academic background</p>
        </div>

        <div className="max-w-2xl animate-fade-in-up">
          <div className="glass-card rounded-3xl p-8 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <HiAcademicCap className="w-7 h-7 text-white" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  University of Economics and Humanities
                </h2>
                <p className="text-indigo-600 font-semibold mt-1">
                  B.Sc. Computer Science
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full border border-indigo-100">
                  Mar 2022 – Feb 2026
                </span>
                <p className="text-sm text-slate-400 mt-1">Warsaw, Poland</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Relevant Courses
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-100 hover:bg-purple-100 transition-colors cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EducationComponent;
