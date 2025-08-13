import FormCard from './components/FormCard';
import { getForms } from '../utils/loadForms';

export default function HomePage() {
    const forms = getForms();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Company Forms
                    </h1>
                    <p className="text-lg text-gray-600">
                        Access all company forms from one central location
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {forms.map(form => (
                        <FormCard
                            key={form.path}
                            title={form.title}
                            description={form.description}
                            link={form.routePath}
                            icon={form.icon}
                            comingSoon={form.comingSoon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
