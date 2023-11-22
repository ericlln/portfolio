type SkillsProps = {
    skills: string | null | undefined;
};

export default function Skills({ skills }: SkillsProps) {
    const array = skills?.split(',');

    return (
        <div className="flex flex-wrap">
            {array &&
                array.map((skills) => (
                    <div key={skills} className="mb-2 mr-3 rounded-xl bg-gray-500 px-2 py-1">
                        <h1 className="text-sm text-white">{skills}</h1>
                    </div>
                ))}
        </div>
    );
}
