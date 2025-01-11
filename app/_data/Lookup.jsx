import Image from "next/image"
export default {
    HeroHeading: "AI Logo Maker",
    HeroSubheading: "Perfect Logos for Apps, Buisnesses, and websites",
    HeroDesc:   "Create your own AI logo in just a few clicks",
    InputTitlePlaceholder: "Enter your logo idea",
    LogoTitle: 'Logo Title',
    LogoTitleDescr: 'Add your buisness, App, or website Name for a custom logo',
    LogoDescTitle: 'Describe your logo',
    LogoDescDesc: 'share your ideas, themes, or inspirations to create a custom logo',
    LogoIdeaTitle: 'Select your Design Idea',
    LogoIdeaDesc: 'Choose a design style that best suits your design',
    LogoDesignTitle: 'Choose Your Logo Style',
    LogoDesignDesc: 'Select the type of logo design that best represents your buisness, App, or website',
    LogoColorPaletteTitle: 'Choose your color palette',
    LogoColorPaletteDesc: 'Pick the colors that reflect your brands personal appearance',
    LogoPricingModelTitle: 'Select your AI Model Plan',
    LogoPricingModelDesc: 'Choose the AI model that best fits your needs',
    pricingOption: [{
        title: 'Free',
        icon: '@/public/free.png',
        features: [
            '✅ Generate unlimited logos for free',
            '✅ Longer wait times',
            '✅ wait time: 30 seconds to 3 minutes',
            '✅ Limited design options and quality',
        ],
        button: 'Generate Free'
    },
    {
        title: 'Premium',
        icon: '@/public/premium.png',
        features: [
            '✅ Generate unlimited logos',
            '✅ shorter wait times',
            '✅ wait time: less than 10 seconds',
            '✅ only 5 credits',
            '✅ More functionalities'
        ],
        button: 'Generate for 1 credit'
    }
]
}