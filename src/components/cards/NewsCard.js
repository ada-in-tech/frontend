const NewsCard = ({ title, description, imageUrl }) => {
    return (
        <div className="news-card p-6 rounded-lg shadow-lg bg-white">
            {imageUrl && <img src={imageUrl} alt="News" className="mb-4" />}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default NewsCard;
