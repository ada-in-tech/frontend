const TestimonialCard = ({ text, author, image }) => {
    return (
        <div className="testimonial-card p-6 rounded-lg shadow-lg bg-white">
            {image && <img src={image} alt={author} className="h-12 w-12 rounded-full mb-4" />}
            <blockquote className="italic">"{text}"</blockquote>
            <p className="font-semibold mt-2">{author}</p>
        </div>
    );
};

export default TestimonialCard;
