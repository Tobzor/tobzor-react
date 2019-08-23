const org = "./assets/orgmanager.jpg";
const libdgx = "./assets/libgdxgame.png";
const handsy = "./assets/projecthandsy.png";
const photo = "./assets/photoviewer.png";
let publicurl = process.env.PUBLIC_URL;

export const projects = [
    {
        title: "LibGDX Android Game",
        subtitle: "LibGDX, Java",
        status: "Done",
        description: "This was my bachelor thesis. A 2D game with simple controls, made using LibGDX and written in Java.",
        icon: "",
        card_img: publicurl + libdgx,
        location: "GitHub",
        links: {
            code: "https://github.com/Kjelli/AAGame/tree/deliverables",
            youtube: "",
            app_store: "",
            play_store: ""
        }
    },
    {
        title: "Handsy Computer Vision",
        subtitle: "OpenCV, C++",
        status: "Done",
        description:
            "This was a group assignment in 'UNIK4690 - Computer Vision' course at UiO via UNIK. Hand and gesture recognition using OpenCV, written in C++",
        icon: "",
        card_img: publicurl + handsy,
        location: "GitHub",
        links: {
            code: "https://github.com/Tobzor/UNIK4690",
            youtube: "",
            app_store: "",
            play_store: ""
        }
    },
    {
        title: "Photoviewer",
        subtitle: "C#",
        status: "Done",
        description:
            "This was an assignment in a software development course at University of Stavanger. Displays photos from a specified folder, written in C#",
        icon: "",
        card_img: publicurl + photo,
        location: "BitBucket",
        links: {
            code: "https://bitbucket.org/gkverneland/uis.dat210.photomanager",
            youtube: "",
            app_store: "",
            play_store: ""
        }
    },
    {
        title: "Lists",
        subtitle: "App developed using Fuse",
        status: "",
        description: "Developed to gain an understanding of the tool Fuse.",
        icon: "",
        card_img: "",
        location: "GitHub",
        links: {
            code: "",
            youtube: "",
            app_store: "",
            play_store: ""
        }
    }
];
