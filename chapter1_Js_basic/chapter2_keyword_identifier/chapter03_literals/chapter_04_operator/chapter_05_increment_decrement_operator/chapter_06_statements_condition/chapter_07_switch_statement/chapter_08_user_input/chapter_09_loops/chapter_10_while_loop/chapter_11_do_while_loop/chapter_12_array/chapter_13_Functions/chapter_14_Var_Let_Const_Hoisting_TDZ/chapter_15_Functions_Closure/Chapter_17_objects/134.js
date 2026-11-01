const user = {
    id: 1,
    username: "demo_user",
    firstName: "Demo",
    lastName: "User",
    fullName: "Demo User",
    isActive: true,

    address: {
        city: "Example City",
        state: "Example State",
        country: "Example Country",
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
    },

    languages: ["JavaScript", "TypeScript"],
    skills: ["Programming", "Testing"],

    education: [
        {
            degree: "Example Degree",
            institution: "Example University",
            graduationYear: 2020,
        },
    ],

    employment: {
        company: "Example Company",
        jobTitle: "Software Developer",
        department: "Engineering",
        employmentType: "Full-time",
        isRemote: true,
    },

    preferences: {
        theme: "dark",
        language: "English",
        notifications: {
            email: true,
            sms: false,
        },
    },

    getIntroduction() {
        return `Hi, I am ${this.fullName}, a ${this.employment.jobTitle} in ${this.employment.department}.`;
    },

    getLocation() {
        return `${this.address.city}, ${this.address.country}`;
    },
};

console.log(user);
console.log(user.getIntroduction());
console.log(user.getLocation());
