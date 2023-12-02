const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="feature-card p-6 rounded-lg shadow-lg bg-white">
            {icon && <img src={icon} alt="Feature icon" className="h-12 w-12" />}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
