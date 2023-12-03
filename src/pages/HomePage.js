import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/cards/FeatureCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import NewsCard from '../components/cards/NewsCard';

const HomePage = () => {
    // const [latestNews, setLatestNews] = useState([]);

    // useEffect(() => {
    //     const fetchLatestNews = async () => {
    //         try {
    //             const response = await axios.get('/api/news');
    //             setLatestNews(response.data);
    //         } catch (error) {
    //             console.error('Error fetching latest news:', error.message);
    //             // Optionally, handle error (e.g., showing an error message)
    //         }
    //     };

    //     fetchLatestNews();
    // }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="text-center bg-blue-600 text-white p-20">
                <h1 className="text-5xl font-bold mb-6">Empower Your Tech Journey</h1>
                <p className="text-xl mb-8">Join a community dedicated to boosting women's presence in tech.</p>
                <Link to="/signup">
                    <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </Link>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-12">
                    <FeatureCard title="Interactive Learning" description="Engage with interactive coding exercises and build your portfolio." />
                    <FeatureCard title="Mentorship Programs" description="Connect with industry leaders and gain valuable insights." />
                    <FeatureCard title="Community Events" description="Participate in workshops and networking events." />
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-100 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">About Ada in Tech</h2>
                <p className="text-xl max-w-4xl mx-auto">Ada in Tech is dedicated to creating an inclusive environment where women can thrive in technology fields. Our mission is to provide education, support, and opportunities to women worldwide.</p>
            </section>

            {/* Services Section */}
            <section className="py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                <p className="text-xl mb-8">Discover a wide range of services tailored to enhance your technical skills and career growth.</p>
                {/* Add services details here */}
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    <TestimonialCard author="Jane Doe" text="This platform has been instrumental in my career growth." />
                    <TestimonialCard author="John Smith" text="The mentorship I received through Ada in Tech has been invaluable." />
                    {/* Add more testimonials as needed */}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white text-center py-20">
                <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="text-xl mb-8">Sign up today and take the first step towards transforming your career.</p>
                <Link to="/signup">
                    <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                        Sign Up Now
                    </button>
                </Link>
            </section>

            {/* Latest News Section */}
            {/* <section className="bg-gray-100 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Latest News</h2>
                <div className="container mx-auto grid md:grid-cols-3 gap-12">
                    {latestNews.map(newsItem => (
                        <NewsCard
                            key={newsItem.id}
                            title={newsItem.title}
                            description={newsItem.description}
                        />
                    ))}
                </div>
                    </section> */}
        </div>
    );
};

export default HomePage;
