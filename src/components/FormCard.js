import { Link } from 'react-router-dom';

export default function FormCard({ title, description, link, icon, comingSoon }) {
    const CardContent = () => (
        <div
            className={`bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 ${comingSoon ? 'opacity-60' : 'hover:shadow-lg cursor-pointer'
                }`}
        >
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {comingSoon ? (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    Coming Soon
                </span>
            ) : (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Available
                </span>
            )}
        </div>
    );

    return comingSoon ? (
        <CardContent />
    ) : (
        <Link to={link}>
            <CardContent />
        </Link>
    );
}
