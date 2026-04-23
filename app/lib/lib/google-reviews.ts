export interface Review {
    quote: string;
    name: string;
    title: string;
    rating?: number;
    profile_photo_url?: string;
}

const MOCK_REVIEWS: Review[] = [
    {
        quote:
            "They think like founders, not vendors. The team aligned perfectly with our vision and executed with precision.",
        name: "Founder",
        title: "Stealth Startup",
    },
    {
        quote:
            "Fast execution and transparent communication. We scaled our operations significantly within months of working with MarkTale.",
        name: "Director",
        title: "Retail Brand",
    },
    {
        quote: "Their AI-driven approach gave us a competitive edge we didn't know we needed.",
        name: "CEO",
        title: "Tech Solutions",
    },
    {
        quote: "A true growth partner. From branding to tech, they handled everything seamlessly.",
        name: "Marketing Head",
        title: "DTC Brand",
    },
];

export async function getGoogleReviews(): Promise<Review[]> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn("Google Places API Key or Place ID missing. Using mock reviews.");
        return MOCK_REVIEWS;
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch reviews: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.result && data.result.reviews) {
            return data.result.reviews.map((review: any) => ({
                quote: review.text,
                name: review.author_name,
                title: "Google Review",
                rating: review.rating,
                profile_photo_url: review.profile_photo_url
            }));
        }

        return MOCK_REVIEWS;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return MOCK_REVIEWS;
    }
}
