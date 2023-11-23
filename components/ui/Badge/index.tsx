interface Badges {
    role: string | undefined;
};

export default function Badge({ role }: Badges) {
    switch (role) {
        case "ADMIN":
            return <div className="px-1 py-0.5 ml-1 rounded text-xs border border-red-300 dark:border-red-700 bg-red-400/20 dark:bg-red-600/10 text-red-700">{role}</div>
            break;

        case "USER":
            return <div className="px-1 py-0.5 ml-1 rounded text-xs border border-green-300 dark:border-green-700 bg-green-400/20 dark:bg-green-600/10 text-green-700">{role}</div>
            break;

        default:
            return <></>;
            break;
    };
};