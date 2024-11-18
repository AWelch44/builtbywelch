// Project data
const projects = [
    // Interactive Tools
    {
        id: 1,
        title: "TDEE Calculator",
        type: "Development Tool",
        category: "tools",
        summary: "Interactive tool for calculating Total Daily Energy Expenditure",
        liveUrl: "tdee.thewelchregime.com",
        icon: "calculator",
        tags: ["JavaScript", "Interactive", "Fitness"],
        caseStudy: {
            challenge: "Creating an accurate, user-friendly calculator for daily caloric needs",
            features: [
                "Dynamic calculations based on multiple factors",
                "Real-time updates without page refresh",
                "Mobile-responsive design"
            ],
            tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
            code_highlights: [
                "Custom validation for user inputs",
                "Complex mathematical formulas implementation",
                "State management for calculation history"
            ],
            impact: "Helps users accurately determine their daily caloric needs"
        }
    },
    {
        id: 2,
        title: "Plate Calculator",
        type: "Development Tool",
        category: "tools",
        summary: "Weightlifting plate combination calculator",
        liveUrl: "platecalculator.thewelchregime.com",
        icon: "dumbbell",
        tags: ["JavaScript", "Algorithm", "Fitness"],
        caseStudy: {
            challenge: "Developing an efficient algorithm for calculating optimal weight plate combinations",
            features: [
                "Instant plate calculations",
                "Support for different bar weights",
                "Visual plate representation"
            ],
            tech: ["JavaScript", "Algorithm Design", "Front-end Development"],
            code_highlights: [
                "Optimization algorithm for plate selection",
                "Dynamic UI updates",
                "Visual component system"
            ],
            impact: "Streamlines workout preparation for weightlifters"
        }
    },
    {
        id: 3,
        title: "Surf Forecast",
        type: "Development Tool",
        category: "tools",
        summary: "Real-time surf conditions and forecasting tool",
        liveUrl: "surfforecast.thewelchregime.com",
        icon: "cloud",
        tags: ["API Integration", "Weather Data", "Real-time"],
        caseStudy: {
            challenge: "Building a reliable surf forecasting tool with real-time data integration",
            features: [
                "Real-time weather data integration",
                "Wave height and condition forecasting",
                "Location-based predictions"
            ],
            tech: ["JavaScript", "Weather API", "Front-end Development"],
            code_highlights: [
                "Weather API integration",
                "Data visualization",
                "Geolocation features"
            ],
            impact: "Helps surfers make informed decisions about surf conditions"
        }
    },
    // Websites
    {
        id: 4,
        title: "Andy Welch Media",
        type: "Personal Website",
        category: "websites",
        summary: "Professional portfolio and personal brand website",
        liveUrl: "andywelchmedia.com",
        icon: "palette",
        tags: ["WordPress", "Personal Brand", "Portfolio"],
        caseStudy: {
            challenge: "Creating a versatile platform that showcases professional work while maintaining personal brand identity",
            features: [
                "Custom WordPress theme development",
                "Integrated portfolio system",
                "Responsive design across all devices",
                "Performance-optimized media handling"
            ],
            tech: ["WordPress", "PHP", "JavaScript", "CSS3"],
            code_highlights: [
                "Custom theme development",
                "Advanced WordPress customization",
                "SEO optimization implementation",
                "Performance optimization"
            ],
            impact: "Serves as the main hub for professional presence and content distribution"
        }
    },
    {
        id: 5,
        title: "The Welch Regime",
        type: "Brand Website",
        category: "websites",
        summary: "Fitness and lifestyle brand platform",
        liveUrl: "thewelchregime.com",
        icon: "dumbbell",
        tags: ["WordPress", "Brand Site", "Fitness"],
        caseStudy: {
            challenge: "Developing a comprehensive platform for fitness content and interactive tools",
            features: [
                "Content management system",
                "Interactive fitness tools integration",
                "User engagement features",
                "Mobile-first design"
            ],
            tech: ["WordPress", "PHP", "JavaScript", "CSS3"],
            code_highlights: [
                "Custom plugin development",
                "Third-party API integrations",
                "Performance optimization",
                "Mobile responsiveness"
            ],
            impact: "Centralized platform for fitness content and interactive tools"
        }
    },
    {
        id: 6,
        title: "Peyton Linafelter Memorial",
        type: "Memorial Website",
        category: "websites",
        summary: "Tribute and memorial website",
        liveUrl: "peytonlinafeltermemorial.andywelchmedia.com",
        icon: "heart",
        tags: ["WordPress", "Memorial", "Custom Design"],
        caseStudy: {
            challenge: "Creating a respectful and meaningful digital memorial that honors and preserves memories",
            features: [
                "Photo gallery integration",
                "Story sharing functionality",
                "Timeline of memories",
                "Mobile-friendly design"
            ],
            tech: ["WordPress", "PHP", "JavaScript", "CSS3"],
            code_highlights: [
                "Custom memorial features",
                "Media optimization",
                "Intuitive navigation system",
                "Performance optimization"
            ],
            impact: "Provides a dignified digital space for remembrance and reflection"
        }
    }
];