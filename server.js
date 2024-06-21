const express = require('express');
const cors = require('cors');
const app = express();
const port = 3006;

app.use(cors());

const techCategories = {
  "categories": [
    {
      "name": "Discover",
      "cards": [
        {
          "id": 1,
          "image_url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          "title": "Exploring New Tech",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 2,
          "image_url": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
          "title": "Innovative Gadgets",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 3,
          "image_url": "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
          "title": "Latest Technology Trends",
          "views": 1200,
          "likes": 200
        }
      ]
    },
    {
      "name": "Animation",
      "cards": [
        {
          "id": 4,
          "image_url": "https://images.pexels.com/photos/1704126/pexels-photo-1704126.jpeg",
          "title": "Tech Animation Designs",
          "views": 1200,
          "likes": 200
        },
        {
          "id": 5,
          "image_url": "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
          "title": "Digital Animation",
          "views": 1800,
          "likes": 300
        },
        {
          "id": 6,
          "image_url": "https://images.pexels.com/photos/2566559/pexels-photo-2566559.jpeg",
          "title": "Animation in Tech",
          "views": 2200,
          "likes": 390
        }
      ]
    },
    {
      "name": "Branding",
      "cards": [
        {
          "id": 7,
          "image_url": "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
          "title": "Tech Branding",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 8,
          "image_url": "https://images.pexels.com/photos/3781970/pexels-photo-3781970.jpeg",
          "title": "Brand Identity in Tech",
          "views": 3300,
          "likes": 600
        },
        {
          "id": 9,
          "image_url": "https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg",
          "title": "Technology Logo Design",
          "views": 1300,
          "likes": 210
        }
      ]
    },
    {
      "name": "Illustration",
      "cards": [
        {
          "id": 10,
          "image_url": "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
          "title": "Tech Illustrations",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 11,
          "image_url": "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg",
          "title": "Digital Art in Tech",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 12,
          "image_url": "https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg",
          "title": "Illustrating Innovation",
          "views": 1200,
          "likes": 200
        }
      ]
    },
    {
      "name": "Mobile",
      "cards": [
        {
          "id": 13,
          "image_url": "https://images.pexels.com/photos/33692/delicate-arch-night-stars-landscape.jpg",
          "title": "Mobile Tech",
          "views": 1700,
          "likes": 280
        },
        {
          "id": 14,
          "image_url": "https://images.pexels.com/photos/1767605/pexels-photo-1767605.jpeg",
          "title": "Smartphone Innovations",
          "views": 2200,
          "likes": 390
        },
        {
          "id": 15,
          "image_url": "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg",
          "title": "Mobile App Development",
          "views": 1600,
          "likes": 260
        }
      ]
    },
    {
      "name": "Print",
      "cards": [
        {
          "id": 16,
          "image_url": "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
          "title": "Print Technology",
          "views": 1600,
          "likes": 260
        },
        {
          "id": 17,
          "image_url": "https://images.pexels.com/photos/265083/pexels-photo-265083.jpeg",
          "title": "3D Printing",
          "views": 2900,
          "likes": 470
        },
        {
          "id": 18,
          "image_url": "https://images.pexels.com/photos/265086/pexels-photo-265086.jpeg",
          "title": "Print Design",
          "views": 1500,
          "likes": 250
        }
      ]
    },
    {
      "name": "Product Design",
      "cards": [
        {
          "id": 19,
          "image_url": "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg",
          "title": "Tech Product Design",
          "views": 2500,
          "likes": 400
        },
        {
          "id": 20,
          "image_url": "https://images.pexels.com/photos/955743/pexels-photo-955743.jpeg",
          "title": "Innovative Gadgets",
          "views": 3300,
          "likes": 600
        },
        {
          "id": 21,
          "image_url": "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg",
          "title": "Product Prototypes",
          "views": 1300,
          "likes": 210
        }
      ]
    },
    {
      "name": "Typography",
      "cards": [
        {
          "id": 22,
          "image_url": "https://images.pexels.com/photos/1847711/pexels-photo-1847711.jpeg",
          "title": "Tech Typography",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 23,
          "image_url": "https://images.pexels.com/photos/1847721/pexels-photo-1847721.jpeg",
          "title": "Digital Fonts",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 24,
          "image_url": "https://images.pexels.com/photos/1847722/pexels-photo-1847722.jpeg",
          "title": "Typography in Tech",
          "views": 1200,
          "likes": 200
        }
      ]
    },
    {
      "name": "Web Design",
      "cards": [
        {
          "id": 25,
          "image_url": "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
          "title": "Modern Web Design",
          "views": 1500,
          "likes": 250
        },
        {
          "id": 26,
          "image_url": "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg",
          "title": "Website Development",
          "views": 3000,
          "likes": 500
        },
        {
          "id": 27,
          "image_url": "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg",
          "title": "Responsive Design",
          "views": 1200,
          "likes": 200
        }
      ]
    }
  ]
};



app.get('/api/categories', (req, res) => {
  res.json(techCategories);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


