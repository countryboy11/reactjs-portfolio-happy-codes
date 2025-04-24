import React from "react";
import { Team } from "../utils/data";

const TeamPage = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="team">
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <h5 className="text-xl font-medium mb-5 text-white text-center">TEAM</h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Team.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              title={member.title}
              role={member.role}
              skills={member.skills}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ image, title, role, skills, socialLinks }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="p-3">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h6 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          {role}
        </h6>
        <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {skills.join(", ")}
        </p>
        <div className="flex space-x-2 mb-3">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              GitHub
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              LinkedIn
            </a>
          )}
        </div>
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Follow
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586V6a1 1 0 112 0v6a1 1 0 01-1 1h-6a1 1 0 110-2h1.586l-4.293-4.293a1 1 0 010-1.414z" />
              <path d="M3 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 112 0v1a4 4 0 01-4 4H3a4 4 0 01-4-4V7a4 4 0 014-4h1a1 1 0 110 2H3z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
