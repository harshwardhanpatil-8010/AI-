import Image from "next/image";

export default {
    HeroHeading: "Create Stunning AI-Generated Logos",
    HeroSubheading: "Perfect Logos for Your Business, App, or Website",
    HeroDesc: "Design your own professional logo in just a few clicks with AI assistance.",
    InputTitlePlaceholder: "Enter your logo concept",
    LogoTitle: "Your Logo Title",
    LogoTitleDescr: "Enter the name of your business, app, or website to personalize your logo.",
    LogoDescTitle: "Describe Your Logo",
    LogoDescDesc: "Share your ideas, themes, or inspirations to create a truly unique logo.",
    LogoIdeaTitle: "Select Your Design Concept",
    LogoIdeaDesc: "Pick a design style that aligns with your vision and identity.",
    LogoDesignTitle: "Choose Your Logo Style",
    LogoDesignDesc: "Select a logo style that best represents your business, app, or website.",
    LogoColorPaletteTitle: "Choose Your Color Palette",
    LogoColorPaletteDesc: "Select colors that resonate with your brand's personality and appeal.",
    LogoPricingModelTitle: "Select Your AI Plan",
    LogoPricingModelDesc: "Choose the plan that best fits your needs for logo creation.",
    pricingOption: [
        {
            title: "Free Plan",
            icon: "@/public/free.png",
            features: [
                "✅ Generate unlimited logos for free.",
                "✅ Longer wait times (30 seconds to 3 minutes).",
                "✅ Limited design options and quality.",
            ],
            button: "Generate for Free",
        },
        {
            title: "Premium Plan",
            icon: "@/public/premium.png",
            features: [
                "✅ Generate unlimited logos with enhanced quality.",
                "✅ Shorter wait times (less than 10 seconds).",
                "✅ Access advanced design options.",
                "✅ Requires only 5 credits per logo.",
            ],
            button: "Generate with 1 Credit",
        },
    ],
};
